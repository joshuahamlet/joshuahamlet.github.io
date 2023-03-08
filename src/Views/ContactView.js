import React from 'react'
import { motion } from 'framer-motion'
import lottie from 'lottie-web';
import animationData from '../lottie/panda-no-bg.json'
import { TiSocialGithubCircular } from 'react-icons/ti'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { TiMail } from 'react-icons/ti'
import './ContactView.css'
import EmailForm from '../Components/EmailForm'



class ContactView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {modalToggle: false};
    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler() {
    this.setState(state => ({
      modalToggle: !state.modalToggle
    }))
  }

  componentDidMount() {
    console.log('componentDidMount');

    //call the loadAnimation to start the animation
      lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData // the path to the animation json
    });
  }
  
  render() {
    return (
        <motion.div
                 className="contact-container"
                 initial={{x: "100vw"}}
                 animate={{x: 0}}
                 transition={{ type: "spring", stiffness: 100 }}
                 exit={{x: "-100vw"}}
                 >


        <div className="panda-container">
        <div style={{width: "500px", margin: '0 auto', filter: "drop-shadow(30px 10px 4px rgba(0, 0, 0,.80)"}} ref={ ref => this.animBox = ref}/>
        <a href='https://github.com/joshuahamlet' target="_blank" rel="noopener noreferrer">
        <div className="contact-icon-git">
            <motion.div 
            animate={{x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 0, 3, 0, -2, 0, 2, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}}
            transition={{duration: 2.5, yoyo: Infinity}}
            >
                <TiSocialGithubCircular/>
            </motion.div>
        </div >
        </a>
        <a href="https://www.linkedin.com/in/hamletjoshua/" target="_blank" rel="noopener noreferrer">
        <div className="contact-icon-lin">    
            <motion.div
            animate={{x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 0, 3, 0, -2, 0, 2, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}}
            transition={{duration: 2.5, delay: 1.25, yoyo: Infinity}}
            >
                <TiSocialLinkedinCircular/>
        </motion.div>    
        </div>
        </a>
        <div className="contact-icon-gmail">
            <motion.div 
            onClick={this.modalHandler}
            animate={{x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 0, 3, 0, -2, 0, 2, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}}
            transition={{duration: 2.5, delay: 1, yoyo: Infinity}}
            >
                <TiMail/>
            </motion.div>
        </div>
        </div>

        <EmailForm 
        modalToggle={this.state.modalToggle} 
        modalHandler={this.modalHandler}
        />
      
      <div className='about-links'>
        <a
          href='https://joshuahamlet.surge.sh/resume'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='mini-card'>resume</div>
        </a>
        <a
          href='https://joshuahamlet.surge.sh/resume'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='mini-card' style={{flexDirection: "column"}}>
            <div>blog</div>
            <div style={{fontSize: "1rem"}}>Coming soon </div>
          </div>
        </a>
        <a
          href='https://joshuahamlet.surge.sh/resume'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='mini-card'>socials</div>
        </a>
      </div>
      </motion.div>
    );
  }
}

export default ContactView;
