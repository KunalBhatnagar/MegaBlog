import React from 'react'

function Button({
    children,
    type ='button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    // the below is done to take classname input from user and because of which it is used in the below button
    className = '',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button