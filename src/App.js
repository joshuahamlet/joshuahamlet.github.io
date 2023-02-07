import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './Components/Header'
import HomeView from './Views/HomeView'
import AboutView from './Views/AboutView'
import ContactView from './Views/ContactView'
import './App.css'

function App() {

    const location = useLocation()


    return (
        <div className="app">
          <Header/>
          <AnimatePresence initial={true} exitBeforeEnter={true}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" component={HomeView} exact />
              <Route path="/about" component={AboutView} />
              <Route path="/contact" component={ContactView} />
            </Switch>
          </AnimatePresence>
        </div>
    )
}

export default App
