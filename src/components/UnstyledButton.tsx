import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const UnstyledButton: React.FC<Props> = (props) => (
  <button className={classNames('underline', props.className)} {...props} />
)
