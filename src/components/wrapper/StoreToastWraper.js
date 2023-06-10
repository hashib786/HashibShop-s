import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Toaster } from "react-hot-toast";
import { NavLinkProvider } from "../../context/activeNavlink";

const StoreToastWraper = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Provider>
  );
};

const StoreToastNavWraper = ({ children }) => {
  return (
    <Provider store={store}>
      <NavLinkProvider>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </NavLinkProvider>
    </Provider>
  );
};

export { StoreToastNavWraper, StoreToastWraper };
