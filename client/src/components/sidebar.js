import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

import { useAppContext } from '../context/appContaxt'

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <a href=''>
            <span>
              <AiOutlineUser />
            </span>
            my Profile
          </a>
        </li>
        <li>
          <a href=''>logout</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
