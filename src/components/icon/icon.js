import React from 'react'

const Icon = (props) => {
  const { color, size } = props;

  return (
    <svg
      fill={color}
      width={size}
      height={size}
    >
      {props.children}
    </svg>
  )
}

export default Icon;