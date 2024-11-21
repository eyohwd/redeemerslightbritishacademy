import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';

import './testimonials.css';
import { useRef } from 'react';
const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`   
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)` 
  }
  return (
    <div className='testimonials'>
      <div className='arrow back' onClick={slideBackward} >
        <ArrowLeftOutlined className='icon-arrow' style={{fontSize:'30px'}} />
      </div>
      <div className='arrow next' onClick={slideForward}>
        <ArrowRightOutlined className='icon-arrow' style={{fontSize:'30px'}}/>
      </div>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my primary school education at 
                EducityFestac was one of the best decision i'v ever made.
                The supportive community, state of the art facilities and
                 commitment to academic excellencehave truely exceeded my expectation.

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Femi Badmus</h3>
                  <span>Educity, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my primary school education at 
                EducityFestac was one of the best decision i'v ever made.
                The supportive community, state of the art facilities and
                 commitment to academic excellencehave truely exceeded my expectation.

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Yemisi  Thomas</h3>
                  <span>Educity, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my primary school education at 
                EducityFestac was one of the best decision i'v ever made.
                The supportive community, state of the art facilities and
                 commitment to academic excellencehave truely exceeded my expectation.

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Tola Bidemi</h3>
                  <span>Educity, Nigeria</span>
                </div>
              </div>
              <p>Choosing to pursue my primary school education at 
                EducityFestac was one of the best decision i'v ever made.
                The supportive community, state of the art facilities and
                 commitment to academic excellencehave truely exceeded my expectation.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
