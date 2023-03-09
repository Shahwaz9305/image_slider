import React, { useState } from 'react'
import './BasicSlider.css'
import {images} from './SliderData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function BasicSlider() {
  const[currImg, setCurrImg]=useState(0);
  return (
     <div className="basicSlider">
      <div className="inner"style={{backgroundImage:`url(${images[currImg].img})`}}>
      <div className="left" 
      onClick={()=>{

        if(currImg>0){
          setCurrImg(currImg-1);
        }
        else{
          setCurrImg(2);
        }
        }}>
        <ArrowBackIosIcon style={{fontSize:30}}/>
        </div>
      <div className="center"></div>
      <div className="right" onClick={()=>{
        if(currImg<2){
          setCurrImg(currImg+1);
        }
        else{
          setCurrImg(0);
        }
      }}
      >
        <ArrowForwardIosIcon style={{fontSize:30}}/>
        </div>
      </div>

     </div>
  )
}

export default BasicSlider

