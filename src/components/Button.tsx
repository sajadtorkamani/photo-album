import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = (props) => (
  <button
    className={classNames('border border-gray-400 px-3', props.className)}
    {...props}
  />
)
