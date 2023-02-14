import React from 'react'

import { GiSpinningSword } from 'react-icons/gi'
import { IoMdPizza } from 'react-icons/io'
import { IoTerminal } from 'react-icons/io5'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineDashboard } from 'react-icons/ai'

export const projects = [
  {
    id: 'L',
    title: 'Legend of Sellda',
    icon: <GiSpinningSword />,
    link: 'https://legend-of-sellda.web.app',
  },
  {
    id: 'P',
    title: 'Pomodoro Pizza party',
    icon: <IoMdPizza />,
    link: 'https://wariolikeplatformer.web.app',
  },
  {
    id: 'T',
    title: 'TBD Project',
    icon: <IoTerminal />,
    link: 'https://react-txt-adventure.web.app',
  },
  {
    id: 'G',
    title: 'TBD Project',
    icon: <AiOutlineDashboard />,
    link: '',
  },
  {
    id: 'D',
    title: 'Next',
    icon: <AiOutlineDashboard />,
    link: '',
  },
]
