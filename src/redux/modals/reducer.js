import { handleActions } from 'redux-actions';
import { modalsActions } from './actions';

const initialState = {
  show: '',
};


export const modalsReducer = handleActions({
    [modalsActions.setShowModal]: (state, {payload}) => ({
      ...state,
      show: payload,
    }),
  },
  initialState,
);