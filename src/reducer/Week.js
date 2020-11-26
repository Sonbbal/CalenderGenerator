// action 상수
export const TOGGLE_VIEW_WEEK = 'TOGGLE_VIEW_WEEK';
export const CHANGE_WEEK_TYPE = 'CHANGE_WEEK_TYPE';
export const CHANGE_WEEK_FONT = 'CHANGE_WEEK_FONT';
export const CHANGE_WEEK_FONT_SIZE = 'CHANGE_WEEK_FONT_SIZE';

//action 생성자

export const toggleViewWeek = () => {
    return ({type:TOGGLE_VIEW_WEEK})
}
export const changeWeekhType = (text) => {
    return ({
        type: CHANGE_WEEK_TYPE,
        text
    })
}
export const changeWeekhFont = (font) => {
    return ({
        type: CHANGE_WEEK_FONT,
        font
    })
}
export const changeWeekhFontSize = (size) => {
    return ({
        type: CHANGE_WEEK_FONT_SIZE,
        size
    })
}
// base data
const simpleKorean = ['일','월', '화','수','목','금','토']
const fullKorean = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
const simpleEnglish = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const fullEnglish = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//reducer

const initialState = {
    visible: true,
    text:fullKorean[0],
    font:'UhBeeSeulvely',
    size:1,
    data: fullKorean
}

const week = (state = initialState, action ) => {
    switch (action.type){
        
        case TOGGLE_VIEW_WEEK : 
            return Object.assign({},state,{
                visible:!state.visible
            });
        case CHANGE_WEEK_TYPE :
            if(action.text === simpleKorean[0]) {
                return Object.assign({},state,{
                    text:action.text,
                    data:simpleKorean
                 });    
            } else if(action.text === fullKorean[0] ){
                return Object.assign({},state,{
                    text:action.text,
                    data:fullKorean
                 });    
            } else if(action.text === simpleEnglish[0] ){
                return Object.assign({},state,{
                    text:action.text,
                    data:simpleEnglish
                 });    
            } else if(action.text === fullEnglish[0] ){
                return Object.assign({},state,{
                    text:action.text,
                    data:fullEnglish
                 });    
            } else {
                return Object.assign({},state,{
                    text:action.text
                 });
            }  
        case CHANGE_WEEK_FONT :
            return Object.assign({},state,{
                font:action.font
            });
        case CHANGE_WEEK_FONT_SIZE :
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

export default week;