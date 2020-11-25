import { combineReducers } from 'redux'
import month from './Month';
import week from './Week';
import day from './Day';

export default combineReducers({
    month,
    week,
    day
})