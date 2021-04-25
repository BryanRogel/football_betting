import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
    loginReducer,
    tableReducer
});

export default rootReducer;