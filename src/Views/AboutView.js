import React from 'react'
import { motion } from 'framer-motion'
import GirlLooking from '../Components/GirlLooking'
import './AboutView.css'


const AboutView = () => {

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

        <div className="blob-text-container">
        <div className="blob-text-shadow-top"/>
        <div className="blob-text">
        resume
        blog
        socials
        </div>
        <div className="blob-text-shadow-bottom"/>
        </div>
        </motion.div>
    )
}

export default AboutView
