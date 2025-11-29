import {Avatar} from "./index";
const EmployeeListItem = ({ employee, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-4 cursor-pointer border border-gray-200 rounded-lg bg-white hover:shadow-sm transition flex items-center gap-4"
    >
      <Avatar
        src={employee.imageUrl} 
        alt={employee.name} 
        status={employee.status} 
        size="md" 
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 truncate">
          {employee.name}
        </h3>
        <p className="text-sm text-gray-500 truncate">
          {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default EmployeeListItem