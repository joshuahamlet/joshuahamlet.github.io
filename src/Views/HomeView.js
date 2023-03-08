import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import './HomeView.css';
import Dealie from '../Components/Icons'
import { projects } from '../data'
import GuyWorking from '../Components/GuyWorking'

const HomeView = () => {

  const [clicky, setClicky] = useState()

  const dealieHandler = (project) => {
    setClicky({...project})
  }

  return (
    <>
    
    <motion.div 
    className="container"
    initial={{x: "100vw"}}
    animate={{x: 0}}
    transition={{ type: "spring", stiffness: 100 }}
    exit={{x: "-100vw"}}
    >
      <div className="guy-working-container">
        <GuyWorking/>
      </div>
      <AnimateSharedLayout type="crossfade">

    <div className="icon-row">
        
      { projects.map(project => (
      
        <motion.div
        key={project.id}
        whileHover={{
          y: [0, -5, 0, -5, 0, 0, -3, 0, 0, -5, 0, -5, 0],
          transition: {duration: 3}
        }} 
        className="icon-small" 
        layoutId={`icon-${project.id}`}
        onClick={() => {dealieHandler(project)}}
        >
          <motion.div className="icon-title" layoutId={`icon-title-${project.id}`}>
            {project.icon}
          </motion.div>

        </motion.div>

      ))} 

        
      </div>
      <AnimatePresence>
          {
          clicky ? 
          <Dealie setClicky={setClicky} project={clicky}/>
          : ""
          } 
        </AnimatePresence>
      </AnimateSharedLayout>
    </motion.div>
    </>
  );
}

export default HomeView;
