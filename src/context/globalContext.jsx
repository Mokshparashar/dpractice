import { createContext, useContext } from "react";

const MyContext = createContext();

let data = [{ id: 1, value: "" }];

export const MyContextProvider = ({ children }) => {
  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(MyContext);
};
