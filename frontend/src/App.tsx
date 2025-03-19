import { useState } from 'react'
import HeroSection from './components/HeroSection'
import { GridPattern } from './components/magicui/grid-pattern'
import { RetroGrid } from './components/magicui/retro-grid'
import { AnimatedGridPattern } from './components/magicui/animated-grid-pattern'
import { Ripple } from './components/magicui/ripple'

function App() {

  return (
    <>
      <RetroGrid />
      <HeroSection />
      <div className='h-screen bg-green-900'>
        <h1 className="cursor-pointer shadow-lg hover:shadow-xl transition-shadow">hello</h1>
      </div>

    </>
  )
}

export default App
