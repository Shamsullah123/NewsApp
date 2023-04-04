import React from 'react'

const HeaderItem = ({title, Icon}) => {
  return (
    <div className='flex flex-col items-center hover:cursor-pointer group w-12 sm:20 hover:text-white'>
      <Icon className=" h-8 mb-1 hover:animate-bounce" />
      <p className='tracking-widest opacity-0 group-hover:opacity-100'> {title} </p>
    </div>
  )
}

export default HeaderItem
