import Button from "./ui/Button";
import Searchbar from "./ui/Searchbar";
const Toolbar = ({ searchValue, onSearchChange, actions }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-100 bg-white">
      <div className="flex items-center justify-between">
        <Searchbar
          placeholder="Search by Employee Name or Number"
          value={searchValue}
          onChange={onSearchChange}
        />

        <div className="hidden md:flex items-center gap-2">
          {actions?.map((a, i) => (
            <Button
              key={i}
              variant={a.variant || "ghost"}
              icon={a.icon}
              onClick={a.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
