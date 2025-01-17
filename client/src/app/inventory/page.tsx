"use client";

import { Loader } from "lucide-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Header from "@/components/Header";
import { useAppSelector } from "@/redux/store";
import { useGetProductsQuery } from "@/redux/features/api";

const columns: GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", width: 200 },
    {
        field: "price",
        headerName: "Price",
        width: 110,
        type: "number",
        valueGetter: (value, row) => `$${row.price}`,
    },
    {
        field: "rating",
        headerName: "Rating",
        width: 110,
        type: "number",
        valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
    },
    {
        field: "stockQuantity",
        headerName: "Stock Quantity",
        width: 150,
        type: "number",
    },
];

const Inventory = () => {
    const { data: products, isError, isLoading } = useGetProductsQuery();

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader className="animate-spin"/>
            </div>
        )
    }

    if (isError || !products) {
        return (
            <div className="text-center text-red-500 py-4">
                Failed to fetch products
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <Header name="Inventory" />
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={(row) => row.productId}
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

export default Inventory;