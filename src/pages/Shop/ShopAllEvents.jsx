import AllEvents from "../../components/Shop/AllEvents";
import { ShopHeaderAndSidebarItem } from "./ShopHeaderAndSidebar";

const ShopAllEvents = () => {
  return (
    <ShopHeaderAndSidebarItem active={5}>
      <AllEvents />
    </ShopHeaderAndSidebarItem>
  );
};

export default ShopAllEvents;
