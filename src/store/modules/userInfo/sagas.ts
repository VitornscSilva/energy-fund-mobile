import {Alert} from 'react-native';
import {takeLatest, put, all} from 'redux-saga/effects';
import {generateRandomFunds} from '../../../utils/generateRandomFunds';

import {fetchDataSuccess} from './actions';

export function* fetchData() {
  try {
    const {portfolio, funds} = generateRandomFunds();
    yield put(fetchDataSuccess({portfolio, funds}));
  } catch (err) {
    Alert.alert('Error on sign In', 'Verify your data');
  }
}

export default all([takeLatest('@userInfo/FETCH_DATA_REQUEST', fetchData)]);
