import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menus from './components/Menus';
import Locations from './components/Locations';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Rewards from './components/Rewards';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menus />
      <Locations />
      <Events />
      <Gallery />
      <Rewards />
      <Footer />
    </main>
  );
}
