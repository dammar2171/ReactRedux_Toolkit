import { useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import ProductFetching from "../components/ProductFetching";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  
  return (
    <>
      <HeroSection />
      <ProductFetching />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <ProductList />}
    </>
  );
};
export default Home;
