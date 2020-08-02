import {
  SET_VOCABULARY,
  ADD_WORD,
  VOCABULARY_REQUEST,
} from '../actions/vocabulary';

const initialState = {
  isLoading: false,
  words: [],
};

export const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOCABULARY_REQUEST:
      return {...state, isLoading: true};
    case SET_VOCABULARY:
      return {...state, isLoading: false, words: action.payload.words};
    case ADD_WORD:
      return {
        ...state,
        isLoading: false,
        words: state.words.concat(action.payload.word),
      };
    default:
      return state;
  }
};
