import React from 'react';
import Month from './Month';
import Week from './Week';
import Days from './Days';
import '../../css/calender.scss';
import { connect } from 'react-redux';

const Calender = () => {
    const data = {
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
        <div id="capture-box">
            <div className='calender'>
                <MonthContainer />
                <WeekContainer />
                <DaysContainer />
            </div>
        </div>
    )
}

export default Calender;