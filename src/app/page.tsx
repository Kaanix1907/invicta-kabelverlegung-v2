import CableProgress from '@/components/CableProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionConnector from '@/components/SectionConnector';
import Leistungen from '@/components/Leistungen';
import Standort from '@/components/Standort';
import Stats from '@/components/Stats';
import Projekte from '@/components/Projekte';
import UeberUns from '@/components/UeberUns';
import Zitat from '@/components/Zitat';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CableProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionConnector />
        <Leistungen />
        <SectionConnector />
        <Standort />
        <Stats />
        <SectionConnector />
        <Projekte />
        <SectionConnector />
        <UeberUns />
        <Zitat />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
