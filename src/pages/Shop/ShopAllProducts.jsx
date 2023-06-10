import AllProducts from "../../components/Shop/AllProducts";
import { ShopHeaderAndSidebarItem } from "./ShopHeaderAndSidebar";

const ShopAllProducts = () => {
  return (
    <ShopHeaderAndSidebarItem active={3}>
      <AllProducts />
    </ShopHeaderAndSidebarItem>
  );
};

export default ShopAllProducts;
