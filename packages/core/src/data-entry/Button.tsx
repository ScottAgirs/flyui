import React from "react";

export const Button = ({children}: {
  children: React.ReactNode
}) => {
  return (<button>TS Btn {children}</button>  );
}