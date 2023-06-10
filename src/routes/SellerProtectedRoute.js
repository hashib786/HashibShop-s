import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { fetchSeller } from "../redux/slice/sellerSlice";
import Loader from "../components/layout/Loader";

const initial = true;
const SelerProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticate, loading } = useSelector((state) => state.seller);
  useEffect(() => {
    initial && loading && dispatch(fetchSeller());
    !loading && !isAuthenticate && navigate("/shop-login");
  }, [dispatch, isAuthenticate, navigate, loading]);

  return loading && !isAuthenticate ? (
    <Loader />
  ) : !isAuthenticate ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    children
  );
};

export default SelerProtectedRoute;
