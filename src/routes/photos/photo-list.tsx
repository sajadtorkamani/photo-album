import React from 'react'
import { useLoaderData } from 'react-router-dom'
import delay from 'delay'
import { PageTitle } from '../../components/PageTitle'

export async function loader() {
  await delay(2000)
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
