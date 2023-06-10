import { Provider } from "react-redux";
import store from "../../redux/store";
import SelerProtectedRoute from "../../routes/SellerProtectedRoute";
import { Toaster } from "react-hot-toast";

const SellerProtectedAndStoreWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <SelerProtectedRoute>{children}</SelerProtectedRoute>
    </Provider>
  );
};

export default SellerProtectedAndStoreWrapper;
