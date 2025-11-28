import Avatar from "./ui/Avatar";
import Card from "./ui/Card";
const EmployeeCard = ({ employee, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-6 cursor-pointer border border-gray-100 rounded-2xl bg-white hover:shadow-sm transition"
    >
      <div className="flex flex-col items-center text-center">
        <Avatar src={employee.imageUrl} alt={employee.name} status={employee.status} size="lg" />

        <h3 className="mt-4 text-base font-semibold text-gray-900">
          {employee.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;