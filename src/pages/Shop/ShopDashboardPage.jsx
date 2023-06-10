import ShopHeaderAndSidebar from "./ShopHeaderAndSidebar";
import DashboardHero from "../../components/Shop/DashboardHero";

const ShopDashboardPage = () => {
  return (
    <ShopHeaderAndSidebar active={1}>
      <DashboardHero />
    </ShopHeaderAndSidebar>
  );
};

export default ShopDashboardPage;
