import { all } from 'redux-saga/effects';
import authSagas from '@iso/redux/auth/saga';
import movies from '@iso/redux/movies/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    movies()
  ]);
}
