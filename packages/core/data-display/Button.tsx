import * as React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, onClick } : ButtonProps) => {
  return <button onClick={onClick} type="submit">{children}</button>;
};

Button.defaultProps = {
  onClick: () => {},
  children: "Click me"
};
