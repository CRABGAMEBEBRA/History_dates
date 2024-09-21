import React, { useCallback, useEffect, useRef, useState } from "react";
import css from './main.module.css';
import data from '../data.tsx'
import { random, round } from "mathjs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import 'swiper/css';
import Circle from "../Circle/circle.tsx";

export default function Main(){
    const sliderRef = useRef(null);
    const datafFromEl = useRef(null);
    const datafToEl = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
    const [ActSection, setActSection] = useState(0);
    const [ch, setCh] = useState(0);
    useEffect(()=>{
        gsap.from(datafFromEl.current, {
            textContent: data.dataFrom[ch], // start from 0
            duration: 1, // animate in 2 seconds
            snap: { textContent: 1 }, // increment by 1
          })
          gsap.from(datafToEl.current, {
            textContent: data.dataTo[ch], // start from 0
            duration: 1, // animate in 2 seconds
            snap: { textContent: 1 }, // increment by 1
          })       
    },[ActSection,ch])
    return(
        <div className={css.main}>
            <p className={css.historyDates}>Исторические даты</p>
            <div className={css.dataDiv}>
                <p className={css.dataFrom} ref = {datafFromEl}>{data.dataFrom[ActSection]}</p>
                <p className={css.dataTo} ref = {datafToEl}>{data.dataTo[ActSection]}</p>
            </div>
            <div className={css.stick}></div>
            <div className={css.stick2}></div>
        <Circle ActSection={ActSection} setActSection={setActSection} ch={ch} setCh={setCh}/>
         <div className={css.arrowDiv}>
            <p className={css.pageList}>0{ActSection}/06</p>
            <div className={css.circles}>
                <div className={css.arrowCircle} onClick={handlePrev}><div className={css.arrowLeft}></div></div>
                <div className={css.arrowCircle} onClick={handleNext}><div className={css.arrowRight}></div></div>
            </div>
         </div>
            <Swiper slidesPerView={window.innerWidth>320? 4: 2} ref={sliderRef} className={css.swiper} navigation spaceBetween={0}>
            {data.eventDates[ActSection].map((eventDate, index) => (
                <SwiperSlide key={round(random(1000000, 2000000))}>
                    <p className={css.eventDate}>{eventDate}</p>
                    <p className={css.eventText}>{data.events[ActSection][index]}</p>
                </SwiperSlide>))}                
            </Swiper>
            {window.innerWidth>320? '':
            <div className={css.smallDots}>
               <div className={css.smalldot} onClick={() => setActSection(0)}></div>
               <div className={css.smalldot} onClick={() => setActSection(1)}></div>
               <div className={css.smalldot} onClick={() => setActSection(2)}></div>
               <div className={css.smalldot} onClick={() => setActSection(3)}></div>
               <div className={css.smalldot} onClick={() => setActSection(4)}></div>
               <div className={css.smalldot} onClick={() => setActSection(5)}></div>
            </div>}
        </div>
        
    )
}