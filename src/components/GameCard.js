import React from "react";
import { useDispatch } from "react-redux";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { loadGameDetails } from "../actions/gamesActions";


const GameCard = ({game}) => {
  console.log({game});
  const {name, released, background_image: image, dominant_color: color, id } = game; 
  console.log({color});
  const formatDate = (datelike) => {
    return new Date(datelike).toLocaleString(['en-US'], {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const dispatch = useDispatch();

  const fetchGameDetails = (id) => {
    console.log({id})
    dispatch(loadGameDetails(id));
  }
  // style={{border: `1px solid #${color}88`}}
  return ( 
    <StyledGame onClick={() => fetchGameDetails(id)}>
      <h3>{name}</h3>
      <p><small style={{color: `lightgrey`}}>Release date: </small>{formatDate(released)}</p>
      <img src={image} alt={name} />
    </StyledGame>
   );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    /* margin-bottom: -18px; */
    object-fit: cover;
  }
`
export default GameCard;