import React from 'react';
import { ButtonSet, Switch, Number,ButtonSetFont } from './modules';
import {connect} from 'react-redux';

const Month = () => {
    // 월 스위치
    const MonthSwitch = connect(
        (state) => ({on:state.month.visible}),
        (dispatch) => ({click: () => dispatch({type:'TOGGLE_VIEW_MONTH'})})
    )(Switch);

    // 월 타입
    const types = ['1', '1월', 'Jan', 'January']
    const MonthType = connect(
        (state) => ({data:types,type:state.month.text}),
        (dispatch) => ({onClick: (text)=> dispatch({type:'CHANGE_MONTH_TYPE',text})})
    )(ButtonSet);

    // 월 폰트
    const fonts = ['UhBeeSeulvely','UhBeepuding','UhBeeMiwan','MapoFlowerIsland'];
    const MonthFont = connect(
        (state) => ({data:fonts,type:state.month.font, typo:state.month.text}),
        (dispatch) => ({onClick: (font)=> dispatch({type:'CHANGE_MONTH_FONT',font})})
    )(ButtonSetFont);
    
    // 월 폰트사이즈
    const MonthFontSize = connect(
        (state) => ({num:state.month.size}),
        (dispatch) => ({handleNumber:(size) => dispatch({type:'CHANGE_MONTH_FONT_SIZE',size})})
    )(Number);

    return (
        <div className="month">
            <div className="title">
                <h3>월</h3>
                <MonthSwitch />
            </div>
            <div className="type">
                <h4>월 표시</h4>
                <MonthType />
            </div>
            <div className="font">
                <h4>폰트</h4>
                <MonthFont />
                <h4>폰트크기</h4>
                <MonthFontSize />
            </div>
        </div>
    )
}

export default Month;