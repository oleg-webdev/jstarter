import { makeId } from '../../helpers/helper';
import * as types from './types';

const initialState = {
  allResults: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_RESULT_RESPONSE:
      return {
        ...state,
        allResults: state.allResults.concat({
          id: makeId(15),
          value: action.payload,
        }),
      };
    case types.DELETE_RESULT:
      return {
        ...state,
        allResults: state.allResults.filter(item => item.id !== action.payload),
      };
    default: return state;
  }
};
