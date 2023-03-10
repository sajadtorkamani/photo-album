import React from 'react'
import z from 'zod'
import { useRef, useState } from 'react'
import { PageTitle } from '../../components/PageTitle'
import { Button } from '../../components/Button'
import {
  ActionFunctionArgs,
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom'
import { UnstyledButton } from '../../components/UnstyledButton'
import { FormErrors } from '../../components/FormErrors'
import {
  createPhoto,
  CreatePhotoInputSchema,
} from '../../lib/services/photo-service'
import { validationErrors } from '../../lib/helpers'
import { FormGroup } from '../../components/FormGroup'
import { FormLabel } from '../../components/FormLabel'
import { ROUTES } from '../../constants'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const parsedInput = CreatePhotoInputSchema.safeParse(data)
  if (parsedInput.success) {
    await createPhoto(parsedInput.data)
    return redirect(ROUTES.root)
  }

  return json({ errors: validationErrors(parsedInput.error) })
}

export const CreatePhoto: React.FC = () => {
  const navigation = useNavigation()
  const actionData = useActionData() as any // How is one to infer the type here?
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)

  function handleAddAttachment() {
    if (!fileInputRef.current) {
      return
    }

    fileInputRef.current.click()
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    const file = files && files[0] ? files[0] : null

    if (file) {
      setImagePreviewUrl(URL.createObjectURL(file))
    }
  }

  return (
    <>
      <PageTitle>Add photo</PageTitle>

      <FormErrors errors={actionData?.errors || {}} />

      <Form method="post">
        <FormGroup>
          <FormLabel htmlFor="note">Image</FormLabel>

          <UnstyledButton onClick={handleAddAttachment} type="button">
            Attach file
          </UnstyledButton>

          <input
            ref={fileInputRef}
            type="file"
            name="file"
            onChange={handleFileChange}
            className="hidden"
          />

          {imagePreviewUrl && (
            <>
              <img
                src={imagePreviewUrl}
                alt="No alt needed here"
                className="mt-4 max-w-sm"
              />
              <div
                className="mt-2 cursor-pointer text-sm text-gray-600"
                onClick={() => setImagePreviewUrl(null)}
              >
                Remove file
              </div>
            </>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="note">Note</FormLabel>

          <textarea
            name="note"
            id="note"
            rows={3}
            className="w-100 block min-w-[300px]"
            placeholder="Add a note here"
          />
        </FormGroup>

        <div className="mt-4">
          <Button type="submit">
            {navigation.state === 'submitting'
              ? 'Adding photo...'
              : 'Add photo'}
          </Button>
        </div>
      </Form>
    </>
  )
}
