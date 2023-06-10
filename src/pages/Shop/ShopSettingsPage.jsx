import ShopSettings from "../../components/Shop/ShopSettings";
import ShopHeaderAndSidebar from "./ShopHeaderAndSidebar";

const ShopSettingsPage = () => {
  return (
    <ShopHeaderAndSidebar active={11}>
      <ShopSettings />
    </ShopHeaderAndSidebar>
  );
};

export default ShopSettingsPage;
