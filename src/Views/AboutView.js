import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
//import GirlLooking from '../Components/GirlLooking'
import Computer from '../Components/Computer'
import './AboutView.css'

const AboutView = () => {

  useEffect(()=> {
  fetch('https://raw.githubusercontent.com/joshuahamlet/phaser-wario-like-platformer/main/README.md')
    .then(response => response.text())
    .then(text => {
      // console.log(text)
      let pos1 = text.indexOf("<i>")
      let pos2 = text.indexOf("</i>", (pos1 + 3));
      return text.slice(pos1 + 3, pos2).trim();
      })
    .then(data => console.log(data))
  })
  return (
    <motion.div
      className='container-about'
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className='about-bubble'>
        <div className='about-text'>
        Hello! I am a former acocuntant turned developer and 
        lifelong learner.
        </div>
        <div className='about-text'>
        I develop full-stack web apps primarily with the React/NodeJS ecosystem. Among the
        meta-frameworks Astro and Next.js are my current favorites.
        MongoDB has been my database of choice but excited to leverage more PostgreSQL. 
        I think Typescript is pretty great.
        </div>
        <div className='about-text'>
        I am a big fan of Linux and open source software. My daily workflow
        includes i3 tiling window manager, Tmux or Zellij terminal multiplexer,
        and NeoVim as IDE (or PDE).
        </div>
        <div className='about-text'>
        On the side, I aspire to be a game dev hobbyist. Unity and Phaser3 have provided
        the basis for a couple prototypes/demos. I'm Excited to experiment with the Lua based 
        Love2D and Pico-8. 
        {/* Learning new languages */} 
        </div>
        <div className='bubble-tail'></div>
      </div>
      <div className='computer-container'>
        <Computer />
      </div>
    </motion.div>
  )
}

export default AboutView
