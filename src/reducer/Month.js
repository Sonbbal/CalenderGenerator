// action 상수
export const TOGGLE_VIEW_MONTH = 'TOGGLE_VIEW_MONTH';
export const CHANGE_MONTH_TYPE = 'CHANGE_MONTH_TYPE';
export const CHANGE_MONTH_FONT = 'CHANGE_MONTH_FONT';
export const CHANGE_MONTH_FONT_SIZE = 'CHANGE_MONTH_FONT_SIZE';

// action 생성자
export const toggleViewMonth = () => {
    return ({ type: TOGGLE_VIEW_MONTH})
}
export const changeMonthType = (text) => {
    return ({
        type: CHANGE_MONTH_TYPE,
        text
    })
}
export const changeMonthFont = (font) => {
    return ({
        type: CHANGE_MONTH_FONT,
        font
    })
}
export const changeMonthFontSize = (size) => {
    return ({
        type: CHANGE_MONTH_FONT_SIZE,
        size
    })
}

const nowDate = new Date();
const isMonth = nowDate.getMonth();
const monthNum = ['1','2','3','4','5','6','7','8','9','10','11','12'];

// reducer 
const initialState = {
    visible: true,
    text:monthNum[isMonth],
    font:'UhBeeSeulvely',
    size:1
}

export default function month( state = initialState , action) {
    switch (action.type){
        
        case TOGGLE_VIEW_MONTH : 
            return Object.assign({},state,{
                visible:!state.visible
            });
        case CHANGE_MONTH_TYPE : 
            return Object.assign({},state,{
               text:action.text 
            });
        case CHANGE_MONTH_FONT :
            return Object.assign({},state,{
                font:action.font
            });
        case CHANGE_MONTH_FONT_SIZE :
            let sizeCount = state.size + action.size;
            if( sizeCount <= 0 ) {
                alert('숫자는 1부터 10까지만 가능합니다.');
                return state;
            } else if ( sizeCount >= 11 ) {
                alert('숫자는 1부터 10까지만 가능합니다.');
                return state;
            } else {
                return Object.assign({},state,{
                    size:state.size + action.size
                });
            }
            
        default:
            return state
    }

}