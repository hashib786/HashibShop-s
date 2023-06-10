import React from "react";
import Hero from "../components/Route/Hero/Heros";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../components/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
};

export default HomePage;
