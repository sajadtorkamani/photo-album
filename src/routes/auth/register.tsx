import React from 'react'
import {
  ActionFunctionArgs,
  Form,
  json,
  redirect,
  useActionData,
} from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../../components/Button'
import { FormErrors } from '../../components/FormErrors'
import { FormGroup } from '../../components/FormGroup'
import { FormLabel } from '../../components/FormLabel'
import { ROUTES } from '../../constants'
import { validationErrors } from '../../lib/helpers'
import {
  RegisterInputSchema,
  registerUser,
} from '../../lib/services/auth-service'

export async function action({ request }: ActionFunctionArgs) {
  if (request.method === 'POST') {
    debugger
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const parsedInput = RegisterInputSchema.safeParse(data)
    if (parsedInput.success) {
      await registerUser(parsedInput.data)
      return redirect(ROUTES.root, {
        headers: { customMessage: 'You have successfully registered' },
      })
    }

    return json({ errors: validationErrors(parsedInput.error) })
  }

  // Assume errors
  return redirect(ROUTES.register)
}

export const Authenticate: React.FC = () => {
  const actionData = useActionData() as any // How is one to infer the type here?

  return (
    <div className="p-4">
      <section>
        <h2 className="mb-3 text-2xl">Register</h2>

        <FormErrors errors={actionData?.errors || {}} />

        <Form method="post">
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <input type="text" name="email" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <input type="password" name="password" />
          </FormGroup>

          <Button>Register</Button>
        </Form>
      </section>
    </div>
  )
}
