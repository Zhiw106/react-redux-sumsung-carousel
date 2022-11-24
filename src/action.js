import {CLICK_TO_SHOW, NEXT_BUTTON, PREV_BUTTON, TOGGLE_PLAY} from "./helpers";

export const prevBtn = (index, arr) => dispatch => {
    // console.log('prevBtn')
    dispatch({
        type: PREV_BUTTON,
        payload: index === 0 ? arr.length - 1 : index - 1
    })
}

export const nextBtn = (index, arr) => dispatch => {
    // console.log('next btn')
    dispatch({
        type: NEXT_BUTTON,
        payload: index === arr.length - 1 ? 0 : index + 1
    })
}

export const togglePlay = (play) => dispatch => {
    dispatch({
        type:TOGGLE_PLAY,
        payload:!play
        }
    )
}

export const clickDot=(index)=>dispatch=>{
    dispatch({
        type:CLICK_TO_SHOW,
        payload:index
    })
}