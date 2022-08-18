import React, { createContext, useState } from "react";

export const AplicationContext = createContext(null);

export const dataValue = {
  name: "Company",
  address: "Dir1",
  nit: "Nit1",
  phone: "314564548",
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
