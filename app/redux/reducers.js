import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import nav from './nav';
import profilesReducer from '../profile/reducers';

const appReducer = combineReducers({
  form: formReducer,
  nav: nav,
  profilesReducer: profilesReducer,
});

export default appReducer;