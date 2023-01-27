import { ZodError } from 'zod'

export function validationErrors(error: ZodError) {
  const errors: Record<string, string> = {}

  error.issues.forEach((issue) => {
    const errorPath = issue.path.join(',')
    const errorMessage = issue.message
    errors[errorPath] = errorMessage
  })

  return errors
}
