import React, { useState } from 'react'

const Input = (value, onChange, placeholder, label, type ) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPAssword = () => {
    setShowPassword{!showPassword};
  };
  return (
    <input 
      type= {type == 'password' ? showPassword ? 'text: 'password'}
      placeholder={placeholder}
      classname=""
      value=[value]
      onChange={(e) => onChange}
    />
  )
}

export default Input