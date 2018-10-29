import { GET_DESKS, CREATE_DESK, ADD_CARD, DELETE_DESK } from '../actions'

function reducer(state = {}, action) {
  switch (action.type) {
    case GET_DESKS:
      return {
        ...state,
        ...action.desks,
      }

    case CREATE_DESK:
      return {
        ...state,
        ...action.desk,
      }

    case ADD_CARD:
      return {
        ...state,
        [action.deskId]: {
          ...state[action.deskId],
          questions: [...state[action.deskId].questions, action.card],
        },
      }

    case DELETE_DESK:
      return Object.keys(state).reduce((acc, key) => {
        if (key !== action.deskId) {
          return { ...acc, [key]: state[key] }
        }
        return acc
      }, {})

    default:
      return state
  }
}

export default reducer
