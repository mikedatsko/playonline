import { RSAA } from 'redux-api-middleware';
import { CommonTypes } from '../reducers';

export const CommonActions = {
  showPreloader: () => ({type: CommonTypes.SHOW_PRELOADER}),
  hidePreloader: () => ({type: CommonTypes.HIDE_PRELOADER}),
  callApi: () => ({
    [RSAA]: {
      endpoint: '',
      method: 'GET',
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    }
  })
};
