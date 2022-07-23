import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsGoogle, BsLockFill, BsTwitter } from 'react-icons/bs'
import { InputComponent } from '../components'

const initalState = {
  email: '',
  password: '',
  isMember: true,
}
const Register = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(initalState)

  const toggleChange = () => {
    setValue({
      ...value,
      isMember: !value.isMember,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password, isMember } = value
  }

  return (
    <>
      <form className='container' onSubmit={onSubmit}>
        <header>
          <div className='logo'>
            <img src='' alt='logo' />
          </div>
          {value.isMember ? (
            <h1>Login</h1>
          ) : (
            <>
              <h1>Join thousands of learners from around the world</h1>
              <p>
                Master web development by making real-life projects. There are
                multiple paths for you to choose.
              </p>
            </>
          )}
        </header>
        <div className='input-controls'>
          <InputComponent
            type={'email'}
            name={'email'}
            icon={<AiOutlineMail />}
          />
          <InputComponent
            type={'password'}
            name={'password'}
            icon={<BsLockFill />}
          />

          <button className='button' type='button'>
            {value.isMember ? 'Login' : 'Start coding now'}
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
        <div className='btn-option'>
          <p>
            {value.isMember
              ? "Don't have an account yet?"
              : 'Allready a member?'}
            <button type='button' onClick={toggleChange}>
              {value.isMember ? 'register' : 'login'}
            </button>
          </p>
        </div>
      </form>
    </>
  )
}

export default Register
