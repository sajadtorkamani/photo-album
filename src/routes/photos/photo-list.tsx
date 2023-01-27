import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { getPhotos } from '../../lib/services/photo-service'

export async function loader() {
  const photos = await getPhotos()
  return { photos }
}

type LoaderData = Awaited<ReturnType<typeof loader>>

export const PhotoList: React.FC = () => {
  const { photos } = useLoaderData() as LoaderData

  return (
    <>
      <PageTitle>Your photos</PageTitle>
      <p className="text-gray-600">
        {photos.length > 0 ? 'TODO: Show photos' : 'You have no photos.'}
      </p>
    </>
  )
}
