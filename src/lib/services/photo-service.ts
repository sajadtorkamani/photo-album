import delay from 'delay'

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

export async function createPhoto(data: unknown) {
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
