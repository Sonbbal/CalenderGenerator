import React from 'react';
import Month from './Month';
import styles from '../../css/calender.scss';

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
    }
    return (
        <div className={styles.calender}>
            <Month data={data.month} type={1} font={1}/>
        </div>
    )
}

export default Calender;