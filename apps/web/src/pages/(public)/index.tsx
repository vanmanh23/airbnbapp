import CategoryList from "./_components/CategoryLish";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RoomList from "./_components/RoomList";
import { useContext, useEffect, useRef, useState } from "react";
import { fetchCategories } from "@/apis/categories";
import { useQuery } from "@tanstack/react-query";
import { VerifyEmailContext } from "@/utils/VerifyEmailContext";
import { toast } from "sonner";
import { fetchRoomAllowCategory, Room } from "@/apis/rooms";
import Spinner from "@/components/Spinner";
export default function Component() {
  const [getCategory, setCategory] = useState(1);
  const categoryListRef = useRef<HTMLDivElement>(null);
  const context = useContext(VerifyEmailContext);
  const [page, setPage] = useState(1); // Quản lý số trang hiện tại
  const [rooms, setRooms] = useState<Room[]>([]); // Dữ liệu gộp của các phòng
  const sentinelRef = useRef<HTMLDivElement | null>(null); // Ref cho phần tử sentinel
  const [stClickShowmore, setStClickShowmore] = useState(false);
  if (!context) {
    throw new Error("useContext must be used within a VerifyEmailProvider");
  }
  const { isLogin } = context;

  if (isLogin) {
    toast.success("Created account successfully!", { duration: 2000 });
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
    queryKey: ["rooms", getCategory, page],
    queryFn: () => fetchRoomAllowCategory(getCategory),
    initialData: [],
  });
  const handleGetCategory = (id: number) => {
    setCategory(id);
  };
  const handleShowMore = () => {
    setStClickShowmore(true);
  };
  useEffect(() => {
    if (roomsQuery.data) {
      setRooms((prev) => [...prev, ...roomsQuery.data]);
    }
  }, [roomsQuery.data]);
  //

  console.log("setStClickShowmore: ", stClickShowmore);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stClickShowmore) {
          // if(stClickShowmore) {
          console.log("Đã cuộn tới thẻ <div ref={sentinelRef}>");
          setPage((prev) => prev + 1);
          // }
        }
      },
      {
        root: null, // Sử dụng viewport hiện tại
        rootMargin: "0px", // Không thêm khoảng cách
        threshold: 0.1, // Kích hoạt khi 10% thẻ vào viewport
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [stClickShowmore]);

  return (
    <>
      <div className="mb-4 flex">
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
            getCategory={handleGetCategory}
          />
        </div>
        <div
          onClick={onRightClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronRight />
        </div>
        <div className="md:flex flex-row gap-2 h-fit p-3 border border-gray-200 rounded-lg hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="block h-4 w-4 stroke-current stroke-2"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
            ></path>
          </svg>
          <p className="text-sm text-text-primary font-medium">Filters</p>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-6 gap-6 sm:grid-cols-2 sm:mx-3 md:grid-cols-3 md:mx-0 lg:grid-cols-4 lg:mx-0 xl:grid-cols-4 xl:mx-0 2xl:mx-0 2xl:grid-cols-4">
        {/* <RoomList rooms={roomsQuery.data} isLoading={roomsQuery.isFetching} /> */}
        <RoomList rooms={rooms} isLoading={roomsQuery.isFetching} />
      </div>

      <div ref={sentinelRef} className="h-10 w-full"></div>

      {stClickShowmore ? (
        <Spinner />
      ) : (
        <div className="mt-14 flex flex-col items-center">
          <h2 className="text-xl font-bold"> Continue exploring campers </h2>
          <Button
            size="lg"
            className="mt-4 bg-black hover:bg-black/90"
            onClick={handleShowMore}
          >
            Show More
          </Button>
        </div>
      )}
    </>
  );
}
