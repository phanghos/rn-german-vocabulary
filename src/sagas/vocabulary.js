import {takeLatest, call, put} from 'redux-saga/effects';
import {RESET_VOCABULARY, SET_VOCABULARY} from '../actions/vocabulary';
import {resetJsonFile} from '../services/vocabulary';
import {vocabularyStoreManager} from '../utils';

function* resetVocabulary() {
  try {
    yield call(resetJsonFile);
    yield call(vocabularyStoreManager.setWords, []);
    yield put({type: SET_VOCABULARY, payload: {words: []}});
  } catch (error) {
    yield put({type: SET_VOCABULARY, payload: {words: []}});
  }
}

export function* watchResetVocabulary() {
  yield takeLatest(RESET_VOCABULARY, resetVocabulary);
}
