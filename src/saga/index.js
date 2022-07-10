import { all } from 'redux-saga/effects'
import { countWatcher } from './countSaga'
import { usersWatcher } from './userSaga'

export function* rootWatcher() {
  yield all([countWatcher(), usersWatcher()])
}
