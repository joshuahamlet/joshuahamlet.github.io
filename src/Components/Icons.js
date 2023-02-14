import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowCircleRight } from 'react-icons/fa'
import './Icons.css'

const Icons = ({ project, setClicky }) => {
  const iconCloseHandler = () => {
    setClicky(undefined)
  }

  return (
    <>
      <motion.div layoutId={`icon-${project.id}`} className='icon-big'>
        <motion.div className='icon-title-box'>
          <motion.div
            onClick={iconCloseHandler}
            className='icon-title-icon'
            layoutId={`icon-title-${project.id}`}
          >
            {project.icon}
          </motion.div>

          <motion.div className='icon-title-text' transition={{ delay: 0.5 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className='icon-title-text-title'
            >
              {console.log(project.title)}
              {project.title}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.75 }}
              className='icon-title-text-link'
              href={project.link}
              target='_blank'
            >
              go to project{' '}
              <FaArrowCircleRight style={{ transform: 'translateY(2px)' }} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className='icon-feature-box'
          initial={{ x: '-100%', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.75 }}
        >
          <motion.div
            className='icon-feature-box-item'
            initial={{ x: '-200%', opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            bloop
          </motion.div>
        </motion.div>

        <motion.div
          className='icon-description-box'
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          bloop uh doop and shoop duh whoop bloop uh doop and shoop duh whoop
          bloop uh doop and shoop duh whoop bloop uh doop and shoop duh whoop
          bloop uh doop and shoop duh whoop bloop uh doop and shoop duh whoop
        </motion.div>
      </motion.div>

      <motion.div
        onClick={iconCloseHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        layoutId='icon-background'
        className='icon-background'
      />
    </>
  )
}

export default Icons
