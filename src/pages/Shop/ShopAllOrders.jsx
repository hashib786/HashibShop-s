import AllOrders from "../../components/Shop/AllOrders";
import { ShopHeaderAndSidebarItem } from "./ShopHeaderAndSidebar";

const ShopAllOrders = () => {
  return (
    <ShopHeaderAndSidebarItem active={2}>
      <AllOrders />
    </ShopHeaderAndSidebarItem>
  );
};

export default ShopAllOrders;
