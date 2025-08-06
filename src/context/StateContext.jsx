import { useState } from "react";

import { counterContext } from "./counterContex";

export const StateContext = ({ children }) => {
  const [nombre, setNombre] = useState("");

  return (
    <counterContext.Provider value={{ nombre, setNombre }}>
      {children}
    </counterContext.Provider>
  );
};
