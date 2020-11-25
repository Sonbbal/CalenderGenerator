import React from 'react'
import {ButtonSet,Number} from './modules';
import {connect} from 'react-redux';

const Day = () => {
    // 일 폰트 
    const fonts = ['UhBeeSeulvely','UhBeepuding','UhBeeMiwan','MapoFlowerIsland'];
    const DayFont = connect(
        (state) => ({data:fonts, type:state.day.font}),
        (dispatch) => ({ onClick: (font) => dispatch({type:'CHANGE_DAY_FONT',font})})
    )(ButtonSet);


    // 일 줄수 
    const DayLines = connect(
        (state) => ({num:state.day.lines}),
        (dispatch) => ({handleNumber: (lines) => dispatch({type:'CHANGE_DAY_LINES',lines})})
    )(Number);
    return (
        <div className="day">
            <h3>일</h3>
            <div className="font">
                <h4>폰트</h4>
                <DayFont />
            </div>
            <div className="line">
                <h4>줄수</h4>
                <DayLines />
            </div>
        </div>
    )
}

export default Day;
