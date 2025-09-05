"use client";

// React Imports
import { useState, useEffect, useMemo } from "react";

// Next Imports
import Link from "next/link";
import { useParams } from "next/navigation";

// MUI Imports
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";

// Third-party Imports
import classnames from "classnames";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

// Components Imports
import CustomAvatar from "@/@core/components/mui/Avatar";
import TablePaginationComponent from "@/components/TablePaginationComponent";
import CustomTextField from "@/@core/components/mui/TextField";

// Util Imports
import { getLocalizedUrl } from "@/utils/i18n";

// Style Imports
import tableStyles from "@/@core/styles/table.module.css";
import { db } from "@/data/academy";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  // States
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <CustomTextField
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Column Definitions
const columnHelper = createColumnHelper();

const CourseTable = ({ courseData }) => {
  // States
  const [rowSelection, setRowSelection] = useState({});

  const [data, setData] = useState(...[db.dummyEventList]);
  const [globalFilter, setGlobalFilter] = useState("");

  // Hooks
  const { lang: locale } = useParams();

  const eventDetails = async () => {
    try {
      // setIsLoading(true);
      //   setData({ isLoading: true, eventListingData: [] });
      const eventListResponse = await fetch("/api/event-listing", {
        method: "GET",
      });
      if (!eventListResponse.ok) {
        throw String(eventListResponse.status);
      }
      const eventListJson = await eventListResponse.json();
      console.log("eventListJson", eventListJson);
      // setData(eventListJson.data);
      //   setData({ eventListingData: eventListJson.data, isLoading: false });
    } catch (error) {
      console.log(error);
      let errorDetails;
      //   switch (true) {
      //     case error == 401:
      //       errorDetails = await fetchNewAccessToken(refreshToken);
      //       switch (true) {
      //         case errorDetails.status == "403":
      //           // setRelogin(true);
      //           break;
      //         case errorDetails.status == 200:
      //           // eventDetails(errorDetails.data.accessToken);
      //           eventListingApi.current = false;
      //           setAuth({ accessToken: errorDetails.data.accessToken });
      //           break;
      //       }
      //       break;
      //     default:
      //       console.log("something went wrong");
      //       console.log("errorDetails", errorDetails);
      //       break;
      //   }
    }
  };
  useEffect(() => {
    // if (hasHydrated && isAuthenticated && !eventListingApi.current) {
    //   eventListingApi.current = true;
    eventDetails();
    // }
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      columnHelper.accessor("eventName", {
        header: "Event Name",
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            {/* <CustomAvatar
              variant="rounded"
              skin="light"
              color={row.original.color}
            >
              <i className={classnames("text-[28px]", row.original.logo)} />
            </CustomAvatar> */}
            <div className="flex flex-col">
              <Typography
                component={Link}
                href={getLocalizedUrl("/apps/academy/course-details", locale)}
                className="font-medium hover:text-primary"
                color="text.primary"
              >
                {row.original.eventName}
              </Typography>
            </div>
          </div>
        ),
      }),
      columnHelper.accessor("location", {
        header: "Location",
        cell: ({ row }) => (
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-1.5">
              <Typography>{row.original.location}</Typography>
            </div>
          </div>
        ),
        enableSorting: false,
      }),
      columnHelper.accessor("startDateTime", {
        header: "Start In",
        cell: ({ row }) => {
          const futureDate = new Date(row.original.startDateTime);
          const now = new Date();

          const diffInMs = futureDate - now;

          if (diffInMs <= 0) {
            return (
              <Typography className="font-medium w-[60px] text-center" color="error.main">
                -||-
              </Typography>
            );
          }

          const totalMinutes = Math.floor(diffInMs / (1000 * 60));
          const hours = Math.floor(totalMinutes / 60);
          const minutes = totalMinutes % 60;

          const formatted = `${String(hours).padStart(2, "0")}h ${String(
            minutes
          ).padStart(2, "0")}m`;
          return (
            <Typography className="font-medium" color="text.primary">
              {formatted}
            </Typography>
          );
        },
        enableSorting: false,
      }),
      columnHelper.accessor("eventStatus", {
        header: "Status",
        cell: ({ row }) => (
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-1.5">
              {/* <Typography className="text-[14px] capitalize">{row.original.eventStatus}</Typography> */}
              <p className={`text-[12px] capitalize rounded-[10px] p-[2px_10px] ${row.original.eventStatus == "pending" ? "bg-[#F1C232] text-[#5f4700] font-bold" : "bg-[#6AA84F] text-white"}`}>{row.original.eventStatus}</p>
            </div>
          </div>
        ),
        enableSorting: false,
      }),
      columnHelper.accessor("action", {
        header: "Action",
        cell: ({ row }) => (
            console.log(row),
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-1.5">
              <Link href={`dashboard/users/${row.original.id}`}>Link</Link>
            </div>
          </div>
        ),
        enableSorting: false,
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  return (
    <Card>
      <CardHeader
        title="Course you are taking"
        action={
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Search Event"
          />
        }
        className="flex-wrap gap-4"
      />
      <div className="overflow-x-auto">
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames({
                            "flex items-center": header.column.getIsSorted(),
                            "cursor-pointer select-none":
                              header.column.getCanSort(),
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <i className="tabler-chevron-up text-xl" />,
                            desc: <i className="tabler-chevron-down text-xl" />,
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td
                  colSpan={table.getVisibleFlatColumns().length}
                  className="text-center"
                >
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map((row) => {
                  return (
                    <tr
                      key={row.id}
                      className={classnames({ selected: row.getIsSelected() })}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page);
        }}
      />
    </Card>
  );
};

export default CourseTable;
