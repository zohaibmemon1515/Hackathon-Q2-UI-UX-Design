import TopBarBlack from "./components/topBar/page";
import Navbar1 from "./components/Navbar/Navbar1";
import Footer from "./components/Footer/page";
import Hero from "./components/heroSection/page";
import ShopCard from "./components/shopCards/page";
import Carousel1 from "./components/carousel1/page";
import Carousel2 from "./components/carousel1/Carousel2";
import FeatureBlog from "./components/featureBlog/page";
import ProductDisplay from "./components/productDisplay/page";

export default function Home() {
  return (
    <>
      <TopBarBlack />
      <Navbar1 />
      <Hero />
      <ShopCard />
      <ProductDisplay />
      <Carousel1 />
      <Carousel2 />
      <FeatureBlog />
      <Footer />
    </>
  );
}
