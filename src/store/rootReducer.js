import {combineReducers} from 'redux';
import carReducer from './carReducer';
import counterReducer from './counterReducer';

export default combineReducers({
    carReducer,
    counterReducer
});