import './program.css';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import program1 from '../../assets/p1.png';
import program2 from '../../assets/p2.png';
import program3 from '../../assets/p3.png';
import picon1 from '../../assets/picon1.png';
import picon3 from '../../assets/picon3.png';
import picon4 from '../../assets/picon4.png';


import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const Program = () => {

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
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
            <Link to="creche" smooth={true} offset={-170} duration={500}>
                <SchoolOutlinedIcon className='icon'/>
                <p> Creche</p>
                </Link>
            </div>
        </div>

        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <Link to="preschool" smooth={true} offset={-170} duration={500}>
            <SchoolOutlinedIcon className='icon'/>
                <p>Preschool</p>
                </Link>
            </div>
        </div>

        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
            <Link to="elementary" smooth={true} offset={-170} duration={500}>
            <HistoryEduOutlinedIcon className='icon'/>
                <p>Elementary School</p>
                </Link>
            </div>
        </div>
      
    </div>
  );
}

export default Program;
