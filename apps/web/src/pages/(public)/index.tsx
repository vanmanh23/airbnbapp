import { useSearchParams } from 'react-router-dom'
import CategoryList from './_components/CategoryLish'
import { Button } from '@/components/ui/button'
import { fetchRooms } from '@/apis/rooms'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FilterModal from './_components/FilterModal'
import { fetchCategories } from '@/apis/categories'
import { useQuery } from '@tanstack/react-query';
import RoomList from './_components/RoomList'
import { useRef } from 'react'

export default function Component() {
  const [searchParams] = useSearchParams()
  const categoryListRef = useRef<HTMLDivElement>(null)

  function onRightClick() {
    if (!categoryListRef.current) return
    const rect = categoryListRef.current.getBoundingClientRect()
    categoryListRef.current.scroll({
      behavior: 'smooth',
      left: rect.width
    })
  }

  function onLeftClick() {
    if (!categoryListRef.current) return
    const rect = categoryListRef.current.getBoundingClientRect()
    categoryListRef.current.scroll({
      behavior: 'smooth',
      left: rect.width * -1
    })
  }

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    initialData: [],
  })
  const categoryTag = searchParams.get('category_tag') ?? categoriesQuery.data[0]?.id

  const roomsQuery = useQuery({
    queryKey: ['rooms', categoryTag],
    queryFn: ({ queryKey }) => fetchRooms(queryKey[1]),
    initialData: []
  })


  return (
    <>
      <div className="mb-4 flex ">
        <div
          onClick={onLeftClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronLeft />
        </div>
        <div ref={categoryListRef} className="no-scrollbar flex w-4/5 gap-8 overflow-x-auto">
          <CategoryList categories={categoriesQuery.data} isLoading={categoriesQuery.isFetching} />
        </div>
        <div
          onClick={onRightClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronRight />
        </div>
        <FilterModal />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        <RoomList rooms={roomsQuery.data} isLoading={roomsQuery.isFetching}/>
      </div>
      <div className="mt-14 flex flex-col items-center">
        <h2 className="text-xl font-bold"> Continue exploring campers </h2>
        <Button  size="lg" className="mt-4 bg-black hover:bg-black/90">
          {' '}
          Show More
        </Button>
      </div>
    </>
  )
}