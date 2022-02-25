import React, { useContext, useReducer } from "react";
import { dataAPI } from "../data";
import reducer from "../reducer";

const AppContext = React.createContext();

const initialState = {
  cart: dataAPI,
  total: 0,
  count: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItem = () => {
    dispatch({ type: "CLEAR_ITEM" });
  };

  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_ITEM", payload: _id });
  };

  const increateItem = (_id) => {
    dispatch({ type: "INCREATE_ITEM", payload: _id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearItem, removeItem, increateItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
