import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

export const Root: React.FC = () => (
  <div className="flex flex-1">
    <Sidebar />
    <main className="p-5">
      <Outlet />
    </main>
  </div>
)
