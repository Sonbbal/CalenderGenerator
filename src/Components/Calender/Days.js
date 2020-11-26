import React from 'react';

const Days = (props) => {
    const lines = new Array(props.line);
    const daysArray = props.data;
    for(let i = 0; i < props.line; i++ ) {
        lines[i] = i + 1;
    }
    return(
        <div className={`days-container ${props.font}`}>
            {
                daysArray.map(
                    n => <Day 
                    key={n.id} 
                    month={n.month} 
                    line={lines} 
                    num={n.number} />
                )
            }
        </div>
    )
}

const Day = ( props ) => {
 return (
    <div className={`day ${props.month}`}>
        <div>
            <div className={"day-header"}>
                <p>{props.num}</p>
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