import './program.css';
import program1 from '../../assets/p1.jpg';
import program2 from '../../assets/p2.jpg';
import program3 from '../../assets/p3.jpg';
import picon1 from '../../assets/picon1.png';
import picon3 from '../../assets/picon3.png';
import picon4 from '../../assets/picon4.png';


import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <SchoolOutlinedIcon className='icon'/>
                <p>Nusery1 Certificate</p>
            </div>
        </div>

        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
            <SchoolOutlinedIcon className='icon'/>
                <p>Nursery2 Certificate</p>
            </div>
        </div>

        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
            <HistoryEduOutlinedIcon className='icon'/>
                <p>Primary Certificate</p>
            </div>
        </div>
      
    </div>
  );
}

export default Program;
