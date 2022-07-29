import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillFacebook, AiOutlineLogin, AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsGoogle, BsLockFill, BsTwitter } from 'react-icons/bs'
import { InputComponent, Logo } from '../components'

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
      <form
        className='clr register-container || container '
        onSubmit={onSubmit}
      >
        <header className='register-header || fs-100'>
          <Logo />

          {value.isMember ? (
            <h1>Login</h1>
          ) : (
            <>
              <h1 className='clr || fs-400 fw-400  text-accent'>
                Join thousands of learners from around the world
              </h1>
              <p className='clr || fs-200 fw-600 text-accent'>
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

          <button
            className='button || text-accent-100 bg-primery-100 btn-radius fs-300 fw-600 '
            type='button'
          >
            {value.isMember ? 'Login' : 'Start coding now'}
          </button>
        </div>
        <p className='options || fw-600 fs-200 text-accent-100'>
          or continue with these social profile
        </p>
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
          <p className='options || fw-600 fs-200 text-accent-100'>
            {value.isMember
              ? "Don't have an account yet?"
              : 'Allready a member?'}
            <button
              className='button || text-primery-100 ts-400'
              type='button'
              onClick={toggleChange}
            >
              {value.isMember ? 'register' : 'login'}
            </button>
          </p>
        </div>
      </form>
    </>
  )
}

export default Register
