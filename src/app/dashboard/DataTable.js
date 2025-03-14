"use client";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "amount", headerName: "Amount", width: 110, sortable: true },
];

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com", amount: 123 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", amount: 456 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", amount: 789 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
      />
    </div>
  );
}
