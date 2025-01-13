import { Stack, Box, FormControlLabel, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./styles.scss";
import "../../../styles/config.scss";

export function DataBasic(user) {
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
    </Box>
  );
}
