import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
} from "./Routes.js";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
} from "./routes/ShopRoutes";
import { ShopHomePage } from "./ShopRoutes.js";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  StoreToastWraper,
  StoreToastNavWraper,
} from "./components/wrapper/StoreToastWraper";
import SellerProtectedAndStoreWrapper from "./components/wrapper/SellerProtectedAndStoreWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StoreToastNavWraper>
        <App />
      </StoreToastNavWraper>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/best-selling",
        element: <BestSellingPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/order/success",
        element: <OrderSuccessPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/user/order/:id",
        element: <OrderDetailsPage />,
      },
      {
        path: "/user/track/order/:id",
        element: <TrackOrderPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <StoreToastWraper>
        <LoginPage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <StoreToastWraper>
        <SignupPage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/profile",
    element: (
      <StoreToastNavWraper>
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      </StoreToastNavWraper>
    ),
  },
  {
    path: "/activation/:activationToken",
    element: (
      <StoreToastWraper>
        <ActivationPage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/shop-create",
    element: (
      <StoreToastWraper>
        <ShopCreatePage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/shop-login",
    element: (
      <StoreToastWraper>
        <ShopLoginPage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/shop/:id",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopHomePage />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/seller/activation/:activation_token",
    element: (
      <StoreToastWraper>
        <SellerActivationPage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopDashboardPage />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-create-product",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopCreateProduct />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-products",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopAllProducts />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-create-event",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopCreateEvents />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-events",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopAllEvents />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-coupouns",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopAllCoupouns />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-orders",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopAllOrders />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/shop/preview/:id",
    element: (
      <StoreToastWraper>
        <ShopPreviewPage />
      </StoreToastWraper>
    ),
  },
  {
    path: "/order/:id",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopOrderDetails />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-refunds",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopAllRefunds />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/settings",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopSettingsPage />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-withdraw-money",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopWithDrawMoneyPage />
      </SellerProtectedAndStoreWrapper>
    ),
  },
  {
    path: "/dashboard-messages",
    element: (
      <SellerProtectedAndStoreWrapper>
        <ShopInboxPage />
      </SellerProtectedAndStoreWrapper>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
