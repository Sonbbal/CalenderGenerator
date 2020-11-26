import React, { useState } from 'react';
import Month from './Month';
import Week from './Week';
import Days from './Days';
import store from '../../store';
import '../../css/calender.scss';
import { connect } from 'react-redux';

const Calender = () => {
    const data = {
        month: {
            type: [
                '11',
                '11월',
                'Nov',
                'November'
            ]
            ,
            font:{
                size: 10,
                family: [
                    'UhBeeSeulvely',
                    'UhBeepuding',
                    'UhBeeMiwan',
                    'MapoFlowerIsland',
                ]
            }
        },
        week: {
            type:{
                simpleKorean: ['일','월', '화','수','목','금','토'],
                fullKorean: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
                simpleEnglish: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                fullEnglish: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Saturday']
                },
            font: {
                size: 1,
                family: {
                    UhBeeSeulvely:'UhBeeSeulvely',
                    UhBeepuding:'UhBeepuding',
                    UhBeeMiwan:'UhBeeMiwan',
                    MapoFlowerIsland:'MapoFlowerIsland'
                }
            }
        },
        days: {
            line: 5,
            day: 30,
            font: {
                size: 1,
                family: {
                    UhBeeSeulvely:'UhBeeSeulvely',
                    UhBeepuding:'UhBeepuding',
                    UhBeeMiwan:'UhBeeMiwan',
                    MapoFlowerIsland:'MapoFlowerIsland'
                }
            }
        }
    }
    //  월 타입 데이터
    // const nowDate = new Date();
    //     const monthState =store.getState().month.text;
    //     const nowMonth = () => {
    //         const isMonth = nowDate.getMonth();
    //         const monthNum = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    //         const monthNumKo = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    //         const monthEng = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    //         const monthEngFull = ['January','February','March','April','May','June','July','August','September','October','November','December']
    //         let monthLast = '';
    //         switch (monthState) {
    //             case '1':
    //                 monthLast = monthNum[isMonth]
    //                 break ;
    //             case '1월':
    //                 monthLast = monthNumKo[isMonth]
    //                 break ;
    //             case 'Jan':
    //                 monthLast = monthEng[isMonth]
    //                 break ;
    //             case 'January':
    //                 monthLast = monthEngFull[isMonth]
    //                 break ;
    //             default:
    //                 monthLast = monthNumKo[isMonth]
    //                 break ;
    //         }
    //         return monthLast;
    //     }
    const MonthContainer = connect(
        (state) => ({
            month:state.month.text,
            font:state.month.font,
            fontSize:state.month.size
        })
    )(Month);
    return (
        <div id="capture-box">
            <div className='calender'>
                <MonthContainer />
                <Week data={data.week.type.fullKorean} font={data.week.font.family.UhBeepuding} />
                <Days line={data.days.line} day={data.days.day}/>
            </div>
        </div>
    )
}

export default Calender;