import { Outlet } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from "react"
import { fetchCategories } from "@/apis/categories";
import { VerifyEmailProvider } from "@/utils/VerifyEmailContext";

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
  useEffect(() => {
    const fetchingdata = async () => {
      const categories = await fetchCategories();
      return categories;
    }
    fetchingdata();

    },[])
  return (
    <VerifyEmailProvider>
    <QueryClientProvider client={queryClient}>
      <div className="font-primary">
        <Outlet />
      </div>
    </QueryClientProvider>
    </VerifyEmailProvider>
  )
}
