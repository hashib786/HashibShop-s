import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopHeaderAndSidebar = ({ active, children }) => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={active} />
        </div>
        <div className="w-full justify-center flex">{children}</div>
      </div>
    </div>
  );
};

export const ShopHeaderAndSidebarItem = ({ active, children }) => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={active} />
        </div>
        <div className="w-full justify-center flex">{children}</div>
      </div>
    </div>
  );
};

export default ShopHeaderAndSidebar;
