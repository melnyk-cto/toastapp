import { combineReducers } from 'redux'

import { modalsReducer as modals } from './modals/reducer'

export const rootReducer = combineReducers({modals});
