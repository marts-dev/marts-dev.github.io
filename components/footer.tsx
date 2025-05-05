import React from 'react'

export default function Footer() {
  return (
    <footer className='relative flex flex-col mb-10 px-4 h-12 text-center text-gray-500 mx-auto'>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span>{" "}built with React & Next.js
      </p>
    </footer>
  )
}
