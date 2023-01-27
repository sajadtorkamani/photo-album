import React, { LabelHTMLAttributes } from 'react'
import classNames from 'classnames'

type Props = LabelHTMLAttributes<HTMLLabelElement>

export const FormLabel: React.FC<Props> = (props) => (
  <label className={classNames('mb-1 block', props.className)} {...props} />
)
