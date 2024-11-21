import './navbar.css';
import edulogo from '../../assets/edulogo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])
   const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true) 
    }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className='logoContainer'>
            <img src={edulogo} alt="" className='logo'/>
            <span logoText>EducityFestac</span>
        </div>
     <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-315} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='school' smooth={true} offset={-300} duration={500}>Nusery/Primary</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <div className='menu-icon' onClick={toggleMenu}>
        {mobileMenu ? (<CloseIcon/>) : (<MenuIcon />)}
      </div>
      
    </nav>
      

  );
}

export default Navbar;
