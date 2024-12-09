import TopBarBlack from "./components/topBar/page";
import Navbar1 from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Hero from "./components/heroSection/page";
import ShopCard from "./components/shopCards/page";
import BestSelling from "./components/bestSelling/page";
import Carousel1 from "./components/carousel1/page";
import Carousel2 from "./components/carousel1/Carousel2";
import FeatureBlog from "./components/featureBlog/page";
 import ProductList from "./components/ProductList/page";

export default function Home() {
  return (
    <>
      <TopBarBlack />
      <Navbar1 />
      <Hero />
      <ShopCard />
      <BestSelling />
      <Carousel1 />
      <Carousel2 />
      <FeatureBlog />
      <Footer />
    </>
  );
}
