// action 상수
export const CHANGE_DAY_FONT = 'CHANGE_DAY_FONT';
export const CHANGE_DAY_LINES = 'CHANGE_DAY_LINES';

// 액션 생성자
export const changeDayFont = (font) => {
    return ({
        type:CHANGE_DAY_FONT,
        font
    })
}

export const changeDayLines = (lines) => {
    return ({
        type:CHANGE_DAY_LINES,
        lines
    })
}

// reducer

const initialState = {
    font:'UhBeeSeulvely',
    lines:1
}

const day = (state = initialState, action) => {
    
    switch(action.type) {
        case CHANGE_DAY_FONT:
            return Object.assign({},state,{
                font:action.font
            });

        case CHANGE_DAY_LINES: 
            let linesCount = state.lines + action.lines;
            if(linesCount <= 0) {
                alert('숫자는 1부터 10까지만 가능합니다.')
                return state;
            } else if(linesCount >= 11){
                alert('숫자는 1부터 10까지만 가능합니다.')
                return state;
            } else {
                return Object.assign({},state,{
                    lines:state.lines + action.lines
                })
            };

        default:
            return state;
    }
}

export default day;