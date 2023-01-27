import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { createPhoto, getPhotos, Photo } from '../lib/services/photo-service'

export async function loader() {
  const photos = await getPhotos()
  return { photos }
}

export const Root: React.FC = () => {
  const { photos } = useLoaderData() as { photos: Photo[] }

  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="p-5">
        {/* Render all the other elements here */}
        <Outlet />
      </main>
    </div>
  )
}
