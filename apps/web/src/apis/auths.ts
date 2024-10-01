import axios from "axios"

export interface user{
    email     :string 
    password  :string 
}

export const signUp = async (data: user) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const user = await res.json()
  return user
}
export const login = async (data: user) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, data)
  return res.data.data;
}
export const isAccountVerified = async (email: string) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/email/${email}`);
  const isEmailVerified = await res.data.data.isEmailVerified;
  return isEmailVerified;
}