import React from 'react'
import { Outlet, redirect } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { ROUTES } from '../constants'
import { isAuthenticated } from '../lib/services/auth-service'

export async function loader() {
  if (!isAuthenticated()) {
    return redirect(ROUTES.register)
  }

  return {}
}

export const Root: React.FC = () => (
  <div className="flex flex-1">
    <Sidebar />
    <main className="p-5">
      <Outlet />
    </main>
  </div>
)
