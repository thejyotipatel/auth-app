import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  TOGGLE_SIDEBAR,
  TOGGLE_LOGIN_BUTTON,
} from './action'

const reducer = (state, action) => {
  if (action.type === TOGGLE_LOGIN_BUTTON) {
    return {
      ...state,
    }
  }
}
