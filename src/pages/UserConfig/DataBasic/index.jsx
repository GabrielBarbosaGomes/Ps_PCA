import { Stack, Box, FormControlLabel, Switch, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from 'react-router-dom';
import { useCustomNavigate } from "../../../Ultil/globals";
import "./styles.scss";
import "../../../styles/config.scss";

export function DataBasic(user) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
      };
  
  return (
    <Box className="wrapperDatabasic">
      <Stack className="codUser">
        Código
        <span>{user.user.id}</span>
      </Stack>
      <Stack className="wrapperDataEdit">
        <TextField
          required
          id="outlined-required"
          label="Login"
          defaultValue={user.user.Login}
          className="textfield-custom"
        />
        <TextField
          required
          id="outlined-required"
          label="Nome"
          defaultValue={user.user.Nome}
          className="textfield-custom"
        />
        <TextField
          required
          id="outlined-required"
          label="Autenticação"
          defaultValue={user.user.Autenticacao}
          className="textfield-custom"
        />
        <TextField
          required
          id="outlined-required"
          label="Senha"
          className="textfield-custom"
        />
        <TextField
          required
          id="outlined-required"
          label="Nível de Acesso"
          defaultValue={user.user.NivelAcesso}
          className="textfield-custom"
        />
      </Stack>
      <Stack className="switchAction">
        <FormControlLabel
          control={
            <Switch defaultChecked aria-label="Ativo" className="IOSSwitch" />
          }
          label="Ativo"
          className="label"
        />
      </Stack>
      <Stack className="buttonCancelContainer">
        <Button
          variant="contained"
          className="custom-button"
          color="error"
          onClick={goBack}
        >
          Cancelar
        </Button>
      </Stack>
      <Box className="wrapperInfo">
        <Stack className="info">
          <AddCircleOutlineIcon />
          <Stack>Z07821 em 12/07/2024 18:10:31</Stack>
        </Stack>
        <Stack className="info">
          <HistoryIcon />
          <Stack>Admin em 01/08/2024 10:42:53</Stack>
        </Stack>
      </Box>
    </Box>
  );
}
