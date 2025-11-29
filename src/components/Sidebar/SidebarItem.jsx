const SidebarItem = ({ icon, label, active, onClick, collapsed }) => {
  if (!icon) return null;

  if (collapsed) {
    return (
      <button
        onClick={onClick}
        className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
          active
            ? "bg-white text-gray-900"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        <img 
          src={icon} 
          alt={label} 
          className={`w-5 h-5 ${active ? 'brightness-0' : 'brightness-200'}`}
        />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer ${
        active
          ? "bg-white text-gray-900"
          : "text-gray-300 hover:bg-gray-700/40 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <img 
          src={icon} 
          alt={label} 
          className={`w-[18px] h-[18px] ${active ? 'brightness-0' : 'brightness-200'}`}
        />
        <span className="text-[14px] font-normal">{label}</span>
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={active ? "text-gray-900" : "text-gray-500"}
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SidebarItem;
