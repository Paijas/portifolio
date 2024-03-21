import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function NavBar() {

  const [nav,setNav] = useState(false);

  const links =[
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'Sobre'
    },
    {
      id:3,
      link:'Portifólio'
    },
    {
      id:4,
      link:'Skills'
    },
    {
      id:5,
      link:'Contato'
    }
  ]

  return (
    <div className='md:justify-center flex  items-center w-full h-20 text-white fixed  bg-black justify-end '>
      <div>
      
      </div>
      <ul className='hidden md:flex'>

        {links.map(links => (
          <li key={links.id}  className='px-4 cursor-pointer capitalize font-medium text-slate-500 hover:scale-105 duration-200 hover:text-white'>{links.link}</li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav) } className='cursor-pointer pr-4 z-10 text-slate-500 md:hidden'>
          {nav ?  <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

      {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-950'>
        {links.map(links => (
            <li key={links.id}  className='py-6 cursor-pointer capitalize font-medium text-slate-500 hover:scale-105 duration-200 hover:text-white'>{links.link}</li>
          ))}
      </ul>)}
      

    </div>
  )
}
