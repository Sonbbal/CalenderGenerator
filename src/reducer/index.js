import { combineReducers } from 'redux'
import month from './Month';
import week from './Week';
import day from './Day';
import pannelHide from './PannelHide';

export default combineReducers({
    month,
    week,
    day,
    pannelHide
})