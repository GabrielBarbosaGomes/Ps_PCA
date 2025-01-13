import React from "react";
import { Box, Grid, Typography, SelectChangeEvent } from "@mui/material";
import { DataGrid as MuiDataGrid, GridPagination, GridColDef } from "@mui/x-data-grid";
import "./styles.scss";

export function  DataGrid ({
    columns,
    rows,
    page,
    pageSize,
    handlePageChange,
    handlePageSizeChange,
    totalPages,
    isLoading,
    emptyMessage,
    noRowsCustom,
    error,
    checkboxSelection = false,
  }) {
    const handlePageSizeChangeInternal = (event) => {
      handlePageSizeChange && handlePageSizeChange(parseInt(event.target.value));
    };
  
    const handlePageChangeInternal = (_event, page) => {
      handlePageChange && handlePageChange(page);
    };
  
    return (
      <Box className="dataGridContainer">
        {error && <Typography color="error">{error}</Typography>}
        <MuiDataGrid
          loading={isLoading}
          rows={rows}
          columns={columns}
          checkboxSelection={checkboxSelection}
          pagination
          pageSizeOptions={[25, 50, 100]} // Se necessário, para configurar as opções de tamanho de página
          rowHeight={69}
          columnHeaderHeight={48}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          getRowId={(row) => row.id} // Custom Row Id getter
         
        />
        {noRowsCustom ? (
          <Box className="noDataContainer">{noRowsCustom}</Box>
        ) : (
          rows.length === 0 && (
            <Box className="noDataContainer">
              <Typography className="emptyMessage">{emptyMessage || "Nenhum dado encontrado"}</Typography>
            </Box>
          )
        )}
      </Box>
    );
  };
  