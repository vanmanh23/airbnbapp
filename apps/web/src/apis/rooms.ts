import axios from "axios"

export interface Room {
    id: string
    name: string
    price: number
    date: string
    distance: string
    images: [
      id: number,
      imageUrl: string,
      roomId?: string
    ]
  }
  export interface RoomEntity {
    categoryId: string
    name: string
    price: number
    date: string
    distance: string
  }
  export interface ImagesEntity {
    imageUrl: string[]
    roomId: string;
  }

  export const fetchRooms = async (categoryId: string) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/room/${categoryId}`)
    const rooms = await res.data
    return rooms
  }
  export const fetchRoom = async (roomId: string): Promise<Room[]> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`)
    const room = await res.json()
    return room
  }
  export const createRoom = async (data: RoomEntity) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/rooms/category/newroom`, {
      name: data.name,
      price: data.price,
      date: data.date,
      distance: data.distance,
      categoryId: data.categoryId
    })
    return {
      message: "Successfully created.",
      data: res.data
    }
  }
  export const createImagesOfRoom = async (data: ImagesEntity) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/room-images/newimage/${data.roomId}`, {
        imageUrls: data.imageUrl
      });
      return {
        message: "Successfully created.",
        data: response.data, // Có thể trả về dữ liệu từ response nếu cần
      };
    } catch (error) {
      console.error("Error creating images:", error);
      throw error; // Nên ném lỗi để xử lý ngoại lệ bên ngoài
    }
  }