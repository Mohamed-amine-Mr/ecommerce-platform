import Hero from "../components/layout/Hero";
import Categories from "../components/product/Categories";
import FeaturedProducts from "../components/product/FeaturedProducts";
import DealOfTheDay from "../components/product/DealOfTheDay";
import LatestProducts from "../components/product/LatestProducts";
import Newsletter from "../components/common/Newsletter";

const Home = () => (
  <div className="min-h-screen bg-[#efefef] pt-20">
    <Hero />
    <Categories />
    <FeaturedProducts />
    <DealOfTheDay />
    <LatestProducts />
    <Newsletter />
  </div>
);

export default Home;
