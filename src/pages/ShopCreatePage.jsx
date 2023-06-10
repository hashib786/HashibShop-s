import { useEffect } from "react";
import ShopCreate from "../components/Shop/ShopCreate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeller } from "../redux/slice/sellerSlice";
import Loader from "../components/layout/Loader";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticate, loading } = useSelector((state) => state.seller);

  useEffect(() => {
    !isAuthenticate && loading && dispatch(fetchSeller());
    isAuthenticate && navigate("/dashboard");
  }, [dispatch, isAuthenticate, navigate, loading]);

  return <div>{!loading && !isAuthenticate ? <ShopCreate /> : <Loader />}</div>;
};

export default ShopCreatePage;
