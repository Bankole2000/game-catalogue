import { config } from "./utils/config";


// Get current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if(month < 10){
    return `0${month}`
  } else {
    return month;
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate();
  if(day < 10){
    return `0${day}`
  } else {
    return day;
  }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


// Popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;


export const popularGamesUrl = () => `${config.baseURL}${popularGames}&${config.apiKey}`
export const upcomingGamesURL = () => `${config.baseURL}${upcomingGames}&${config.apiKey}`;
export const newGamesURL = () => `${config.baseURL}${newGames}&${config.apiKey}`;
export const gameDetailsURL = (id) => `${config.baseURL}games/${id}?${config.apiKey}`
export const gameScreenshotsURL = (id) => `${config.baseURL}games/${id}/screenshots?${config.apiKey}`

// console.log(popularGamesUrl());