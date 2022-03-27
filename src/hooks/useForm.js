import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        raiting: action.payload
      }

    default:
      return state
  }
}

export const useForm = ({ initialKeyword, initialRaiting }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    raiting: initialRaiting
  })

  const { keyword, raiting } = state

  return {
    keyword,
    raiting,
    updateKeyword: (keyword) =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),

    resetKeyword: () => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: '' }),

    updateRaiting: (raiting) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: raiting })
  }
}
