import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({
  columns,
  rows,
  height = 300,
  width = "100%",
}) {
  return (
    <div style={{ height: height, width: width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
