const Button = ({ variant = "ghost", icon: Icon, onClick, size = "md" }) => {
   if(!Icon) return null;
  const variants = {
    ghost: "hover:bg-gray-100",
    primary: "bg-[#2d2d2d] text-white hover:bg-[#1a1a1a]"
  };
  
  const sizes = {
    md: "w-9 h-9"
  };
  
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-lg flex items-center justify-center transition-colors cursor-pointer`}
    >
      <Icon size={18} strokeWidth={1.5} className={variant === "primary" ? "text-white" : "text-gray-600"} />
    </button>
  );
};


export default Button;