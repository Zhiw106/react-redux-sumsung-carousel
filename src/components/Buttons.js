import React from 'react';
import './Buttons.css'
import {prevBtn, nextBtn} from '../action'
import {useDispatch, useSelector} from "react-redux";

function Buttons() {
    const dispatch = useDispatch()
    const arrImages=useSelector(state => state?.arrImages)
    const current=useSelector(state => state?.current)
    return (
        <div className='imgBtn'>
            <div className='imgPrevBtn' onClick={()=>prevBtn(current,arrImages)(dispatch)}>
                <i className="fa fa-solid fa-chevron-left"></i>
            </div>
            <div className='imgNextBtn'onClick={()=>nextBtn(current,arrImages)(dispatch)}>
                <i className="fa fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
}

export default Buttons