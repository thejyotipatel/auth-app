import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai'
import { InputComponent, Sidebar } from '../../components'
import { useAppContext } from '../../context/appContaxt'
import img from '../dashboard/profile.jpg'
const Profile = () => {
  const { toggleSidebar, showSidebar } = useAppContext()

  return (
    <div className='profile-container'>
      {/* <button className='menu-btn' onClick={toggleSidebar}>
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
      {showSidebar && <Sidebar />} */}

      <header className='cta || tb-margin'>
        <h1 className='cta || text-center fs-700 fw-400 '>Profile info</h1>
        <p className='cta || text-center fs-300 fw-600'>
          Basic info, like your name and photo
        </p>
      </header>
      <main className='profile-subcontainer  '>
        <div className='contant'>
          <header className=''>
            <div className='row'>
              <h1 className=' | text-accent-100 fs-400 fw-400'>Profile</h1>
              <p className=' | text-accent-100 fs-200 fw-600'>
                Some info may be visible to other people
              </p>
            </div>
            <div className='row | fs-300 fw-400'>
              <a href='/edit-profile'>Edit</a>
            </div>
          </header>
          <div className='columes | '>
            <div className='col'>
              <div className='row'>
                <h2>Photo</h2>
              </div>
              <div className='row'>
                <img src={img} alt='profile pic' />
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <h2>Name</h2>
              </div>
              <div className='row'>
                <p>Jyoti patel</p>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <h2>Bio</h2>
              </div>
              <div className='row'>
                <p className='bio'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  illum quasi nemo! Dolores distinctio.
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <h2>Phone</h2>
              </div>
              <div className='row'>
                <p>1234567890</p>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <h2>Email</h2>
              </div>
              <div className='row'>
                <p>example.mail@Gmail.com</p>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <h2>password</h2>
              </div>
              <div className='row'>
                <p>***************</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
