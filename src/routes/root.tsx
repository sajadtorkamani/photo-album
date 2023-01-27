import React from 'react'
import { Outlet, redirect } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { ROUTES } from '../constants'

export function loader() {
  const name = 'sajad'
  const token = window.localStorage.getItem('token')

  if (!token) {
    return redirect(ROUTES.register)
  }
}

export const Root: React.FC = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  )
}
