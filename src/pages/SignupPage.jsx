import { useNavigate } from "react-router-dom";
import Signup from "../components/signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../redux/slice/userSlice";
import Loader from "../components/layout/Loader";

let initial = true;
const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticate, loading } = useSelector((state) => state.loginUser);

  useEffect(() => {
    initial && loading && dispatch(fetchUser());
    !loading && isAuthenticate && navigate("/");
    initial = false;
  }, [dispatch, isAuthenticate, navigate, loading]);

  return <div>{loading ? <Loader /> : <Signup />}</div>;
};

export default SignupPage;
