export interface Room {
    id: string
    name: string
    price: number
    date: string
    distance: string
    images: string[]
  }
  
  export const fetchRooms = async (categoryId: string): Promise<Room[]> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/${categoryId}/rooms`)
    const rooms = await res.json()
    return rooms
  }
  export const fetchRoom = async (roomId: string): Promise<Room> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`)
    const room = await res.json()
    return room
  }