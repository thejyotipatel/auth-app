import React from 'react'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai'
import { useAppContext } from '../context/appContaxt'

const Sidebar = () => {
  const [showSidebar, toggleSidebar] = useAppContext()
  return (
    <div className='sidebar'>
      <button className='menu-btn'>
        {showSidebar ? (
          <span>
            <AiFillCaretDown />
          </span>
        ) : (
          <span>
            <AiFillCaretUp />
          </span>
        )}
      </button>
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
