import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar: React.FC = () => (
  <nav className="flex min-w-[200px] bg-gray-200 p-3 pt-5">
    <ul className="flex flex-col">
      <li className="mb-2">
        <Link to="/">Your photos</Link>
      </li>
      <li>
        <Link to="/photos/new">Add photo</Link>
      </li>
    </ul>
  </nav>
)
