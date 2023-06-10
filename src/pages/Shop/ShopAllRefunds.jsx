import React from "react";
import AllRefundOrders from "../../components/Shop/AllRefundOrders";
import { ShopHeaderAndSidebarItem } from "./ShopHeaderAndSidebar";

const ShopAllRefunds = () => {
  return (
    <div>
      <ShopHeaderAndSidebarItem active={10}>
        <AllRefundOrders />
      </ShopHeaderAndSidebarItem>
    </div>
  );
};

export default ShopAllRefunds;
