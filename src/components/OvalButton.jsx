import React from "react";

const OvalButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
}) => {
  const baseStyles =
    "px-3 py-1 text-sm transition-all duration-300 ease-in-out transform hover:scale-105";

  const variants = {
    default:
      "bg-white text-black hover:bg-transparent hover:text-white border-2 border-white",
    outline:
      "bg-transparent text-white hover:bg-white hover:text-black border-2 border-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        rounded-full  // Keeps it oval
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default OvalButton;
