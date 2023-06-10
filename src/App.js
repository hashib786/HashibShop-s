import "./App.css";

import Header from "./components/layout/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/slice/userSlice";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { fetchSeller } from "./redux/slice/sellerSlice";
import { fetchAllProduct } from "./redux/slice/allProductSlice";
import Loader from "./components/layout/Loader";
import { fetchAllEvent } from "./redux/slice/allEventSlice";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticate: useAuthenticate } = useSelector(
    (state) => state.loginUser
  );
  const { isAuthenticate: sellerAuthenticate } = useSelector(
    (state) => state.seller
  );
  const { loading, fetched } = useSelector(
    (state) => state.allProduct
  );
  const {
    loading: eventloading,
    fetched: eventfetched,
  } = useSelector((state) => state.allEvent);

  useEffect(() => {
    !useAuthenticate && dispatch(fetchUser());
    !sellerAuthenticate && dispatch(fetchSeller());
    !fetched && dispatch(fetchAllProduct());
    !eventfetched && dispatch(fetchAllEvent());
  }, [dispatch, useAuthenticate, sellerAuthenticate, fetched, eventfetched]);


  return (
    <>
      <Header />
      {loading || eventloading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
