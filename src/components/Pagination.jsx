
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsChange,
  totalItems,
}) => {
  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between pt-6">
      <div className="flex items-center gap-3">
        <span className="hidden md:block font-medium text-sm text-[#3D3936]">
          Rows per page:
        </span>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsChange(Number(e.target.value))}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 outline-none bg-white"
        >
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-600">
          {startItem}-{endItem} of {totalItems}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <img src="/icons/arrowright.svg" className="w-5 h-5" alt="arrowright" />
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
           <img src="/icons/arrowright.svg" className="w-5 h-5" alt="arrowright" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
