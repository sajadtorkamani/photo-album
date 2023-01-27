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
  return []
}

export async function createPhoto(input: CreatePhotoInput) {
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
