import React from 'react'
import { useRef, useState } from 'react'
import { PageTitle } from '../../components/PageTitle'
import { Button } from '../../components/Button'
import { ActionFunctionArgs, Form, json, useActionData } from 'react-router-dom'
import { UnstyledButton } from '../../components/UnstyledButton'
import { createPhoto } from '../../lib/services/photo-service'
import { FormErrors } from '../../components/FormErrors'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data)

  return json({
    errors: {
      note: 'Not good enough note',
    },
  })

  // const photo = await createPhoto()
  // return { photo }
}

export const CreatePhoto: React.FC = () => {
  const actionData = useActionData() as any
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
        <div className="mb-5">
          <label htmlFor="note" className="mb-1 block">
            Image
          </label>
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
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="mb-1 block">
            Note
          </label>
          <textarea
            name="note"
            id="note"
            rows={5}
            className="w-100 block"
            placeholder="Add a note here"
          />
        </div>

        <div className="mt-4">
          <Button type="submit">Add photo</Button>
        </div>
      </Form>
    </>
  )
}
