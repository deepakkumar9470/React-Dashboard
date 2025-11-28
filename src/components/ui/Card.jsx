const Card = ({ children, className = "" }) => (
  <div 
  className={`max-w-2xl w-[248px] h-[248px] bg-white 

  rounded-xl shadow-sm 
  hover:shadow-md transition-shadow 
  ${className} cursor-pointer`}
  >
    {children}
  </div>
);

export default Card;