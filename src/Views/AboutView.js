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
        resume
        blog
        socials
        sdfs
        </div>
        </motion.div>
    )
}

export default AboutView
