const name = 'COMMON';
export const CommonTypes = {
  SHOW_PRELOADER: `${name}:SHOW_PRELOADER`,
  HIDE_PRELOADER: `${name}:HIDE_PRELOADER`
};

const initialState = {
  isShowPreloader: false
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

    default: {
      return state;
    }
  }
};
