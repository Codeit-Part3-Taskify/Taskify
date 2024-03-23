import Footer from 'src/components/Landing/Footer';
import HeroHeader from 'src/components/Landing/HeroHeader';
import MainArticle from 'src/components/Landing/MainArticle';

export default function LandingPage() {
  return (
    <div className="w-[100%] h-[100%] bg-black">
      <HeroHeader />
      <MainArticle />
      <Footer />
    </div>
  );
}
