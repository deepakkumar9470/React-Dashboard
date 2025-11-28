import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { Clock } from "lucide-react";
import Avatar from "./ui/Avatar";

const Navbar = ({ title, actions, user }) => {
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
    <header className="bg-white border-b border-gray-100 p-4 m-4 rounded-2xl h-[72px] flex items-center shadow-sm">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
            <Clock size={18} strokeWidth={1.5} />
            <span>{formatTime(currentTime)}</span>
          </div>

          {actions?.map((a, i) => (
            <Button
              key={i}
              variant="ghost"
              icon={a.icon}
              onClick={a.onClick}
              size="md"
            />
          ))}

          <Avatar src={user.avatar} alt={user.name} size="sm" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
