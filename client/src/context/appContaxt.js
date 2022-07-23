import React,{useContext,useReducer} from 'react'
import { DISPLAY_ALERT,CLEAR_ALERT, TOGGLE_SIDEVBAR } from './action'

const initalState = {
 isLoading :false,
 showSidebar:false,
}

const AppContaxt = React.createContext()

const AppProvider = ({children}) => {
 const [state ,dispatch] = useReducer()
  return (
    <div>AppContaxt</div>
  )
}

export default AppContaxt