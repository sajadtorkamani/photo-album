import React from 'react'
import { PageTitle } from '../../components/PageTitle'

export const PhotoList: React.FC = () => {
  return (
    <>
      <PageTitle>Your photos</PageTitle>

      <p className="text-gray-600">You have no photos yet.</p>
    </>
  )
}
