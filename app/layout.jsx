import './globals.css';

export const metadata = {
  title: 'Kastau Tim Siber',
  description: 'Cyber Awareness App for Government Employees',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <footer className="app-footer">
          <span>research.ihsanmokhsen.com</span>
          <span className="app-footer-name">Muhammad Ihsanul Hakim Mokhsen S.Kom., M.S.F</span>
        </footer>
      </body>
    </html>
  );
}
