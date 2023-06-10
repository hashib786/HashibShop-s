import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { useNavLink } from "../context/activeNavlink";
import { useSelector } from "react-redux";
import Loader from "../components/layout/Loader";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const [, setActiveLink] = useNavLink();
  const { product, loading } = useSelector((state) => state.allProduct);

  useEffect(() => {
    setActiveLink(3);
    if (categoryData === null) {
      const d = product;
      setData(d);
    } else {
      const d = product && product.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [categoryData, setActiveLink, product]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
