import React from 'react'

function EventPages({color, img, content}) {
  const bgStyle={
    backgroundImage:`url(${img})`,
    backgroundSize:"35.33% auto",
    backgroundPosition:"left 0% bottom 0%",
    backgroundColor:`${color}`
  }
  const transition={
    transition:"all 1s ease-in-out",
}
  return (<>
        <div className={`h-screen w-screen bg-no-repeat flex group before:content-[''] before:bg-[${color}] before:h-full before:w-full before:opacity-60 before:absolute hover:before:-z-10`} style={bgStyle}>
            <h3 className='text-white pointer-events-none text-5xl font-semibold absolute left-[10%] top-[260px] opacity-0 group-hover:opacity-100' style={transition}>{content}</h3>
        </div>
  </>
  )
}

export default EventPages