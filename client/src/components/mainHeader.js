import { Sidebar, Logo } from '.'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai'
import { useAppContext } from '../context/appContaxt'

const MainHeader = () => {
  const { toggleSidebar, showSidebar } = useAppContext()

  return (
    <>
      <button className='menu-btn' onClick={toggleSidebar}>
        <div className='user'>
          <span>
            <AiOutlineUser />
          </span>
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
    </>
  )
}

export default MainHeader
