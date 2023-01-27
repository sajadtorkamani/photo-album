import delay from 'delay'
import { z } from 'zod'

export const RegisterInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type RegisterUserInput = z.infer<typeof RegisterInputSchema>

export function registerUser(input: RegisterUserInput) {
  delay(3000)
  return {}
}

export function isAuthenticated() {
  return window.localStorage.getItem('token') === 'token123'
}

export function authenticate() {
  window.localStorage.setItem('token', 'token123')
}

export function logout() {
  window.localStorage.removeItem('token')
}
