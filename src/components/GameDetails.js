import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import {motion} from 'framer-motion';
// import { useLocation } from "react-router-dom";

const GameDetails = () => {
  // const location = useLocation();
  const {gameDetails, screenshots} = useSelector(state => state.gameDetails)


  
  return ( 
    <CardShadow>
      <CardDetails>
        <Stats>
          <div className="rating">
            <h3>{gameDetails.name}</h3>
            <p>Rating: {gameDetails.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {gameDetails.platforms.map((platform) => {
                const {platform: console} = platform; 
                return (
                <p key={console.id}>{console.name}</p>
              )})}
            </div>
          </div>
        </Stats>
        <div className="media">
          <img src={gameDetails.background_image} alt={`${gameDetails.name}`}/>
        </div>
        <div className="description">
          <p>{gameDetails.description_raw}</p>
          {gameDetails.description}
        </div>
        <div className="screenshots">
          {screenshots.map((screenshot, i) => {
            return (
              <img src={screenshot.image} key={screenshot.id} alt={`${gameDetails.name} Screenshot ${i + 1}`}/>
            )
          })}
        </div>
      </CardDetails>
    </CardShadow>
   );
}; 

const CardShadow = styled(motion.div)`
  width: 100%; 
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0,0,0,0.5);
  position: fixed; 
  top: 0; 
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: purple;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`
const CardDetails = styled(motion.div)`
  width: 90%; 
  margin: 3% 0px;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background-color: white; 
  position: absolute; 
  left: 5%;
  color: black;
  img {
    width: 100%;
  }
  z-index: 10;
`

const Stats = styled(motion.div)`
  display: flex; 
  align-items: center;
  justify-content: space-between;

`

export default GameDetails;