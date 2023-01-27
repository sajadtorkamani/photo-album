import React from 'react'
import { Form, Link, useSubmit } from 'react-router-dom'
import { ROUTES } from '../constants'

export const Sidebar: React.FC = () => {
  const submit = useSubmit()

  return (
    <nav className="flex min-w-[200px] bg-gray-200 p-3 pt-5">
      <ul className="flex flex-col">
        <li className="mb-2">
          <Link to={ROUTES.root}>Your photos</Link>
        </li>

        <li className="mb-6">
          <Link to="/photos/new">Add photo</Link>
        </li>

        <li>
          <span
            className="cursor-pointer"
            onClick={() => {
              if (window.confirm('Are you sure you want to logout?')) {
                submit(null, { method: 'post', action: ROUTES.logout })
              }
            }}
          >
            Logout
          </span>
        </li>
      </ul>
    </nav>
  )
}
