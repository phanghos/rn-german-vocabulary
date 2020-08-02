import {spawn} from 'redux-saga/effects';
import {watchResetVocabulary} from '../sagas/vocabulary';

export default function* rootSaga() {
  yield spawn(watchResetVocabulary);
}
