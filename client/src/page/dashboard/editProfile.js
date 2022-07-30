import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import {
  AiFillCamera,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowsAlt,
} from 'react-icons/ai'

import img from '../dashboard/profile.jpg'
import { InputComponent, Sidebar } from '../../components'
import { useAppContext } from '../../context/appContaxt'

const EditProfile = () => {
  const { toggleSidebar, showSidebar } = useAppContext()

  return (
    <div className='editProfile-container | container'>
      {/* <div className='back-link'>
        <Link to={'/profile'} className='| text-primery-100'>
          <span>
            <AiOutlineArrowRight />
          </span>
          Back
        </Link>
      </div> */}
      <header className='| tb-margin flow-spaces'>
        <h2 className='| fs-400 fw-400'>Change Info</h2>
        <p className='| fs-200 fw-600 text-accent-200'>
          Changes will be reflected to every services
        </p>
      </header>
      <div className='editprofile-contant'>
        <div className='editprofile-header '>
          <div className='profile-img'>
            <img src={img} alt='profile pic' />
            <span>
              <AiFillCamera />
            </span>
          </div>
          <h3 className='fs-300 text-accent-200  '>Change Photo</h3>
        </div>
        <InputComponent
          labelText={'name'}
          type='text'
          name={'name'}
          placeholderText='Enter your name...'
          className={'edit-profile-input'}
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
        <button
          className='button | text-accent-100 bg-primery-100 btn-radius fs-300'
          type='button'
        >
          save
        </button>
      </div>
    </div>
  )
}

export default EditProfile
