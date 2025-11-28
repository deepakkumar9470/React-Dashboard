const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => {
  if (!Icon) return null;

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
        <Icon size={20} strokeWidth={1.5} />
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
        <Icon size={18} strokeWidth={1.5} />
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
