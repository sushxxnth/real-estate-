import './globals.css';

export const metadata = {
  title: 'Real Estate Listings',
  description: 'Browse and post real estate properties.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <h1>Real Estate Listings</h1>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4">
          <p>&copy; 2024 Real Estate Listings</p>
        </footer>
      </body>
    </html>
  );
}
