import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  return;
  <PatientContext.Provider value={{}}>{children}</PatientContext.Provider>;
};
