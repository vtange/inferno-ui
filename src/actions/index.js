import Type from 'union-type';
Type.check = false;
import { dispatch } from '../'
import {
  INIT,
  INCREMENT,
  DECREMENT,
  RESET,
  EDIT_SUBTITLE,
  EDIT_TITLE,
} from '../constants/actionTypes'

// Record types
const DefaultAction = {
}

const ActionWithStringPayload = {
  payload: String
}

// Actions
const Actions = Type({
  [INIT]: DefaultAction,
  [INCREMENT]: DefaultAction,
  [DECREMENT]: DefaultAction,
  [RESET]: DefaultAction,
  [EDIT_SUBTITLE]: ActionWithStringPayload,
  [EDIT_TITLE]: ActionWithStringPayload,
})

// Action creators
export const init = () => dispatch(Actions[INIT]())
export const increment = () => dispatch(Actions[INCREMENT]())
export const decrement = () => dispatch(Actions[DECREMENT]())
export const reset = () => dispatch(Actions[RESET]())
export const editSubtitle = ({ target }) =>
    dispatch(Actions[EDIT_SUBTITLE](target.value))
export const editTitle = ({ target }) => {
  dispatch(Actions[EDIT_TITLE](target.value))
}

export default Actions
