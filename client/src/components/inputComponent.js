import React from 'react'

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
    <div className='input-control || btn-radius'>
      {labelText && (
        <label htmlFor={name} className={className || 'label'}>
          {labelText}
        </label>
      )}
      {icon && (
        <span className='register-icon || fs-400 text-accent-200'> {icon}</span>
      )}
      <input
        className='clr || text-accent-100 fw-400 fs-300'
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
