import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Reviews from '../components/home/Reviews';
import Work from '../components/home/Work';
import Contact from '../components/home/contact/Contact';

export default function Home() {
  return (
    <>
      <Banner />
      <Reviews />
      <About />
      <Work />
      <Contact />
    </>
  );
}
