import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import data from '../../../assets/mock/log.json';
import "./styles.scss";

const paginationModel = { page: 0, pageSize: 5 };

export function AccessLogs() {
    const columns = [
        {
          field: "id",
          headerName: "Código",
          flex: 1,
          sortable: false,
          align: "left",
        },
        {
          field: "auth",
          headerName: "Tipo de Autenticação",
          flex: 1,
          sortable: false,
          align: "left",
        },
        {
          field: "status",
          headerName: "Status",
          flex: 1,
          sortable: false,
          align: "left",
        },
        {
          field: "data",
          headerName: "Data",
          sortable: false,
          flex: 1,
          align: "left",
        },
        {
          field: "erro",
          headerName: "Mensagem de Erro",
          flex: 1,
          sortable: false,
          align: "left",
        }
      ];

  return (
    <Box>
      <Paper className="wrapperGrid">
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          className="datagrid"
          pagination
        />
      </Paper>
    </Box>
  );
}
