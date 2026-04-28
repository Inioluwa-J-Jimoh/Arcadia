import React from 'react'

const Heros = () => {
  return (
<div className='flex flex-col pt-8 items-center bg-linear-to-b from-yellow-500/0 to-yellow-500/30 rounded-3xl max-w-[95vw] mx-auto w-full h-full'>
  <h1 className='text-7xl text-center font-bold'>Classic Games.</h1>
  <h1 className='text-7xl text-center font-bold text-yellow-500'>Zero Noise.</h1>
  <p className='text-center text-white/65 mt-3'>A stripped-back arcade for the games that actually matter. <br />No bloat,no battle passes   — just pick a game and play. </p>
<button className="bg-yellow-400 mt-7 text-black font-semibold px-6 py-3 text-sm tracking-wide hover:bg-yellow-300 transition-colors duration-150 cursor-pointer"
  style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)' }}>Browse Games</button>
</div>
  )
}

export default Heros