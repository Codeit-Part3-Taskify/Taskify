import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Landing/Footer';
import HeroHeader from 'src/components/Landing/HeroHeader';
import MainArticle from 'src/components/Landing/MainArticle';

export default function LandingPage() {
  return (
    <div className="w-[100%] h-[100%] bg-black">
      <Helmet>
        <title>Taskify 홈</title>
      </Helmet>
      <HeroHeader />
      <MainArticle />
      <Footer />
    </div>
  );
}
