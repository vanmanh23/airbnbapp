import { Room } from "@/apis/rooms"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef< Room, unknown>[] = [
    {
      accessorFn: (row) => row.name,
      header: "Name",
    },
    {
      accessorFn: (row) => row.price,
      header: "Price",
    },
    {
      accessorFn: (row) => row.date,
      header: "Date",
    },
  ]
