import React from "react";
import { useSelector } from "react-redux";

const GameDetails = () => {

  const {gameDetails, screenshots} = useSelector(state => state.gameDetails)
  
  return ( 
    <div>
      <h1>Game Details</h1>
    </div>
   );
}
 
export default GameDetails;