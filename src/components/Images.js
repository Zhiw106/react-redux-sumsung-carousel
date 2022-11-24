import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Images.css'
import {nextBtn} from "../action";

function Images() {
    const arrImages = useSelector(state => state?.arrImages)
    const current = useSelector(state => state?.current)
    const dispatch = useDispatch()


    useEffect(() => {
        const carouselInterval = setInterval(() => {
            // console.log('interval')
            nextBtn(current,arrImages)(dispatch)
            console.log(current)

        }, 2000)

        return () =>
            clearInterval(carouselInterval)
    }, [current])

    return (
        <div className='imgContainer'>
            {!!arrImages && arrImages.map((item, index) => (
                    <div key={index} className={current === index ? 'image active' : 'image hidden'}>
                        <img src={item} alt="" className='image'/>
                    </div>
                )
            )}
        </div>

    );
}

export default Images;