import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import AboutSection from './components/AboutSect';
import Footer from './components/Footer';

export default function Home() {
  const gradientBackground = {
    backgroundImage: 'linear-gradient(45deg, #1d1a1f, #29212f)',
  };

  return (
    <main style={gradientBackground} className='flex min-h-screen flex-col'>
      <div className=''>
     <Header/>
      </div>
      <div class="container mx-auto px-12 py-4">
      <HeroSection/>
      </div>
      <div>
        <AboutSection/>
      </div>
      <Footer></Footer>
    </main>
  );
}
