import { RSAA } from 'redux-api-middleware';
import { CommonTypes } from '../reducers';

export const CommonActions = {
  showPreloader: () => ({type: CommonTypes.SHOW_PRELOADER}),
  hidePreloader: () => ({type: CommonTypes.HIDE_PRELOADER}),
  setPlayer: (player) => ({type: CommonTypes.SET_PLAYER, player: player}),
  setPoints: (points) => ({type: CommonTypes.SET_POINTS, points: points}),
  setTeams: (teams) => ({type: CommonTypes.SET_TEAMS, teams: teams}),
  setGameOver: (isGameOver) => ({type: CommonTypes.SET_GAME_OVER, isGameOver}),
  callApi: () => ({
    [RSAA]: {
      endpoint: '',
      method: 'GET',
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    }
  })
};
