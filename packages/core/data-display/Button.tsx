import * as React from "react";
export const Button = ({ children, onClick }) => {
  return <button onClick={onClick} type="submit">{children}</button>;
};

Button.defaultProps = {
  onClick: () => {},
  children: "Click me"
};
