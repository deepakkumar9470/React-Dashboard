const ToolBarIconButton = ({ variant = "ghost", icon, onClick, active }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  if (variant === "grouped") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all cursor-pointer ${
          active ? "bg-[#2D2D2D]" : "bg-transparent hover:bg-gray-100"
        }`}
      >
        {icon && (
          <img
            src={icon}
            alt="icon"
            className={`w-5 h-5 transition-all ${
              active
                ? "brightness-0 invert"
                : "brightness-0 opacity-60 group-hover:opacity-100"
            }`}
          />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all cursor-pointer group ${
        active
          ? "bg-[#2D2D2D] text-white shadow-lg"
          : variant === "primary"
          ? "bg-[#2D2D2D] text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
      }`}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          className={`w-5 h-5 transition-all ${
            active || variant === "primary"
              ? "brightness-0 invert"
              : "brightness-0 opacity-60 group-hover:opacity-100"
          }`}
        />
      )}
    </button>
  );
};
export default ToolBarIconButton;
