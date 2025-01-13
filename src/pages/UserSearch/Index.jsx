import "./styles.scss";
import { UserTitle } from "../../components/UserTitle/Index";
import { Breadcrumbs } from "../../components/Breacrumbs/Index";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import data from '../../assets/mock/users.json';

const paginationModel = { page: 0, pageSize: 5 };

export function UserSearch() {
  const navigate = useNavigate();

  const columns = [
    {
      field: "edit",
      headerName: "",
      flex: 1,
      align: "center",
      sortable: false,
      renderCell: (params) => (
        <EditIcon
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/UserConfig/${params.row.id}`)}
        />
      ), 
    },
    {
      field: "id",
      headerName: "Código",
      flex: 1,
      sortable: false,
      align: "left",
    },
    {
      field: "Login",
      headerName: "login",
      flex: 1,
      sortable: false,
      align: "left",
    },
    {
      field: "Nome",
      headerName: "Nome",
      flex: 1,
      sortable: false,
      align: "left",
    },
    {
      field: "NivelAcesso",
      headerName: "Nível acesso",
      sortable: false,
      flex: 1,
      align: "left",
    },
    {
      field: "Ativo",
      headerName: "Ativo",
      flex: 1,
      sortable: false,
      align: "left",
    },
    {
      field: "AtualizadoPor",
      headerName: "Atualizado por",
      flex: 1,
      sortable: false,
      align: "left",
    },
    {
      field: "AtualizadoEm",
      headerName: "Atualizado em",
      flex: 1,
      sortable: false,
      align: "left",
    },
  ];

  return (
    <Box className="wrapperUserSearch">
      <UserTitle />
      <Stack className="wrapperContentSearch">
        <Breadcrumbs page="Consulta" />
        <Stack className="wrapperSearch">
          <TextField label="Código" focused className="textfield-custom" />
          <TextField label="Login" focused className="textfield-custom" />
          <TextField label="Nome" focused className="textfield-custom" />
          <SearchIcon />
        </Stack>
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
      </Stack>
    </Box>
  );
}
