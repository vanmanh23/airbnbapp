import axios from 'axios'

export interface Category {
  id: number
  title: string
  icon: string
}

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/category`);
  const categories = await res.data;
  return categories;
}
