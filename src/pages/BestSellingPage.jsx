import React, { useEffect, useState } from "react";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { useNavLink } from "../context/activeNavlink";
import { useSelector } from "react-redux";
import Loader from "../components/layout/Loader";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const { product, loading } = useSelector((state) => state.allProduct);
  const [, setActiveLink] = useNavLink();

  useEffect(() => {
    setActiveLink(2);
    const allProductsData = product ? [...product] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedData);
  }, [product, setActiveLink]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BestSellingPage;
