import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeller } from "../redux/slice/sellerSlice";
import { useEffect } from "react";
import Loader from "../components/layout/Loader";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticate, loading } = useSelector((state) => state.seller);

  useEffect(() => {
    !isAuthenticate && loading && dispatch(fetchSeller());
    isAuthenticate && navigate("/dashboard");
  }, [dispatch, isAuthenticate, navigate, loading]);

  return (
    <div>
      {!loading && !isAuthenticate ? (
        <ShopLogin />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ShopLoginPage;
