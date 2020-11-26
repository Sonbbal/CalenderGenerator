// action 상수 
export const HIDE_PANNEL = 'HIDE_PANNEL';

export const hidePannel = () => {
    return ({
        type:'HIDE_PANNEL'
    })
}

const initialState = {
    hide:false
}


const pannelHide = (state = initialState, action ) => {
    if(action.type === HIDE_PANNEL){
        return Object.assign({},state,{
            hide:!state.hide
        });
    } else {
        return state;
    }
}

export default pannelHide;