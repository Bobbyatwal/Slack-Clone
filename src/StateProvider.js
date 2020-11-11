import React, { createContext, useContext, useReducer } from "react";

//Children is this entire app being wrapped by StateContextProvider
//StateContext is the DataLayer similar to Redux just less work!! 
//Goal is to push info to DataLayer & pull from wherever we are in the app (user name, message, etc)
//We can store anything in the DataLayer and use anywhere 
//Pass a value the the useReducer which takes Initial State and Reducer
//Reducer = Where the listening happens. Listens to any kind of action you shoot at DataLayer. 
//Initial State = What data layer looks like before we do anything to it


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//Our own hook that allows us to use values from the DataLayer
// Access & PUll data from DataLayer:
export const useStateValue = () => useContext(StateContext);



