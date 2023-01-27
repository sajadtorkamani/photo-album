import React from 'react'
import { redirect } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { logout } from '../../lib/services/auth-service'

export async function action() {
  logout()
  return redirect(ROUTES.root)
}

export const Logout: React.FC = () => <>Logging out...</>
