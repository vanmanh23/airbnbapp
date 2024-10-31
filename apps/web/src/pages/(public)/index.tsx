import CategoryList from "./_components/CategoryLish";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FilterModal from "./_components/FilterModal";
import RoomList from "./_components/RoomList";
import { useContext, useRef } from "react";
// import { Roomsdata } from '@/data/roomdata'
import { fetchCategories, fetchRoomsWithCategory } from "@/apis/categories";
import { useQuery } from "@tanstack/react-query";
import { VerifyEmailContext } from "@/utils/VerifyEmailContext";
import { toast } from "sonner";
export default function Component() {
  const categoryListRef = useRef<HTMLDivElement>(null);
  const context = useContext(VerifyEmailContext);
  if (!context) {
    throw new Error("useContext must be used within a VerifyEmailProvider");
  }
  const { isLogin } = context;

  if(isLogin){
    toast.success("Created account successfully!", {duration: 2000})
  }

  function onRightClick() {
    if (!categoryListRef.current) return;
    const rect = categoryListRef.current.getBoundingClientRect();
    categoryListRef.current.scroll({
      behavior: "smooth",
      left: rect.width,
    });
  }
  function onLeftClick() {
    if (!categoryListRef.current) return;
    const rect = categoryListRef.current.getBoundingClientRect();
    categoryListRef.current.scroll({
      behavior: "smooth",
      left: rect.width * -1,
    });
  }
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    initialData: [],
  });
  const roomsQuery = useQuery({
    queryKey: ["rooms"],
    queryFn: () => fetchRoomsWithCategory(),
    initialData: [],
  })
  // console.log("roomsQuery: ", roomsQuery.data);
  // const test = localStorage.getItem("token");
  // console.log("test acces token: ", test);
  return (
    <>
      <div className="mb-4 flex ">
        <div
          onClick={onLeftClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronLeft />
        </div>
        <div
          ref={categoryListRef}
          className="no-scrollbar flex w-4/5 gap-8 overflow-x-auto"
        >
          <CategoryList
            categories={categoriesQuery.data}
            isLoading={categoriesQuery.isFetching}
          />
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
        <RoomList rooms={roomsQuery.data} isLoading={roomsQuery.isFetching} />
      </div>
      <div className="mt-14 flex flex-col items-center">
        <h2 className="text-xl font-bold"> Continue exploring campers </h2>
        <Button size="lg" className="mt-4 bg-black hover:bg-black/90">
          {" "}
          Show More
        </Button>
      </div>
    </>
  );
}
