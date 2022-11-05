import React, { createContext, useReducer } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  year: "currYear",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_YEAR": {
      return {
        ...state,
        year: action.payload,
      };
    }
    default:
      throw new Error("bad action type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
