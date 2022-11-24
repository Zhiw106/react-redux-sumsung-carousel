import React from 'react';
import './Dots.css'
import {useDispatch, useSelector} from "react-redux";
import {clickDot, togglePlay} from "../action";


function Dots() {
    const arrImgs = useSelector(state => state?.arrImages)
    const current = useSelector(state => state?.current)
    const play = useSelector(state => state?.play)
    const dispatch = useDispatch()

    return (
        <div className='imgCtrl'>
            <div className='imgDots'>
                {arrImgs.map((item, index) => (
                    <div key={index} onClick={()=>clickDot(index)(dispatch)} className={current === index ? 'dot highlight' : 'dot no-highlight'}
                    >
                        <i className="fa fa-regular fa-circle"></i>
                    </div>
                ))}
            </div>
            <div className='imgPlayCtrl'>
                <div onClick={() => togglePlay(play)(dispatch)} className={play ? 'active' : 'hidden'}>
                    <i className="fa fa-solid fa-play"></i>
                </div>
                <div onClick={() => togglePlay(play)(dispatch)} className={play ? 'hidden' : 'active'}>
                    <i className="fa fa-solid fa-pause"></i>
                </div>
            </div>
        </div>
    );
}

export default Dots;