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
    const nowDate = new Date();
    const isMonth = nowDate.getMonth();
    const monthNum = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    const monthNumKo = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    const monthEng = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const monthEngFull = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const types = [monthNum[isMonth], monthNumKo[isMonth], monthEng[isMonth], monthEngFull[isMonth]]
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