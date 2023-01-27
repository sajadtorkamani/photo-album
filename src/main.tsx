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
  Register,
  loader as registerLoader,
  action as registerAction,
} from './routes/auth/register'
import { ROUTES } from './constants'
import { Logout, action as logoutAction } from './routes/auth/logout'
import NotFound from './routes/not-found'

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
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.logout,
    element: <NotFound />,
    action: logoutAction,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
