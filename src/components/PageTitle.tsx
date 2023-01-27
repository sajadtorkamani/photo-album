import React from 'react'

interface Props {
  children: React.ReactNode
}

export const PageTitle: React.FC<Props> = ({children}) => (
  <h1 className="font-bold text-2xl mb-3">{children}</h1>
)
