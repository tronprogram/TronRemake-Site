import Image from 'next/image';
import './fonts.css';
import HeroSection from './components/HeroSection';
export default function Home() {
  const gradientBackground = {
    backgroundImage: 'linear-gradient(45deg, #1d1a1f, #29212f)',
  };

  return (
    <main style={gradientBackground} className='flex min-h-screen flex-col container mx-auto py-4 px-12'>
      <HeroSection/>
    </main>
  );
}
