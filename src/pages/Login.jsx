import { useEffect } from "react";
import Login from "../components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/slice/userSlice";
import Loader from "../components/layout/Loader";

let initial = true;
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticate, loading } = useSelector((state) => state.loginUser);

  useEffect(() => {
    initial && loading && dispatch(fetchUser());
    !loading && isAuthenticate && navigate("/");
  }, [dispatch, isAuthenticate, navigate, loading]);

  return <div>{loading ? <Loader /> : <Login />}</div>;
};

export default LoginPage;
