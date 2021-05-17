import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import GameDetails from "../components/GameDetails";

// Components
import GameCard from "../components/GameCard";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  const {popularGames, newGames, upcomingGames} = useSelector(state => state.games)
  const {screenshots} = useSelector(state => state.gameDetails)
  return ( 
    <GameList>
      {screenshots.length && (
      <GameDetails/>
      )}
      <h2>Upcoming Games</h2>
      <Game>
        {upcomingGames.map(game => (
          <GameCard game={game} key={game.id}/>
          
        ))}
      </Game>
      <h2>popular Games</h2>
      <Game>
        {popularGames.map(game => (
          <GameCard game={game} key={game.id}/>
          
        ))}
      </Game>
      <h2>new Games</h2>
      <Game>
        {newGames.map(game => (
          <GameCard game={game} key={game.id}/>
          
        ))}
      </Game>
    </GameList>
   );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 4rem 0rem 2rem 0rem;
  }
`
const Game = styled(motion.div)`
  min-height: 80vh;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  div {
    transition: all 0.3s ease;
    position: relative
  }
  div:hover {
    transform: translate(-5px, -10px);
    box-shadow: 5px 10px 0px tomato, 5px 10px 10px rgba(0, 0, 0, 0.5);
    background-color: #282828;
    color: white;
  }
`

export default Home;

