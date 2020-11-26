import React from 'react';
import '../../css/controlPannel.scss';
import Month from 'Components/ControlPannel/Month';
import Week from './Week';
import Day from './Day';
import {Button} from './modules';
import html2canvas from 'html2canvas';

const ControlPannel = ( props ) => {
    const capture = ( board ) => {
        html2canvas(document.querySelector(board)).then(canvas => {
            saveAs(canvas.toDataURL(),'calender.png')
        });

        function saveAs(uri, filename) {
            let link = document.createElement('a');
            if (typeof link.download === 'string') {
                link.href = uri;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(uri);
            }
        }
    }
    return (
        <div className={props.hide ?`control-pannel hide`: `control-pannel`}>
            <h2>컨트롤 패널</h2>
            <Month />
            <Week />
            <Day />
            <div className="capture-btn">
                <Button onClick={capture} select="#capture-box">저장하기</Button>
            </div>
        </div>
    )
}

export default ControlPannel;