import React from 'react'
import {
  ActionFunctionArgs,
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom'
import { DevButton } from '../../components/ActionButton'
import { Button } from '../../components/Button'
import { FormErrors } from '../../components/FormErrors'
import { z } from 'zod'
import { FormGroup } from '../../components/FormGroup'
import { FormLabel } from '../../components/FormLabel'
import { ROUTES } from '../../constants'
import { isDev, validationErrors } from '../../lib/helpers'
import { authenticate, isAuthenticated } from '../../lib/services/auth-service'
import { api } from '../../lib/services/api'

export async function loader() {
  if (isAuthenticated()) {
    return redirect(ROUTES.root)
  }

  return {}
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method === 'POST') {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })

    const parsedData = schema.safeParse(data)
    if (!parsedData.success) {
      return json({ errors: validationErrors(parsedData.error) })
    }

    const response = await api.post('/auth/register', parsedData.data)

    debugger

    authenticate()
    return redirect(ROUTES.root)
  }

  // Assume errors
  return redirect(ROUTES.register)
}

export const Register: React.FC = () => {
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

          <Button type="submit">Register</Button>
        </Form>

        {isDev() && (
          <DevButton
            onClick={() => {
              console.log('eg')
              debugger
              document.querySelector<HTMLInputElement>(
                'input[name="email"]'
              )!.value = 'sajadtorkamani1@gmail.com'
              document.querySelector<HTMLInputElement>(
                'input[name="password"]'
              )!.value = import.meta.env.USER_PASSWORD
            }}
          >
            Fill form
          </DevButton>
        )}
      </section>
    </div>
  )
}
