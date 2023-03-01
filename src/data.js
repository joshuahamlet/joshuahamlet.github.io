import React from 'react'

import { GiSpinningSword } from 'react-icons/gi'
import { IoTerminal, IoGameController } from 'react-icons/io5'
import { BiMoviePlay } from 'react-icons/bi'
import { FaShoppingBag } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaFrog } from 'react-icons/fa'

export const projects = [
  {
    id: 'L',
    title: 'Legend of Sellda',
    icon: <GiSpinningSword />,
    stack: [
      'react',
      'redux',
      'framer-motion',
      'formik',
      'react-router',
      'express',
      'mongoose',
      'mongodb',
    ],
    summary:
      'An e-commerce site powered by Redux for state management, React Router and Framer Motion for page transitions. Data is fetched from an Express server utilizing Mongoose/MongoDB.',
    github: 'https://github.com/joshuahamlet/legend-of-sellda',
    link: 'https://legend-of-sellda.web.app',
  },
  {
    id: 'G',
    title: 'What do You Want to Watch',
    icon: <BiMoviePlay />,
    stack: ["react", "react-router", "recoil", "framer-motion", "lottie", "mongodb", "mongoose", "express", "oath2", "passport"],
    link: 'https://whatdoyouwannawatch-backend.web.app',
    summary: 'A social app for sharing and comparing movie preferences with friends. The client utilizes Recoil for state management and fetches data from an Express/Mongodb powered backend.',
    github: 'https://github.com/joshuahamlet/whatdoyouwannawatch',
  },
  {
    id: 'P',
    title: 'Wario-Like Platformer',
    icon: <IoGameController />,
    stack: ['react', 'typescript', 'jotai', 'phaser3'],
    link: 'https://wariolikeplatformer.web.app',
    summary:
      'A Phaser project utilizing React and Jotai for HUD and UI elements.',
    github: 'https://github.com/joshuahamlet/phaser-wario-like-platformer',
  },
  {
    id: 'T',
    title: 'React Text Adventure',
    icon: <IoTerminal />,
    stack: ['react', 'framer-motion', 'phaser3', 'jotai'],
    link: 'https://react-txt-adventure.web.app',
    summary:
      'Experimental React text adventure game utilizing Jotai for state management and Phaser for top-down rpg elements.',
    github: 'https://github.com/joshuahamlet/react-text-engine',
    site: 'https://react-txt-adventure.web.app/',
  },
  {
    id: 'H',
    title: 'Ninja Frog Adventure',
    icon: <FaFrog  />,
    stack: [
      'C#',
      'unity',
    ],
    link: 'https://jayhamismyjam.itch.io/ninja-frog-adventure',
    summary:
      'Short demo with top-down and platformer elements... and a ninja frog. Written in C# with Unity.',
    github: '',
  },
  {
    id: 'D',
    title: 'Shopify Storefront',
    icon: <FaShoppingBag  />,
    stack: [
      'react',
      'typescript',
      'nextjs',
      'shopify',
      'framer-motion',
      'jotai',
    ],
    link: 'https://next-shopify-storefront-three.vercel.app/',
    summary:
      'E-commerce site built with NextJs and utilizing Shopify as a headless CMS.',
    github: 'https://github.com/joshuahamlet/next-shopify-storefront',
  },
  {
    id: 'E',
    title: 'See More on Github!',
    icon: <FiMoreHorizontal/>,
    stack: [],
    link: '',
    summary: '↓ Go to Github ↓',
    github: 'https://github.com/joshuahamlet'
  }
]
