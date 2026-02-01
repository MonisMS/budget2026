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
      <body className="min-h-screen flex flex-col bg-cinematic">
        <Navbar />
        <main className="flex-1 relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
