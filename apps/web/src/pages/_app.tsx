import { Outlet } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from "react"
import axios from 'axios';
import { Category, fetchCategories } from "@/apis/categories";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})


export default function App() {
  const [data, setData] = useState<Category[]>([])
  useEffect(() => {
    const fetchingdata = async () => {
      const categories = await fetchCategories();
      setData(categories);
      return categories;
    }
    fetchingdata();

    },[])
    
  console.log("dataaaa nestjs: ",data)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-primary">
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}
