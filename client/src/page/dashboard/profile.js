simport { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai'
import { InputComponent, Sidebar } from '../../components'
import { useAppContext } from '../../context/appContaxt'
const Profile = () => {
  const { toggleSidebar, showSidebar } = useAppContext()

  return (
    <div className=' '>
      <button className='menu-btn' onClick={toggleSidebar}>
        <div className='user'>
          {/* <img src='' alt='user image' /> */}
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

      <header>
        <h1>Profile info</h1>
        <p>Basic info, like your name and photo</p>
      </header>
      <main className='container'>
        <div className='contant'>
          {/* <head> */}
          <div className='row'>
            <h1>Profile</h1>
            <p>Some info may be visible to other people</p>
          </div>
          <div className='row'>
            <button type='button'>Edit</button>
          </div>
          {/* </head> */}
          <div className='columes'>
            <div className='col'>
              <div className='row'>
                <h2>Photo</h2>
              </div>
              <div className='row'>
                <img src='' alt='profile pic' />
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
                <p>
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
