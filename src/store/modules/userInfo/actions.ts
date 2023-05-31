import {FundsData} from '../../../types/fundData';

export function fetchData() {
  return {
    type: '@userInfo/FETCH_DATA_REQUEST',
  };
}

export function fetchDataSuccess({portfolio, funds}: FundsData) {
  return {
    type: '@userInfo/FETCH_DATA_SUCCESS',
    payload: {portfolio, funds},
  };
}
