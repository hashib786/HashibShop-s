import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavLink } from "../context/activeNavlink";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import ProductDetails from "../components/Products/ProductDetails";
import { useSelector } from "react-redux";
import Loader from "../components/layout/Loader";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.allProduct);
  const { events } = useSelector((state) => state.allEvent);
  const [data, setData] = useState(null);
  const [, setActiveLink] = useNavLink();
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setActiveLink(3);
    setLoading(true);
    if (eventData !== null) {
      const data = events && events.find((i) => i._id === id);
      setData(data);
    } else {
      const data = product && product.find((i) => i._id === id);
      setData(data);
    }
    setLoading(false);
  }, [product, eventData, events, id, setActiveLink]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      {/* {data !== null && <SuggestedProduct data={data} />} */}
      <ProductDetails data={data} />
      <SuggestedProduct data={data} />
      {!data && (
        <h1 className="text-2xl m-8 text-center">No Product found...</h1>
      )}
    </div>
  );
};

export default ProductDetailsPage;
