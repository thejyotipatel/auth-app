import { Outlet } from 'react-router-dom'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai'

import { Sidebar } from '../../components'
import { useAppContext } from '../../context/appContaxt'

const ShareLayout = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <div className='dashboard'>
      <button className='menu-btn' onClick={toggleSidebar}>
        <div className='user'>
          <img src='' alt='user image' />
          <p>thejyotipatel</p>
        </div>
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
      {showSidebar && <Sidebar />}

      <div className='dashboard-page'>
        <Outlet />
      </div>
    </div>
  )
}

export default ShareLayout
