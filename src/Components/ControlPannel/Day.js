import React,{useState} from 'react'
import {ButtonSet,Number} from './modules';

const Day = () => {
    const fonts = ['UhBeeSeulvely','UhBeepuding','UhBeeMiwan','MapoFlowerIsland'];
    const [font , setFont] = useState(fonts[0]);
    const handleFont = ( font ) => {
        setFont(font);
    }

    const [line, setLine] = useState(1);
    const handleLine = (num) => {
        let number = line + num;
        if( number <= 0) {
            alert('숫자는 1부터 10까지만 가능합니다.');
        } else if ( number >= 11 ) {
            alert('숫자는 1부터 10까지만 가능합니다.');
        } else {
            setLine(line + num);
        }
    }
    return (
        <div className="day">
            <h4>일</h4>
            <div className="font">
                <h4>폰트</h4>
                <ButtonSet data={fonts} type={font} onClick={handleFont} />
            </div>
            <div className="line">
                <h4>줄수</h4>
                <Number num={line} handleNumber={handleLine}/>
            </div>
        </div>
    )
}

export default Day;
