import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { useSelector } from "react-redux";

const SuggestedProduct = ({ data }) => {
  const [productDataSu, setProductDataSu] = useState([]);
  const { product } = useSelector((state) => state.allProduct);

  useEffect(() => {
    if (!data) return;
    const d =
      product &&
      product.filter((i) => {
        return i.category === data?.category && data._id !== i._id;
      });
    setProductDataSu(d);
  }, [data, product]);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {productDataSu &&
              productDataSu.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
