import React, { useContext, useReducer } from 'react'
import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_SIDEBAR } from './action'
import reducer from './reducer'

const initalState = {
  isLoading: false,
  showSidebar: false,
  user: '',
}

const AppContaxt = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }
  return (
    <AppContaxt.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </AppContaxt.Provider>
  )
}
export const useAppContext = () => {
  return useContext(AppContaxt)
}
export { AppProvider }
