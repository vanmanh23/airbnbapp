"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Trash2 } from "lucide-react";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { deleteRoom } from "@/apis/rooms";
import { toast, Toaster } from "sonner";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
}
interface Identifiable {
  id: string | number; // Adjust the type as needed
}
export function DataTable<TData extends Identifiable, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (!isLoading) {
    return (
      <div>
        <Skeleton className="h-8 w-full" />
        <div className="mt-6 h-80 w-full flex">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    );
  }
  const TrashClick = async (id: string) => {
    try {
      await deleteRoom(id);
      toast.success("Room deleted successfully!", {
        style: { color: "#2ecc71" },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the room. Please try again.", {
        style: { color: "#e74c3c" },
      });
    }
  };
  return (
    <div>
      <Toaster />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
                <TableHead>Delete</TableHead>
                <TableHead>Edit</TableHead>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  {/*  */}
                  <TableCell
                    style={{ cursor: "pointer", justifyContent: "center" }}
                  >
                    <Trash2
                      style={{ color: "red" }}
                      onClick={() => TrashClick(row.original.id.toString())}
                    />
                  </TableCell>
                  <TableCell
                    style={{ cursor: "pointer", justifyContent: "center" }}
                  >
                    <Clipboard style={{ color: "green" }} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
