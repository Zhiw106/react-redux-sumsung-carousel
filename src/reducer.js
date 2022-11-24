import {CLICK_TO_SHOW, NEXT_BUTTON, PREV_BUTTON, TOGGLE_PLAY} from "./helpers";

const arrImages = [
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_01_gb2-pro-360_01_darkred_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_02_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_04_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_02_gb2-pro_01_darkgray_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_05_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_07_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_01_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_08_pc.jpg?imwidth=1536'
]
const initState = {
    arrImages: arrImages,
    current: 0,
    play: true
}

export const reducer = (state = initState, action) => {
    // console.log('reducer')
    switch (action.type) {
        case PREV_BUTTON:
            return {...state, current: action.payload}
        case NEXT_BUTTON:
            return {...state, current: action.payload}
        case TOGGLE_PLAY:
            return {...state, play: action.payload}
        case CLICK_TO_SHOW:
            return {...state, current: action.payload}
        default:
            return state
    }
}