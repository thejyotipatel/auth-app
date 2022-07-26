import React from 'react'
import { BsFileImageFill } from 'react-icons/bs'

const InputComponent = ({
  labelText,
  name,
  type,
  handleChange,
  value,
  icon,
  placeholderText,
  className,
}) => {
  return (
    <div className='input-control'>
      {labelText && (
        <label htmlFor={name} className={className || 'label'}>
          {labelText}
        </label>
      )}
      {icon && <span> {icon}</span>}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholderText || name}
      />
    </div>
  )
}

export default InputComponent
