import WithdrawMoney from "../../components/Shop/WithdrawMoney";
import ShopHeaderAndSidebar from "./ShopHeaderAndSidebar";

const ShopWithDrawMoneyPage = () => {
  return (
    <ShopHeaderAndSidebar active={7}>
      <WithdrawMoney />
    </ShopHeaderAndSidebar>
  );
};

export default ShopWithDrawMoneyPage;
