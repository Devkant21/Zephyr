import React from 'react'
import { Transition } from '@headlessui/react' // smooth traasition between tabs
import { Link } from 'react-scroll' // Alternative for tag in netjs we use link

function Footer() {
  return (
    <div>
        <footer className='px-4 py-4 justify-end bg-purple-800 text-white'>
            Made by DS
        </footer>

    </div>
  )
}

export default Footer