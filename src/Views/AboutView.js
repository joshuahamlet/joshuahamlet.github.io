import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import GirlLooking from '../Components/GirlLooking'
import './AboutView.css'


const AboutView = () => {

  useEffect(()=> {
  fetch('https://raw.githubusercontent.com/joshuahamlet/legend-of-sellda/master/README.md')
    .then(response => response.text())
    .then(text => {
      // console.log(text)
      let pos1 = text.indexOf("###")
      let pos2 = text.indexOf("###", (pos1 + 3));
      return text.slice(pos1 + 4, pos2);
      })

    .then(data => console.log(data))
  })
    return (
        <motion.div
        className="container-about"
        initial={{x: "100vw"}}
        animate={{x: 0}}
        exit={{x: "-100vw"}}
        transition={{ type: "spring", stiffness: 100 }}
        >
        <div className="blob-container">
        <GirlLooking/>
        </div>

        <div className="blob-text">
        <a href='https://joshuahamlet.surge.sh/resume' target="_blank" rel="noopener noreferrer">
        <div className='mini-card'>
        resume
        </div>
        </a>
        <div className='mini-card'>
        blog
        </div>
        <div className='mini-card'>
        socials
        </div>
        </div>
        </motion.div>
    )
}

export default AboutView

