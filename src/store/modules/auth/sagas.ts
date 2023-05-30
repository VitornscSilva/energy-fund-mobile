import {Alert} from 'react-native';
import {takeLatest, put, all} from 'redux-saga/effects';
import {navigate} from '../../../routes/navigationRef';

import {signInSuccess, signFailure} from './actions';

export function* signIn() {
  try {
    yield put(signInSuccess());
    navigate('App');
  } catch (err) {
    Alert.alert('Error on sign In', 'Verify your data');

    yield put(signFailure());
  }
}

export function* signUp() {
  try {
    navigate('Login');
  } catch (err) {
    Alert.alert('Error on register', 'Verify your data');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
