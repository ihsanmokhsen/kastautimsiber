const QUEUE_KEY = 'kastau_tip_queue';

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getTipsForSession(allTips, count) {
  if (typeof window === 'undefined') return allTips.slice(0, count);

  const ids = allTips.map((t) => t.id);
  const map = new Map(allTips.map((t) => [t.id, t]));

  let queue = [];
  try {
    queue = JSON.parse(sessionStorage.getItem(QUEUE_KEY) || '[]');
  } catch {
    queue = [];
  }

  queue = queue.filter((id) => ids.includes(id));

  if (queue.length === 0) {
    queue = shuffle(ids);
  }

  const selected = [];

  for (let i = 0; i < count; i += 1) {
    if (queue.length === 0) {
      queue = shuffle(ids);
    }
    const id = queue.shift();
    if (id && map.has(id)) {
      selected.push(map.get(id));
    }
  }

  sessionStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  return selected;
}
