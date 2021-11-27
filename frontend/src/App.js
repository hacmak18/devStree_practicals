import React from 'react'
import Header from './components/Header/Header'
import Pricing from './components/Pricing/Pricing'
import Service from './components/Service/Service'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import ClientLogo from './components/ClientLogo/ClientLogo'
import Testimonial from './components/Testimonial/Testimonial'
import CallToAction from './components/CallToAction/CallToAction'

const App = () => {

  return (
    <div>
      <Header />
      <Service />
      <Pricing />
      <CallToAction />
      <Testimonial />
      <ClientLogo />
      <Contact />
      <Footer />
      <a className="back-to-top" href="#"><i className="lni-chevron-up"></i></a>
    </div>
  )
}

export default App
