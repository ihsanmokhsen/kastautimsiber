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
        <footer className="app-footer">research.ihsanmokhsen.com</footer>
      </body>
    </html>
  );
}
