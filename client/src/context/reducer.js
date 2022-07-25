import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  TOGGLE_SIDEBAR,
  TOGGLE_LOGIN_BUTTON,
} from './action'

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    }
  }
  throw new Error(`no such action type: ${action.type}`)
}

export default reducer
