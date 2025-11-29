import {SidebarItem} from "../index";
const Sidebar = ({
  collapsed,
  onToggle,
  menuItems,
  activeTab,
  onTabChange,
  logo,
}) => {
  return (
    <aside
      className={`${
        collapsed ? "w-[88px]" : "w-[248px]"
      } bg-[#3d3d3d] text-white transition-all duration-300 flex flex-col rounded-2xl m-4 h-[calc(100vh-2rem)]`}
    >
      <div className="h-[72px] px-5 flex items-center justify-between">
        {!collapsed && logo}
        <button
          onClick={onToggle}
          className={`p-2 hover:bg-gray-700/50 rounded-lg transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          {!collapsed ? (
            <img src="/icons/leftarrow.svg" className="w-5 h-5" alt="" />
          ) : (
            <Menu size={18} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <nav
        className={`flex-1 py-4 space-y-2 overflow-y-auto ${
          collapsed ? "px-4" : "px-3"
        }`}
      >
        {menuItems
          ?.filter((item) => !item.footer)
          .map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.id}
              onClick={() => onTabChange(item.id)}
              collapsed={collapsed}
            />
          ))}
      </nav>

      <div
        className={`flex items-center justify-center py-2 border-2 rounded-2xl border-gray-600 m-3 ${
          collapsed ? "px-4" : "px-3"
        }`}
      >
        {menuItems
          .filter((item) => item.footer)
          .map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              collapsed={collapsed}
            />
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
