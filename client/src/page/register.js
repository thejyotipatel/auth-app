import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs'

const Register = () => {
  return (
    <>
      <div className='container'>
        <header>
          <div className='logo'>
            <img src='' alt='logo' />
          </div>
          <h1>Join thousandsof learners from around the world</h1>
          <p>
            Master web development by making real-life projects.There are
            multiple paths for you to choose.
          </p>
        </header>
        <div className='input-controls'>
          <div className='input-control'>
            <label htmlFor='email'>email</label>
            <input type='email' name='email' />
          </div>
          <div className='input-control'>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' />
          </div>
          <button className='button' type='button'>
            Start coding now
          </button>
        </div>
        <p>or continue with these social profile</p>
        <div className='social-icons'>
          <ul>
            <li>
              <a href='' aria-label='Google'>
                <span>
                  <BsGoogle />
                </span>
              </a>
            </li>
            <li>
              <a href='' aria-label='Facebook'>
                <span>
                  <AiFillFacebook />
                </span>
              </a>
            </li>
            <li>
              <a href='' aria-label='Twittr'>
                <span>
                  <BsTwitter />
                </span>
              </a>
            </li>
            <li>
              <a href='' aria-label='Github'>
                <span>
                  <BsGithub />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className='login-logiout-option'>
          <p>
            Allready a member? <button type='button'>login</button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
