import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Program from "./components/program/Program";
import Title from "./components/title/Title";
import About from "./components/about/About";
import School from "./components/school/School";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import Videoplayer2 from "./components/videoplayer2/Videoplayer2";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import ContactUs from "./components/contactUs/ContactUs";
import Admission from "./components/admission/Admission";
import Creche from "./components/creche/Creche";
import Preschool from "./components/preschool/Preschool";
import Elementary from "./components/elementary/elementary";
import Extracurriculum from "./components/extacurriculum/Extracurriculum";
import VideoPlayer1 from "./components/videoplayer1/Videoplayer1";
import VideoPlayer3 from "./components/videoplayer3/Videoplayer3";
import Extracurriculum1 from "./components/extracurriculum1/Extracurriculum1";
import VideoPlayer4 from "./components/videoplayer4/Videoplayer4";
import Blog from "./components/blog/Blog";
import Blog1 from "./components/blog1/Blog1";
import BlogGallery from "./components/blogGallery/BlogGallery";
import './style/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/lightModeContext";
import Slider from "./components/slider/Slider";
import BlogSlider from "./components/blogSlider/BlogSlider";



const App = () => {
  const {darkMode}= useContext(DarkModeContext)
  const [playState, setPlayState ] = useState(false);
  const [playState1, setPlayState1 ] = useState(false);
  const [ playState2, setPlayState2 ] = useState(false);
  const [ playState3, setPlayState3 ] = useState(false);
  const [ playState4, setPlayState4 ] = useState(false);
  return (
    <>
    <ToastContainer/>
    <div className={darkMode ?"app dark-mode" : "light"}>
       <Navbar/>
       <Hero/>
       <div className="container">
        <Title subTitle='Our school incorporates in its scheme, the British 
        Curriculum and the federal ministry of education curriculum, alongside 
        some other academic programmes which are considered absolutely necessary 
        for the students to attain excellence.' title='Curriculum' curricu="curriculum"/>
        <Title subTitle='Our values are at the heart of our school.
Responsibility, Creativity, Confidence, Aspiration, Perseverance, Enjoyment, Teamwork. Godliness' title='Values'/>
        <Title subTitle='Modern, safe and friendly classes and school environment that
         provides an opportunity for each child to learn at their pace through target 
         setting and differentiated personal needs.' title='Our Classroom'/>
       <Program/>
       <About setPlayState={setPlayState}/>
       <Creche setPlayState1={setPlayState1}/>
       <Preschool setPlayState2={setPlayState2}/>
       <Elementary setPlayState={setPlayState}/>
       <Title subTitle='Gallery' title='School Photos'/>
       
       <Slider/>
       <Title subTitle='Recent Events' title='Blog Post'/>
       <Blog/>
       <Blog1/>
       <BlogSlider/>
       <Title subTitle='Secure a spot for your Child' title='Admission'/>
       <Admission/>
       <Extracurriculum setPlayState3={setPlayState3}/>
       <Extracurriculum1 setPlayState4={setPlayState4}/>
       <Title subTitle='TESTIMONIALS' title='What Children Say'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get in Touch'/>
       <ContactUs/>
       <Footer/>
       </div>
       <VideoPlayer playState={playState} setPlayState={setPlayState}/>
       <VideoPlayer1 playState1={playState1} setPlayState1={setPlayState1}/>
       <Videoplayer2 playState2={playState2} setPlayState2={setPlayState2}/>
       <VideoPlayer3 playState3={playState3} setPlayState3={setPlayState3}/>
       <VideoPlayer4 playState4={playState4} setPlayState4={setPlayState4}/>

    </div>
    </>
  );
}

export default App;
