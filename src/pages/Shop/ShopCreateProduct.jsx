import ShopHeaderAndSidebar from "./ShopHeaderAndSidebar";
import CreateProduct from "../../components/Shop/CreateProduct";

const ShopCreateProduct = () => {
  return (
    <ShopHeaderAndSidebar active={4}>
      <CreateProduct />
    </ShopHeaderAndSidebar>
  );
};

export default ShopCreateProduct;
