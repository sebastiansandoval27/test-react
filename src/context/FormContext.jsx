import React, { createContext, useState } from "react";

export const AplicationContext = createContext(null);

export const dataValue = {
  name: "",
  address: "",
  nit: "",
  phone: "",
};

export const FormContext = ({ children }) => {
  const [data, setData] = useState(dataValue);
  return (
    <AplicationContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AplicationContext.Provider>
  );
};
