import React from 'react';
import '../../css/controlPannel.scss';
import Month from 'Components/ControlPannel/Month';
import Week from './Week';
import Day from './Day';

const ControlPannel = () => {
    return (
        <div className="control-pannel">
            <h2>컨트롤 패널</h2>
            <Month />
            <Week />
            <Day />
        </div>
    )
}

export default ControlPannel;