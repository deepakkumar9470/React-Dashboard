import { useState } from "react";
import {headerActions, menuItems, toolbarActions} from "../constants/menu-items";
import employees from "../constants/employees-data";
import EmployeeCard from "./EmployeeCard";
import Navbar from "./Navbar";
import Logo from "./ui/Logo";
import Sidebar from "./Sidebar/Sidebar";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";

const Dashboard = () => {
const [activeTab, setActiveTab] = useState('people');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  
  const filteredEmployees = employees.filter(emp =>
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
        logo={<Logo/>}
  />

  <main className="flex-1 overflow-auto">
    <Navbar
      title="People"
      actions={headerActions}
      user={{
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        name: "Current User",
      }}
    />

    <div className="bg-white m-4 p-0 rounded-2xl shadow-sm overflow-hidden">
      <Toolbar
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        actions={toolbarActions}
      />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEmployees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} onClick={() => {}} />
        ))}
      </div>

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
