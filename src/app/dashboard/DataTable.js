"use client";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function DataTable({ data }) {
  const columns = [
    { field: "id", headerName: "ID", width: 100, sortable: true },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      sortable: true,
      filterable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      sortable: true,
      filterable: true,
    },
    {
      field: "sales",
      headerName: "Sales",
      width: 150,
      sortable: true,
      filterable: true,
      type: "number", // Enables numeric sorting/filtering
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }} className="shadow-md">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sortingOrder={["asc", "desc"]}
        filterMode="client" // Client-side filtering
        disableSelectionOnClick
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            bgcolor: "background.paper",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            py: 1,
          },
        }}
      />
    </Box>
  );
}
