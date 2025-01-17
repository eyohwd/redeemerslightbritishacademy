import './contact.css';
import mail from '../../assets/mail.png';
import { Room, Phone, Mail } from '@mui/icons-material';
import { useState } from 'react';


const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e80a46d1-d889-4273-a50f-96bb363026ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={mail} alt=''/></h3>
        <p>Feel free to reach out through contact form or find
            our contact information below. Your feedback, questions
             and suggestions are important to us as we strive to provide
             exceptional service to our school community.
        </p>
        <ul>
            <li><Mail className='icon'/>payless@gmail.com</li>
            <li><Phone className='icon'/>+2349048352615</li>
            <li><Room className='icon'/>1st avenue extension Wclose Festac, Lagos</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows='6'placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn'>Send now<span style={{marginLeft:'5px', fontWeight:'bold'}}>&rarr;</span></button>
        </form>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default Contact;
