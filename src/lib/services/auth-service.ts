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
