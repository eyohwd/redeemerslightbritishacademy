import './navbar.css';
import edulogo from '../../assets/edulogo.png';
import rlbalogo from '../../assets/rlba-logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ToggleOffOutlined, ToggleOnOutlined } from '@mui/icons-material';
import { useContext } from "react";
import { DarkModeContext } from "../../context/lightModeContext";




const Navbar = () => {
  const {darkMode}= useContext(DarkModeContext)
  const {dispatch} = useContext(DarkModeContext)
    const [sticky, setSticky] = useState(true);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(true);
        })
    },[])
   const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true) 
    }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className='logoContainer'>
            <img src={rlbalogo} alt="" className='logo'/>
            <span className='logoText'>Redeemer's Light British Academy</span>
        </div>
        <div className='mode'>Dark mode {darkMode ? (<ToggleOnOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>) : (<ToggleOffOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>)}</div>
     <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-300} duration={500}>Programme</Link></li>
        <li><Link to='curriculum' smooth={true} offset={-140} duration={500}>Our curriculum</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='slidey' smooth={true} offset={-220} duration={500}>Gallery</Link></li>
        <li><Link to='blog' smooth={true} offset={-200} duration={500}>Blog</Link></li>
        <li><Link to='admission' smooth={true} offset={-230} duration={500} >Admission</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-355} duration={500}>Testimonial</Link></li>
        <li><Link to='contactus' smooth={true} offset={-300} duration={500} className='btn navBtn'>Contact Us</Link></li>
      </ul>
      <div className='menu-icon' onClick={toggleMenu}>
        {mobileMenu ? (<CloseIcon/>) : (<MenuIcon />)}
      </div>
      
    </nav>
      

  );
}

export default Navbar;
