import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/slice/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loginning User...");
    axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.dismiss(toastId);
        console.log(res);
        toast.success("Login Successfully...");
        dispatch(fetchUser());
        navigate("/");
      })
      .catch((error) => {
        toast.dismiss(toastId);
        toast.error(error?.response?.data?.message);
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl text-gray-900 font-extrabold">
          Login To Your Account
        </h2>
      </div>
      <div className="mt-8 sm:max-w-md sm:w-full sm:mx-auto">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-8" onSubmit={submitHandler}>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  name="password"
                  type={`${visible ? "text" : "password"}`}
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setVisible(false)}
                    size={25}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                    size={25}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="remember-me"
                  className="text-gray-900 text-sm ml-2"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to={".forgot-password"}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="relative w-full font-medium text-white bg-blue-600 hover:bg-blue-700 rounded border border-transparent py-2 text-sm"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <h4>Not have any account?</h4>
              <Link to={"/sign-up"} className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
