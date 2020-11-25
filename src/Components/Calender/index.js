import React from 'react';
import Month from './Month';
import Week from './Week';
import Days from './Days';
import '../../css/calender.scss';

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
    return (
        <div className='calender'>
            <Month data={data.month} type={1} font={1}/>
            <Week data={data.week.type.fullKorean} font={data.week.font.family.UhBeepuding} />
            <Days line={data.days.line} day={data.days.day}/>
        </div>
    )
}

export default Calender;