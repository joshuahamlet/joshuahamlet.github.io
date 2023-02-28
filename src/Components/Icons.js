import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowCircleRight } from 'react-icons/fa'
import { TiSocialGithubCircular } from 'react-icons/ti'
import { FaLink, FaGithubAlt } from 'react-icons/fa'
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
              {project.title}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className='icon-feature-box'
          initial={{ x: '-100%', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.75 }}
        >
          <motion.div
            initial={{ x: '-100%', opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {project.stack.map((tech) => (
              <div className='icon-feature-box-item'>{tech}</div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          stlyle={{}}
          className='icon-description-box'
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <div
            style={{
              width: '100%',
              textAlign: project.id === 'E' ? 'center' : 'left',
            }}
          >
            {project.summary}
          </div>
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: project.id === 'E' ? 'center' : 'flex-start',
            }}
          >
            <div style={{ marginRight: '1rem' }}>
              <a
                href={project.github}
                title='go to github'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithubAlt size={project.id === 'E' ? 160 : 34} />
              </a>
            </div>
            {project.link ? (
              <a
                href={project.link}
                title='go to site'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLink size={26} />
              </a>
            ) : (
              ''
            )}
          </div>
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
