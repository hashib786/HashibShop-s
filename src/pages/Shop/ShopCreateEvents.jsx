import React from "react";
import CreateEvent from "../../components/Shop/CreateEvent.jsx";
import ShopHeaderAndSidebar from "./ShopHeaderAndSidebar";

const ShopCreateEvents = () => {
  return (
    <ShopHeaderAndSidebar active={6}>
      <CreateEvent />
    </ShopHeaderAndSidebar>
  );
};

export default ShopCreateEvents;
