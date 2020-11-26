import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import '../css/pannelHide.scss';

const PannelHide = (props) => {
    return (
        <div className="pannel-hide-btn-container" onClick={props.onClick}>
            <div className="pannel-hide-btn">
            {props.hide ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
        </div>
    )
}

export default PannelHide;