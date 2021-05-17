const initialState = {
  popularGames: [], 
  newGames: [], 
  upcomingGames: [], 
  searchedGames: [], 
  gameDetails: null
}

export const gamesReducer = (state = initialState, action) => {
  switch(action.type){
    case "fetchGames": 
      const {popularGames, upcomingGames, newGames } = action.payload
      return {...state, popularGames, upcomingGames, newGames}
    default:
      return {...state}
  }
}