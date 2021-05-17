const initialState = { gameDetails: {}, screenshots: []}

export const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchGameDetails":
      const {gameDetails, screenshots} = action.payload
      return {...state, gameDetails, screenshots}
    default:
      return {...state}
  }
}