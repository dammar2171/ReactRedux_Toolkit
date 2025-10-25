import { useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import ProductFetching from "../components/ProductFetching";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  console.log("fetching status: ", fetchStatus);
  console.log("currently fetching", fetchStatus.currentlyFetching);

  return (
    <>
      <HeroSection />
      <ProductFetching />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <ProductList />}
    </>
  );
};
export default Home;
