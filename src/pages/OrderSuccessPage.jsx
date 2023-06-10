import React from "react";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { useSelector } from "react-redux";
import ProtectedRoute from "../routes/ProtectedRoute";
// import animationData from "../Assests/animations/104286-coding-screen.json";

const OrderSuccessPage = () => {
  const { isAuthenticate } = useSelector((state) => state.loginUser);

  return (
    <ProtectedRoute isAuthenticate={isAuthenticate}>
      <div>
        <Success />
      </div>
    </ProtectedRoute>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
