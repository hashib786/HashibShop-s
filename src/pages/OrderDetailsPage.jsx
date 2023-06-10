import React from "react";
import UserOrderDetails from "../components/UserOrderDetails";
import { useSelector } from "react-redux";
import ProtectedRoute from "../routes/ProtectedRoute";

const OrderDetailsPage = () => {
  const { isAuthenticate } = useSelector((state) => state.loginUser);
  return (
    <ProtectedRoute isAuthenticate={isAuthenticate}>
      <div>
        <UserOrderDetails />
      </div>
    </ProtectedRoute>
  );
};

export default OrderDetailsPage;
