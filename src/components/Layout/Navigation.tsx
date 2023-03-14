import React from 'react'

const Navigation = () => {
  return (
    <div className='fex items-center justify-center'>
      <nav>
        <a href="/">
          <button 
            type='button'
            className='
            font-medium
            uppercase
            rounded
            focus:outline-none
            transition
            duration-500
            ease-in-out
            text-base
            px-4
            hover:text-white
            hover:bg-red-900
            hover:font-semibold'>Главная </button>
        </a>
      </nav>
    </div>
  )
}

export default Navigation