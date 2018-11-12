const name = 'COMMON';
export const CommonTypes = {
  SHOW_PRELOADER: `${name}:SHOW_PRELOADER`,
  HIDE_PRELOADER: `${name}:HIDE_PRELOADER`,
  SET_PLAYER: `${name}:SET_PLAYER`,
  SET_POINTS: `${name}:SET_POINTS`,
  SET_TEAMS: `${name}:SET_TEAMS`,
  SET_GAME_OVER: `${name}:SET_GAME_OVER`
};

const initialState = {
  isShowPreloader: false,
  player: {},
  points: 0,
  teams: [],
  isGameOver: false
};

export const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CommonTypes.SHOW_PRELOADER: {
      return {
        ...state,
        isShowPreloader: true
      };
    }

    case CommonTypes.HIDE_PRELOADER: {
      return {
        ...state,
        isShowPreloader: false
      };
    }

    case CommonTypes.SET_PLAYER: {
      return {
        ...state,
        player: action.player
      };
    }

    case CommonTypes.SET_POINTS: {
      return {
        ...state,
        points: action.points
      };
    }

    case CommonTypes.SET_TEAMS: {
      return {
        ...state,
        teams: action.teams
      };
    }

    case CommonTypes.SET_GAME_OVER: {
      return {
        ...state,
        isGameOver: action.isGameOver
      };
    }

    default: {
      return state;
    }
  }
};
