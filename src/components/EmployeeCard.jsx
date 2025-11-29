import { Avatar } from "./index";

const EmployeeCard = ({ employee, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-6 cursor-pointer border border-gray-200 rounded-2xl bg-white hover:shadow-sm transition"
    >
      <div className="flex flex-col items-center text-center">
        <Avatar
          src={employee?.imageUrl}
          alt={employee?.name}
          status={employee?.status}
          size="lg"
        />

        <h3 className="mt-4 text-sm font-normal text-[#3D3936]">
          {employee?.name}
        </h3>

        <p className="text-xs text-[#947550] mt-1">{employee?.designation}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
