import React from 'react'
import { BsFileImageFill } from 'react-icons/bs'

const InputComponent = ({
  labelText,
  name,
  type,
  handleChange,
  value,
  icon,
}) => {
  return (
    <div className='input-control'>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      {icon && <span> {icon}</span>}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={name}
      />
    </div>
  )
}

export default InputComponent
