import React from 'react';
import { connect } from 'react-redux';
import { ButtonSet, Switch, Number, ButtonSetFont } from './modules';

const Week = () => {
    // 온오프
    const WeekVisible = connect(
        (state) => ({on:state.week.visible}),
        (dispatch) => ({click:()=>dispatch({type:'TOGGLE_VIEW_WEEK'})})
    )(Switch);
    
    // 데이터 타입
    const types = ['일', '일요일', 'Sun', 'SunDay']
    const WeekType = connect(
        (state) => ({data:types,type:state.week.text}),
        (dispatch) => ({onClick: (text) => dispatch({type:'CHANGE_WEEK_TYPE',text})})
    )(ButtonSet);
    // 폰트 종류
    const fonts = ['UhBeeSeulvely','UhBeepuding','UhBeeMiwan','MapoFlowerIsland'];
    const WeekFont = connect(
        (state) => ({data:fonts, type:state.week.font, typo:state.week.text}),
        (dispatch) => ({onClick: (font) => dispatch({type:'CHANGE_WEEK_FONT',font})})
    )(ButtonSetFont);
    // 폰트 크기
    const WeekFontSize = connect(
        (state) => ({num:state.week.size}),
        (dispatch) => ({handleNumber:(size) => dispatch({type:'CHANGE_WEEK_FONT_SIZE', size})})
    )(Number);

    return (
        <div className="week">
            <div className="title">
                <h3>주</h3>
                <WeekVisible />
            </div>
            <div className="type">
                <h4>주 표시</h4>
                <WeekType />
            </div>
            <div className="font">
                <h4>폰트</h4>
                <WeekFont />
                <h4>폰트크기</h4>
                <WeekFontSize />
            </div>
        </div>
    )
}

export default Week;