import React from 'react';

const Week = (props) => {
    return (
        <div className={`week ${props.font}`}>
            <div className="sun">{props.data[0]}</div>
            <div className="mon">{props.data[1]}</div>
            <div className="tue">{props.data[2]}</div>
            <div className="wed">{props.data[3]}</div>
            <div className="thu">{props.data[4]}</div>
            <div className="fri">{props.data[5]}</div>
            <div className="sat">{props.data[6]}</div>
        </div>
    )
}

export default Week;