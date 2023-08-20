import { Link } from '@remix-run/react'
import React from 'react'

const Header = () => {
  return (
    <nav className='bg-gray-900 text-white px-12'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          {/* <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          /> */}
          <span className='inline-block text-2xl font-bold'>Logo</span>
        </div>
        <ul className='flex gap-4'>
          <li className='py-5 px-2 cursor-pointer hover:text-blue-400'>
            <Link to='/'>Inicio</Link>
          </li>
          <li className='py-5 px-2 cursor-pointer hover:text-blue-400'>
            <Link to='/users'>Usuarios</Link>
          </li>
          <li className='py-5 px-2 cursor-pointer hover:text-blue-400'>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
