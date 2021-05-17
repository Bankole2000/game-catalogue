import {newGamesURL, popularGamesUrl, upcomingGamesURL, gameDetailsURL, gameScreenshotsURL} from '../api';

// Action creator  using thunk
export const loadGames = () => async (dispatch) => {
  // fetch data
  const res = await fetch(popularGamesUrl())
  const res2 = await fetch(upcomingGamesURL())
  const res3 = await fetch(newGamesURL())
  if(!res.ok){
    console.log(res);
    return
  }
  const {results: popularGames, count: popularCount} = await res.json()
  const {results: upcomingGames, count: upcomingCount} = await res2.json()
  const {results: newGames, count: newCount} = await res3.json()
  console.log({popularCount, upcomingCount, newCount})

  dispatch({
    type: 'fetchGames',
    payload: {
      popularGames, 
      upcomingGames,
      newGames
    }
  })
}

export const loadGameDetails = (id) => async (dispatch) => {
  const res = await fetch(gameDetailsURL(id))
  const res2 = await fetch(gameScreenshotsURL(id))
  if(!res.ok){
    console.log(res);
    return 
  }
  const data = await res.json()
  const {results} = await res2.json();
  dispatch({
    type: 'fetchGameDetails',
    payload: {
      gameDetails : data, 
      screenshots : results
    }
  })
}