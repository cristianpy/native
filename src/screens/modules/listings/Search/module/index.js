import _ from 'lodash'

export const UPDATE_STATE = 'screens/listings.Search/UPDATE_STATE'
export const UPDATE_FILTERS = 'screens/listings.Search/UPDATE_FILTERS'
export const CLEAR = 'screens/listings.Search/CLEAR'

export const updateState = (state) => ({type: UPDATE_STATE, state})
export const updateFilters = (filters) => ({type: UPDATE_FILTERS, filters})
export const clear = () => ({type: CLEAR})

const initialState = {
  state: 'rj',
  filters: {
    types: ['Casa', 'Apartamento', 'Cobertura']
  }
}

export default function listingsMapScreenReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATE:
      return {...state, state: action.state}
    case UPDATE_FILTERS:
      return {...state, filters: action.filters}
    case CLEAR:
      return {...initialState, state: state.state}
    default:
      return state
  }
}
