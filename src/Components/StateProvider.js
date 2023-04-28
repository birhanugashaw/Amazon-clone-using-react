 import React, {createContext, useContext, useReducer} from 'react'
 
 //prepare the data layer
export const stateContext = createContext()

//wrap our app and provide the data layer
const StateProvider = ({reducer,initialState,children}) =>{
  return (
    <stateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </stateContext.Provider>
  )
}

//pull information from the data layer
export const useStateValue = () => useContext(stateContext)

export default StateProvider
