import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { children, className: providedClassName } = props;
  const className = "text-white bg-gradient-to-br from-blue-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const finalClassName = providedClassName || className;

  return (
    <button
      className={finalClassName}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
Button.defaultProps = {
}