import * as React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}


export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button 
      className="bg-blue-300 px-2 py-1.5 rounded focus:ring-2 focus:ring-offset-2"
      onClick={onClick} type="submit"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  children: "Click me"
};
