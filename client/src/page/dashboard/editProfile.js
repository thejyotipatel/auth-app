import React from 'react'
import { Navigate } from 'react-router-dom'
import {
  AiFillCamera,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowsAlt,
} from 'react-icons/ai'
import {
  BsArrow90DegDown,
  BsArrowBarDown,
  BsArrowClockwise,
  BsArrowDownLeft,
  BsFileArrowDown,
  BsFileArrowUp,
} from 'react-icons/bs'
import { InputComponent, Sidebar } from '../../components'
import { useAppContext } from '../../context/appContaxt'

const EditProfile = () => {
  const { toggleSidebar, showSidebar } = useAppContext()

  return (
    <div className='container'>
      <div className='back-link'>
        <a href='/profile'>
          {/* <Navigate to={'/profile'}> */}
          <span>
            <AiOutlineArrowRight />
            {/* <Bi /> */}
          </span>
          Back
          {/* </Navigate> */}
        </a>
      </div>
      <header>
        <h2>Change Info</h2>
        <p>Changes will be reflected to every services</p>
      </header>
      <div className='columes'>
        <div className='col'>
          <div className='row'>
            <div className='profile-img'>
              <img src='' alt='profile pic' />
              <span>
                <AiFillCamera />
              </span>
            </div>
            <h3>Change Photo</h3>
          </div>
        </div>
        <InputComponent
          labelText={'name'}
          type='text'
          name={'name'}
          placeholderText='Enter your name...'
        />
        <div className='input-control'>
          <label htmlFor='bio' className='label'>
            bio
          </label>
          <textarea
            name='bio'
            cols='30'
            rows='10'
            placeholder='Enter your bio...'
          ></textarea>
        </div>
        <InputComponent
          labelText={'phone'}
          type='tel'
          name={'phone'}
          placeholderText='Enter your phone...'
        />
        <InputComponent
          labelText={'email'}
          type='email'
          name={'email'}
          placeholderText='Enter your email...'
        />
        <InputComponent
          labelText={'password'}
          type='password'
          name={'password'}
          placeholderText='Enter your new password...'
        />
        <button type='button'>save</button>
      </div>
    </div>
  )
}

export default EditProfile
