import "./styles.scss";
import { UserTitle } from "../../components/UserTitle/Index";
import { Breadcrumbs } from "../../components/Breacrumbs/Index";
//import { DataGrid } from "../../components/DataGrid/Index";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const ptBRLocale = {
  pagination: {
    rowsPerPage: "Linhas por página", // Tradução de "Rows per page"
    of: "de",
  },
};

const columns = [
  {
    field: "edit",
    headerName: "", // Sem título para a coluna
    flex: 1,
    align: "center",
    sortable: false,
    renderCell: () => <EditIcon />, // Ícone de edição
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

const rows = [
  {
    id: 1,
    Login: "172y7",
    Nome: "Jon",
    NivelAcesso: "Global",
    Ativo: "sim",
    AtualizadoPor: "Admin",
    AtualizadoEm: "12/12/12",
  },
  {
    id: 2,
    Login: "172y7344",
    Nome: "Jon",
    NivelAcesso: "Global",
    Ativo: "sim",
    AtualizadoPor: "Admin",
    AtualizadoEm: "12/12/12",
  },
  {
    id: 3,
    Login: "172y73425445",
    Nome: "Jon",
    NivelAcesso: "Global",
    Ativo: "não",
    AtualizadoPor: "Admin",
    AtualizadoEm: "12/12/12",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export function UserSearch() {
  const [selectionModel, setSelectionModel] = useState([]);
  const navigate = useNavigate();

  const handleSelectionChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
    console.log("selectionModel", newSelectionModel);
    const selectedRow = rows.find((row) => row.id === newSelectionModel[0]);
    navigate(`/detalhes/${selectedRow.id}`);
  };

  return (
    <Box className="wrapperUserSearch">
      <UserTitle />
      <Stack className="wrapperContentSearch">
        <Breadcrumbs link="/usuarios" page="Consulta" />
        <Stack className="wrapperSearch">
          <TextField label="Código" focused className="textfield-custom" />
          <TextField label="Login" focused className="textfield-custom" />
          <TextField label="Nome" focused className="textfield-custom" />
          <SearchIcon />
        </Stack>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            //sx={{ border: 0 }}
            className="datagrid"
            pagination
            localeText={ptBRLocale}
            selectionModel={selectionModel}
            onSelectionModelChange={handleSelectionChange}
          />
        </Paper>
      </Stack>
    </Box>
  );
}
