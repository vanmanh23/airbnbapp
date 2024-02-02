export interface user{
    email     :string 
    password  :string 
}

export const signUp = async (data: user) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const user = await res.json()
  return user
}