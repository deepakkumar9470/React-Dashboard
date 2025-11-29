import {Searchbar,ToolBarIconButton} from "./index"
const Toolbar = ({ searchValue, onSearchChange, actions }) => {
  const regularActions = actions?.filter(a => !['grid', 'list', 'network'].includes(a.id)) || [];
  const viewActions = actions?.filter(a => ['grid', 'list', 'network'].includes(a.id)) || [];
  
  return (
    <div className="px-6 py-4 border-b border-gray-100 bg-white">
      <div className="flex items-center justify-between">
        <Searchbar
          placeholder="Search by Employee Name or Number"
          value={searchValue}
          onChange={onSearchChange}
        />

        <div className="hidden md:flex items-center gap-2">
          {regularActions.map((a) => (
            <ToolBarIconButton
              key={a.id}
              variant={a.variant || "ghost"}
              icon={a.icon}
              onClick={a.onClick}
              active={a.active}
            />
          ))}

          {viewActions.length > 0 && (
            <div className="flex items-center border border-gray-200 rounded-xl bg-white p-1 ml-2">
              {viewActions.map((a) => (
                <ToolBarIconButton
                  key={a.id}
                  variant="grouped"
                  icon={a.icon}
                  onClick={a.onClick}
                  active={a.active}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Toolbar;
