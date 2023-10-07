import React, { createContext, useReducer } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

export const folders = {
  ILLUSTRATIONS: "illustrations",
  SKETCHES: "sketches",
  CREATURES: "creatures",
  MIXED: "mixed",
  INKTOBER: "inktober",
  CARDS: "cards",
};

const initialState = {
  folder: "illustrations",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FOLDER": {
      return {
        ...state,
        folder: action.payload,
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
