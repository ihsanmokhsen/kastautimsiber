'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { QUIZ_QUESTIONS, QUIZ_LEVELS } from '@/data/quiz';

function shuffleQuestions(questions) {
  const arr = [...questions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getLevel(score, total) {
  return QUIZ_LEVELS.find((l) => score >= l.min && score <= l.max) || QUIZ_LEVELS[0];
}

export default function QuizPage() {
  const questions = useMemo(() => shuffleQuestions(QUIZ_QUESTIONS), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress = Math.round(((currentIndex + (finished ? 1 : 0)) / questions.length) * 100);

  function handleSelect(optionId) {
    if (showExplanation) return;
    setSelectedId(optionId);
  }

  function handleConfirm() {
    if (!selectedId) return;
    const isCorrect = selectedId === current.correctId;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((a) => [...a, { questionId: current.id, selectedId, isCorrect }]);
    setShowExplanation(true);
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedId(null);
      setShowExplanation(false);
    }
  }

  function handleRestart() {
    window.location.reload();
  }

  if (finished) {
    const level = getLevel(score, questions.length);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="incident-app quiz-page">
        <header className="sub-header">
          <div className="top-nav-row">
            <Link href="/app" className="back-link">← Kembali</Link>
            <a href="https://bpadntt.cloud" target="_blank" rel="noopener noreferrer" className="bpadntt-badge">bpadntt.cloud</a>
          </div>
          <h1>Hasil Asesmen</h1>
        </header>

        <div className="card quiz-result-card">
          <div className="quiz-score-ring">
            <span className="quiz-score-number">{score}</span>
            <span className="quiz-score-total">/ {questions.length}</span>
          </div>

          <div className="quiz-progress-bar-wrap">
            <div className="quiz-progress-bar" style={{ width: `${percentage}%` }} />
          </div>

          <h2 className="quiz-level-label">{level.label}</h2>
          <p className="quiz-level-desc">{level.description}</p>

          <div className="quiz-review-list">
            {answers.map((ans, i) => {
              const q = questions.find((qq) => qq.id === ans.questionId);
              return (
                <div key={ans.questionId} className={`quiz-review-item ${ans.isCorrect ? 'correct' : 'wrong'}`}>
                  <span className="quiz-review-icon">{ans.isCorrect ? '✓' : '✗'}</span>
                  <div>
                    <p className="quiz-review-question">{i + 1}. {q.question}</p>
                    <p className="quiz-review-explanation">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="quiz-result-actions">
            <button type="button" onClick={handleRestart} className="landing-btn-primary">
              Ulangi Asesmen
            </button>
            <Link href="/app" className="landing-btn-primary secondary-btn">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="incident-app quiz-page">
      <header className="sub-header">
        <div className="top-nav-row">
          <Link href="/app" className="back-link">← Kembali</Link>
          <a href="https://bpadntt.cloud" target="_blank" rel="noopener noreferrer" className="bpadntt-badge">bpadntt.cloud</a>
        </div>
        <p className="hero-kicker">Asesmen Keamanan Siber</p>
        <h1>Uji Pengetahuan Anda</h1>
      </header>

      <div className="quiz-progress-wrap">
        <div className="quiz-progress-info">
          <span>Pertanyaan {currentIndex + 1} dari {questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="quiz-progress-bar-track">
          <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="card quiz-question-card">
        <p className="quiz-question-text">{current.question}</p>

        <div className="quiz-options">
          {current.options.map((opt) => {
            let optClass = 'quiz-option';
            if (showExplanation) {
              if (opt.id === current.correctId) optClass += ' correct';
              else if (opt.id === selectedId && opt.id !== current.correctId) optClass += ' wrong';
              else optClass += ' dimmed';
            } else if (opt.id === selectedId) {
              optClass += ' selected';
            }

            return (
              <button
                key={opt.id}
                type="button"
                className={optClass}
                onClick={() => handleSelect(opt.id)}
                disabled={showExplanation}
              >
                <span className="quiz-option-letter">{opt.id.toUpperCase()}</span>
                <span className="quiz-option-text">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {showExplanation ? (
          <div className={`quiz-explanation ${selectedId === current.correctId ? 'correct' : 'wrong'}`}>
            <p className="quiz-explanation-label">
              {selectedId === current.correctId ? '✓ Benar!' : '✗ Kurang tepat'}
            </p>
            <p className="quiz-explanation-text">{current.explanation}</p>
          </div>
        ) : null}

        <div className="quiz-actions">
          {!showExplanation ? (
            <button
              type="button"
              className="landing-btn-primary quiz-btn"
              disabled={!selectedId}
              onClick={handleConfirm}
            >
              Konfirmasi Jawaban
            </button>
          ) : (
            <button
              type="button"
              className="landing-btn-primary quiz-btn"
              onClick={handleNext}
            >
              {isLast ? 'Lihat Hasil' : 'Pertanyaan Berikutnya →'}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
