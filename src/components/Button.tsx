import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = (props) => (
  <button
    className={classNames('border border-gray-400 px-3', props.className)}
    {...props}
  />
)
