const Button = ({ variant = "ghost", icon: Icon, onClick, active }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`p-2 rounded-lg transition cursor-pointer ${
        active
          ? "bg-blue-50 text-gray-600 border-2 border-gray-600"
          : variant === "primary"
          ? "bg-[#3D3936] text-white"
          : "hover:bg-gray-100 text-gray-600"
      }`}
    >
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;
