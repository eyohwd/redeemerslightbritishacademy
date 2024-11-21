import './about.css';
import ab1 from '../../assets/ab1.jpg'
import play1 from '../../assets/play1.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={ab1} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT PRIMARY</h3>
        <h2>Nuturing Tomorrow Leaders Today</h2>
        <p>Embark on a transformative eduational journey with Our
           primary comprehensive education programs. Our cutting-edge curriculum 
           is designed to empower children with the knowledge, skill and experience needed to excel
           in the dynamic field of education.
        </p>
        <p>With a focus on innovation, hands on learning, and personalized mentorship,
            our programs prepare aspiring educators to make ameaningful impact in classrooms,
            school ans communities
        </p>
        <p>Whether you aspire to become a teacher, adminstrator, counselor or educational leader,
            diverse range of programs offers the perfect pathway to achieve your goals and 
            unlock your full potential in shapping the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
