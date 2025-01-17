import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./blogslider.css";
import {blogImages} from '../../blogData';

import { useState } from "react";


const BlogSlider = () => {
   const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
       if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
       } else{
        setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0 )
       }
    }

  return (
    <div className="slideyB">
      
        <div className="arrowz arrowLeft" onClick={()=>handleClick("left")}>
            <ArrowBackIosIcon className="arrowLeft"/>
        </div>
        <div className="wrapperSlider" >
            {blogImages.map(item =>(
                <div className="slideG" key= {item.id} slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                <div className="imageContainer">
                    <img src= {item.img} className='image'></img>
                </div>
                
            </div>
            ))}
            
        </div>  
        <div className="arrowz arrowRight" onClick={()=>handleClick("right")}>
            <ArrowForwardIosIcon className= "arrowRight"/>
        </div>
         
    </div>
  );
}

export default BlogSlider;
