import React from "react";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import ProtectedRoute from "../routes/ProtectedRoute";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { isAuthenticate } = useSelector((state) => state.loginUser);

  return (
    <ProtectedRoute isAuthenticate={isAuthenticate}>
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
    </ProtectedRoute>
  );
};

export default CheckoutPage;
