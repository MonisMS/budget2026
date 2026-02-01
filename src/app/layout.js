import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteData from '@/data/site.json';

export const metadata = {
  title: siteData.title,
  description: siteData.subtitle,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
