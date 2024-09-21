import React, { useEffect, useRef} from "react";
import css from './circle.module.css';
import data from "../data.tsx";
import { gsap } from 'gsap';

export default function Circle({ActSection, setActSection,ch,setCh}){
    const xCircle =[-83,83,354,83,-80,-357]
    const yCircle=[180, 201,0,-201,-180,0]
    const dot1 = useRef(null);
    const dot2 = useRef(null);
    const dot3 = useRef(null);
    const dot4 = useRef(null);
    const dot5 = useRef(null);
    const dot6 = useRef(null);
    useEffect(()=>{
          let tl = gsap.timeline();
          for(let i=0;i<((ActSection-ch+6)%6);i++){
          tl.to(dot1.current,{x:xCircle[0], y:yCircle[0], duration:0.5},"<")
          tl.to(dot2.current,{x:xCircle[1], y:yCircle[1], duration:0.5},"<")
          tl.to(dot3.current,{x:xCircle[2], y:yCircle[2], duration:0.5},"<")
          tl.to(dot4.current,{x:xCircle[3], y:yCircle[3], duration:0.5},"<")
          tl.to(dot5.current,{x:xCircle[4], y:yCircle[4], duration:0.5},"<")
          tl.to(dot6.current,{x:xCircle[5], y:yCircle[5], duration:0.5},"<")

          tl.to(dot1.current,{x:0, y:0, duration:0})
          tl.to(dot2.current,{x:0, y:0, duration:0})
          tl.to(dot3.current,{x:0, y:0, duration:0})
          tl.to(dot4.current,{x:0, y:0, duration:0})
          tl.to(dot5.current,{x:0, y:0, duration:0})
          tl.to(dot6.current,{x:0, y:0, duration:0})          
        }
    },[ActSection,ch])
    return(
        <div className={css.mainDiv}>
            <svg height="600"className={css.circle}> 
                    <circle cx="300" cy="280" r="260" stroke="#c2c2c2" fill="white"/> 
            </svg>
            <svg  height="200"className={css.dotsb}>
                <circle cx="100px" cy="90px" r="28" stroke="#c2c2c2" fill="white"/>
                <text x="95px" y="96px" className={css.textCircle}>{ActSection}</text>
                <text x="137px" y="96px" fill="#42567A" className={css.nameData}>{data.name[ActSection]}</text>
            </svg>
            <svg  height="480" className={css.dotsm}>
                <circle r="3px" cx="623px" cy="90px" className={css.dot} ref = {dot1} onClick={()=> {setCh(ActSection);setActSection((ActSection+5)%6)}}/>
                <circle r="3px" cx="540px" cy="270px" className={css.dot} ref = {dot2} onClick={()=> {setCh(ActSection);setActSection((ActSection+4)%6)}}/>
                <circle r="3px" cx="623px" cy="471px" className={css.dot} ref = {dot3} onClick={()=> {setCh(ActSection);setActSection((ActSection+3)%6)}}/>
                <circle r="3px" cx="977px" cy="471px" className={css.dot} ref = {dot4} onClick={()=> {setCh(ActSection);setActSection((ActSection+2)%6)}}/>
                <circle r="3px" cx="1060px" cy="270px" className={css.dot} ref = {dot5} onClick={()=> {setCh(ActSection);setActSection((ActSection+1)%6)}}/>
                <circle r="3px" cx="980px" cy="90px" className={css.dot} ref = {dot6} onClick={()=> {setCh(ActSection);setActSection((ActSection)%6)}}/>   
            </svg>
        </div>
    )
}