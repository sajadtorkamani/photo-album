import delay from 'delay'
import { z } from 'zod'

export const CreatePhotoInputSchema = z.object({
  note: z.string().min(5),
})

type CreatePhotoInput = z.infer<typeof CreatePhotoInputSchema>

export interface Photo {
  id: number
  title: string
  createdAt: string
  url: string
  note: string
}

export async function getPhotos(): Promise<Photo[]> {
  await delay(1000)
  return []
}

export async function createPhoto(input: CreatePhotoInput) {
  await delay(1000)

  return {
    photo: {
      id: 1,
      title: 'My Photo',
      createdAt: new Date().toISOString(),
      url: 'https://placekitten.com/200/300',
      note: 'This is a note',
    },
  }
}
