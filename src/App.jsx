import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] relative overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Leadership />
      </main>
      <Contact />
    </div>
  )
}