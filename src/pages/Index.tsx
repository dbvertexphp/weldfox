
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import Home from "@/components/Homes";
import AboutUs from "@/components/about-us";
import OurServices from "@/components/services";
import ImageOverlaySection from "@/components/imageOverlay";
import Testimonials from "@/components/testimonials";
// import Testimonals from "@/components/testimonials";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs/>
      <OurServices/>
      <ImageOverlaySection />
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Index;
