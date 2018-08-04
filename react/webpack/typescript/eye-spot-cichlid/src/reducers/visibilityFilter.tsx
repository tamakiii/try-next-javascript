import { VisibilityFilters } from '../actions'

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export interface ActionType {
  type: SET_VISIBILITY_FILTER;
}
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action:any) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter