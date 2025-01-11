import React from 'react'
import Calc from './components/calc'

const App = () => {

  return (
    <div className='flex justify-center flex-col items-center h-screen bg-slate-200'>
      <Calc />
      <p className='mt-2 font-serif text-[0.8rem]'>Designed By 4SRG</p>
      <p className='font-serif text-[0.8rem] italic'>- Programmed By Richky -</p>
    </div>
  )
}

export default App
