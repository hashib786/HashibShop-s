import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/slice/userSlice";
import Loader from "../components/layout/Loader";

const initial = true;
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticate, loading } = useSelector((state) => state.loginUser);

  useEffect(() => {
    initial && loading && dispatch(fetchUser());
    !loading && !isAuthenticate && navigate("/login");
  }, [dispatch, isAuthenticate, navigate, loading]);

  return loading && !isAuthenticate ? (
    <Loader />
  ) : !isAuthenticate ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    children
  );
};

export default ProtectedRoute;
