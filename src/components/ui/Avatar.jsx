const Avatar = ({ src, alt, status, size = "lg" }) => {
  const sizeClasses = {
    sm: "w-9 h-9",
    lg: "w-[133px] h-[133px]"
  };
  
  return (
    <div className="relative inline-block">
      <img 
        src={src} 
        alt={alt}
        className={`${sizeClasses[size]} rounded-full object-cover border-2 border-gray-100`}
      />
      {status && (
        <span className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-[3px] border-gray-200 ${
          status === 'online' ? 'bg-[#10b981]' : 'bg-[#9ca3af]'
        }`} />
      )}
    </div>
  );
};

export default Avatar