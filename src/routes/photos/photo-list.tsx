import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { useLoaderData } from 'react-router-dom'

export async function loader() {
  return { contacts: [] }
}

type LoaderData = Awaited<ReturnType<typeof loader>>

export const PhotoList: React.FC = () => {
  const { contacts } = useLoaderData() as LoaderData

  return (
    <>
      <PageTitle>Your photos</PageTitle>
      <p className="text-gray-600">
        {contacts.length > 0 ? 'TODO: Show contacts' : 'You have no contacts.'}
      </p>
    </>
  )
}
