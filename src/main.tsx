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
import {
  PhotoList,
  loader as photoListLoader,
} from './routes/photos/photo-list'
import {
  Authenticate,
  action as authenticateAction,
} from './routes/auth/register'
import { ROUTES } from './constants'

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
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
  {
    path: ROUTES.register,
    element: <Authenticate />,
    action: authenticateAction,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
