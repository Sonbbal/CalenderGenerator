import React, {useState} from 'react';
import { ButtonSet, Switch, Number } from './modules';

const Week = () => {
    const [ on, setOn ] = useState(true);
    const handleOn = () => {
        setOn(!on)
    }
    const types = ['일', '일요일', 'Sun', 'SunDay']
    const [type, setType] = useState(types[0]);
    const handleType = ( type ) => {
        setType(type);
    }
    const fonts = ['UhBeeSeulvely','UhBeepuding','UhBeeMiwan','MapoFlowerIsland'];
    const [font , setFont] = useState(fonts[0]);
    const handleFont = ( font ) => {
        setFont(font);
    }
    const [fontSize, setFontSize] = useState(1);
    const handleSize = ( num ) => {
        let number = fontSize + num;
        if( number <= 0) {
            alert('숫자는 1부터 10까지만 가능합니다.');
        } else if ( number >= 11 ) {
            alert('숫자는 1부터 10까지만 가능합니다.');
        } else {
            setFontSize(fontSize + num);
        }
    }

    return (
        <div className="week">
            <div className="title">
                <h3>주</h3>
                <Switch on={on} click={handleOn}/>
            </div>
            <div className="type">
                <h4>주 표시</h4>
                <ButtonSet data={types} type={type} onClick={handleType} />
            </div>
            <div className="font">
                <h4>폰트</h4>
                <ButtonSet data={fonts} type={font} onClick={handleFont} />
                <h4>폰트크기</h4>
                <Number num={fontSize} handleNumber={handleSize} />
            </div>
        </div>
    )
}

export default Week;