import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Root, loader as rootLoader } from './routes/root'
import { ErrorPage } from './error-page'
import {
  CreatePhoto,
  action as createPhotoAction,
} from './routes/photos/create'
import { PhotoList } from './routes/photos/photo-list'

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <PhotoList />,
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
