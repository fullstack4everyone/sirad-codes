import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Process from './sections/Process'
import About from './sections/About'
import WhyWork from './sections/WhyWork'
import CallToAction from './sections/CallToAction'
import Contact from './sections/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <WhyWork />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App