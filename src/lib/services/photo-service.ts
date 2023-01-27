export interface Photo {
  id: number
  title: string
  createdAt: string
  url: string
  note: string
}

export async function getPhotos() {
  return []
}

export async function createPhoto(data: unknown) {
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
