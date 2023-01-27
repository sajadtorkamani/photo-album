import React from 'react'

interface Props {
  children: React.ReactNode
}

export const FormGroup: React.FC<Props> = ({ children }) => (
  <div className="mb-3">{children}</div>
)
