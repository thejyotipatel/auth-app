import InputComponent from './inputComponent'
import Sidebar from './sidebar'
import { AiOutlineLogin } from 'react-icons/ai'
import MainHeader from './mainHeader'

const Logo = () => {
  return (
    <h1 className='logo || fs-300'>
      <span className='text-primery-100'>
        <AiOutlineLogin />
      </span>
      Authentication App
    </h1>
  )
}

export { InputComponent, Sidebar, Logo, MainHeader }
