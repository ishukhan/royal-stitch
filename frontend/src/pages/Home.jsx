import Hero from "../components/Hero";
import Popular from "../components/Popular"
import Offer from "../components/Offer"
import NewCollection from "../components/NewCollection"
import NewsLatter from "../components/NewsLatter"

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection/>
      <NewsLatter/>
    </>
  );
};

export default Home;
