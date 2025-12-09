import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="font-sans text-gray-800 antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Footer />
    </main>
  );
}
