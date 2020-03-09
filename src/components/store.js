import React, { createContext, useReducer } from 'react'

const initialState = { health: 1 }
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_HEALTH':
        return { health: action.health < 1 ? 1 : action.health }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
