import { ZodError } from 'zod'

export function validationErrors(error: ZodError) {
  const errors: Record<string, string> = {}

  error.issues.forEach((issue) => {
    const errorPath = issue.path.join(',')
    errors[errorPath] = issue.message.split(' ').slice(1).join(' ')
  })

  return errors
}
