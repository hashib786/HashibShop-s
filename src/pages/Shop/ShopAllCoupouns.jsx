import AllCoupons from "../../components/Shop/AllCoupons";
import { ShopHeaderAndSidebarItem } from "./ShopHeaderAndSidebar";

const ShopAllCoupouns = () => {
  return (
    <ShopHeaderAndSidebarItem active={9}>
      <AllCoupons />
    </ShopHeaderAndSidebarItem>
  );
};

export default ShopAllCoupouns;
