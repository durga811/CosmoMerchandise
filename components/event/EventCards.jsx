import React from 'react'
import { ECards } from './styles'

const EventCards = () => {
  return (
    <ECards className='group'>
        <div><img 
        className='overflow-hidden w-36 h-28'
        src="https://res.cloudinary.com/durga811/image/upload/c_scale,w_300/v1672247778/cosmo%20assets/dancePerf_ok8asy.webp" alt="" /></div>
        <div
         className='overflow-hidden text-black bg-slate-50 ease-linear relative group-hover:bottom-24'>
            <h2>6.30-7.30pm</h2>
            <p>Odishi nutya by sudha group synergy</p>
        </div>
    </ECards>
  )
}

export default EventCards