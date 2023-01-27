import React from 'react'
import { useRef, useState } from 'react'
import { PageTitle } from '../../components/PageTitle'

export const AddPhoto: React.FC = () => {
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

      <form>
        <button
          className="border border-gray-400 px-3"
          onClick={handleAddAttachment}
          type="button"
        >
          Attach file
        </button>

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
              className="mt-4 max-w-lg"
            />

            <div
              className="mt-2 cursor-pointer text-sm text-gray-600"
              onClick={() => setImagePreviewUrl(null)}
            >
              Remove file
            </div>
          </>
        )}
      </form>
    </>
  )
}
