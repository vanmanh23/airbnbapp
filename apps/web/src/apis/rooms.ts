import axios from "axios"

export interface Room {
    id: string
    name: string
    price: number
    date: string
    distance: string
    images: [
      id: number,
      imageUrl: string
    ]
  }

  export const fetchRooms = async (categoryId: string): Promise<Room[]> => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/room/${categoryId}`)
    const rooms = await res.data
    return rooms
  }
  export const fetchRoom = async (roomId: string): Promise<Room[]> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`)
    const room = await res.json()
    return room
  }