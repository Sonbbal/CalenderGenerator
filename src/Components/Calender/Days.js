import React from 'react';

const Days = (props) => {
    const lines = new Array(props.line);
    const daysArray = new Array(props.day);
    for(let i = 0; i < props.line; i++ ) {
        lines[i] = i + 1;
    }
    for(let i = 0; i < props.day; i++ ) {
        daysArray[i] = i +1;
    }
    
    return(
        <div className="days-container">
            {
                daysArray.map(
                    n => <Day key={n} line={lines} num={n} />
                )
            }
        </div>
    )
}

const Day = ( props ) => {
 return (
    <div className={`day`}>
        <div>
            <div className="day-header">
                <p>{props.num ? props.num : ''}</p>
            </div>
            </div>
            <div className="day-body">
                {
                    props.line.map(
                        n => <DayLine key={n} />
                    )
                }
            </div>
    </div>
 )
}

const DayLine = () => {
    return <div className="day-line"></div>;
}
export default Days;