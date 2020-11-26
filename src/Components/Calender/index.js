import React from 'react';
import Month from './Month';
import Week from './Week';
import Days from './Days';
import '../../css/calender.scss';
import { connect } from 'react-redux';

const Calender = () => {
    const MonthContainer = connect(
        (state) => ({
            month:state.month.text,
            font:state.month.font,
            fontSize:state.month.size
        })
    )(Month);

    const WeekContainer = connect(
        (state) => ({
            data:state.week.data,
            font:state.week.font,
            fontSize:state.week.size
        })
    )(Week);
    
    const DaysContainer = connect(
        (state) => ({
            data:state.date.days, 
            line:state.day.lines, 
            font:state.day.font
        })
    )(Days);
    return (
        <>
        <div id="capture-box">
            <div className='calender'>
                <MonthContainer />
                <WeekContainer />
                <DaysContainer />
            </div>
        </div>
        </>
    )
}

export default Calender;