import { useState, useEffect } from "react";
import { Avatar } from "./index";

const Navbar = ({ title, user }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <header className="h-[72px] flex items-center bg-white border-b border-gray-100 p-6 m-4 rounded-2xl  shadow-sm">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-semibold text-[#3D3936]">{title}</h1>

        <div className="hidden md:flex items-center gap-4">
          <div className="w-max flex items-center gap-3 text-sm border border-gray-200 p-2 rounded-full text-gray-600 font-medium">
            <img
              src="/icons/clock.svg"
              className="w-4 h-4 brightness-0"
              alt="clock"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
            <span>{formatTime(currentTime)}</span>
            <img src="/icons/file.svg" className="w-4 h-4" alt="file" />
          </div>

          <div className="border border-gray-200 p-2 rounded-full">
            <div className="relative">
              <img
                src="/icons/notification.svg"
                className="w-5 h-5"
                alt="notification"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
          </div>

          <Avatar src={user.avatar} alt={user.name} size="sm" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
