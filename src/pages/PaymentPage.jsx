import { useSelector } from "react-redux";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Payment from "../components/Payment/Payment";
import ProtectedRoute from "../routes/ProtectedRoute";
import axios from "axios";
import { server } from "../server";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentPage = () => {
  const [stripeApikey, setStripeApiKey] = useState("");
  const { isAuthenticate } = useSelector((state) => state.loginUser);

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }

  useEffect(() => {
    getStripeApikey();
  }, []);

  return (
    stripeApikey && (
      <Elements stripe={loadStripe(stripeApikey)}>
        <ProtectedRoute isAuthenticate={isAuthenticate}>
          <div className="w-full min-h-screen bg-[#f6f9fc]">
            <br />
            <br />
            <CheckoutSteps active={2} />
            <Payment />
            <br />
            <br />
          </div>
        </ProtectedRoute>
      </Elements>
    )
  );
};

export default PaymentPage;
