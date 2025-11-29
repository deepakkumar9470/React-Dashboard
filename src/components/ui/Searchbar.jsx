const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative flex-1 max-w-md">
      <img src="/icons/search.svg" alt="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-4xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar