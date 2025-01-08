"use client";

import { Loader } from "lucide-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Header from "@/components/Header";
import { useAppSelector } from "@/redux/store";
import { useGetUsersQuery } from "@/redux/features/api";

const columns: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
    const { data: users, isError, isLoading } = useGetUsersQuery();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader className="animate-spin"/>
            </div>
        )
    }

    if (isError || !users) {
        return (
            <div className="text-center text-red-500 py-4">
                Failed to fetch users
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <Header name="Users" />
            <DataGrid
                rows={users}
                columns={columns}
                getRowId={(row) => row.userId}
                checkboxSelection
                className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
                sx={{
                    "& .MuiTablePagination-select, & .MuiTablePagination-selectIcon": {
                        color: isDarkMode ? "white" : "black", // Change the dropdown text color
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                        color: "black" , // Change thecolumn header color
                    },
                    "& .MuiTablePagination-selectLabel, & .MuiInputBase-root, & .MuiTablePagination-displayedRows": {
                        color: isDarkMode ? "white" : "black", // Change the pagination bar color
                    },
                    "& .MuiSvgIcon-root": {
                        color: "rgb(29 78 216 / var(--tw-bg-opacity, 1))", // Change the pagination arrow color
                    },

                }}
            />
        </div>
    );
};

export default Users;