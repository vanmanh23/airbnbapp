import axios from 'axios'
import { Room } from './rooms'

export interface Category {
  id: number
  title: string
  icon: string
}

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
  const categories = await res.data;
  return categories;
}
export const fetchRoomsWithCategory = async (): Promise<Room[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/all`);
  const rooms = await res.data;
  return rooms;
}