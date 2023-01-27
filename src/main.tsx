import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Root } from './routes/root'
import { ErrorPage } from './error-page'
import {
  CreatePhoto,
  action as createPhotoAction,
} from './routes/photos/create'
import {
  PhotoList,
  loader as photoListLoader,
} from './routes/photos/photo-list'

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PhotoList />,
        loader: photoListLoader,
      },
      {
        action: createPhotoAction,
        path: 'photos/new',
        element: <CreatePhoto />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
