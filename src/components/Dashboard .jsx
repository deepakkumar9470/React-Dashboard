import { useState, useEffect } from "react";
import { getToolbarActions, menuItems } from "../constants/menu-items";
import employees from "../constants/employees-data";
import {
  EmployeeCard,
  EmployeeListItem,
  LoadingShimmer,
  Logo,
  Navbar,
  Pagination,
  Sidebar,
  Toolbar,
} from "../components/index";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("people");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const toolbarActions = getToolbarActions(viewMode, setViewMode);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const startLoading = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    startLoading();
  }, [searchQuery, currentPage]);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#F5F6F8]">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        menuItems={menuItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        logo={<Logo />}
      />

      <main className="flex-1 overflow-auto">
        <Navbar
          title="People"
          user={{
            avatar: "/images/user.png",
            name: "Emily Rose",
          }}
        />

        <div className="bg-white m-4 p-0 rounded-2xl shadow-sm overflow-hidden">
          <Toolbar
            searchValue={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
            actions={toolbarActions}
          />

          {viewMode === "grid" ? (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {isLoading
                ? Array.from({ length: 8 }).map((_, idx) => (
                    <LoadingShimmer key={idx} />
                  ))
                : filteredEmployees.map((emp) => (
                    <EmployeeCard
                      key={emp.id}
                      employee={emp}
                      onClick={() => {}}
                    />
                  ))}
            </div>
          ) : (
            <div className="p-6 space-y-2">
              {isLoading
                ? Array.from({ length: 8 }).map((_, idx) => (
                    <LoadingShimmer key={idx} variant="list" />
                  ))
                : filteredEmployees.map((emp) => (
                    <EmployeeListItem
                      key={emp.id}
                      employee={emp}
                      onClick={() => {}}
                    />
                  ))}
            </div>
          )}
          <div className="px-6 py-4">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(200 / rowsPerPage)}
              onPageChange={setCurrentPage}
              rowsPerPage={rowsPerPage}
              onRowsChange={setRowsPerPage}
              totalItems={200}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
