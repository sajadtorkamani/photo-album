import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ROUTES } from '../constants'

export const NotFound: React.FC = () => (
  <div className="mt-12 mb-4 text-center">
    <h1 className="mb-4 text-2xl font-bold">Page not found.</h1>
    <p className="mb-3 text-gray-600">
      The page you were looking for couldn't be found.
    </p>

    <Link to={ROUTES.root}>
      <Button>Return to home</Button>
    </Link>
  </div>
)

export default NotFound
