import React from 'react'

import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Courses from './component/Courses'
import Blog from "./component/Blog"
import Page from "./component/Page"
import Content from './component/Content'
import News from "./component/News"
import Footer from "./component/Footer"
const App = () => {
  return (
    	<>
   <Header />
   <Navbar />
   <Home />
   <About />
   <Courses /> 
   <Blog />
  <Page />
  <Content />
  <News />
  <Footer />
    </>
  )
}

export default App
