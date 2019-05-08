import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.scss'
import Navbar from './containers/Navbar'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutUsPage from './pages/AboutUsPage'
import FaqPage from './pages/FaqPage'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>  
          <Route path="/contact" 
            component = { props => 
                    <ContactPage
                    {...props}
                    />
            }
          />
          <Route path="/about-us" 
            component = { props => 
                    <AboutUsPage
                    {...props}
                    />
            }
          />
          <Route path="/faq" 
            component = { props => 
                    <FaqPage
                    {...props}
                    />
            }
          />         
          <Route path="/" 
            component = { props => 
                    <HomePage
                    {...props}
                    />
            }
          />
        </Switch>
      </>
    )
  }
}
