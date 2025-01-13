import "../../../styles/config.scss";
import "./styles.scss";
import { Stack, Box, FormControlLabel, Switch, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export function Profiles() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
      };
  return (
    <>
      <Stack className="switchAction warapperProfile">
        <FormControlLabel
          control={
            <Switch defaultChecked aria-label="Ativo" className="IOSSwitch" />
          }
          label="Administrador"
          className="label"
        />
        <FormControlLabel
          control={<Switch className="IOSSwitch" />}
          label="Atendimento"
          className="label"
        />
        <FormControlLabel
          control={<Switch className="IOSSwitch" />}
          label="Comercial"
          className="label"
        />
        <FormControlLabel
          control={<Switch className="IOSSwitch" />}
          label="Financeiro"
          className="label"
        />
        <FormControlLabel
          control={<Switch className="IOSSwitch" />}
          label="Suporte"
          className="label"
        />
      </Stack>
      <Stack className="buttonCancelContainer">
        <Button variant="contained" className="custom-button" color="error" onClick={goBack}>
          Cancelar
        </Button>
      </Stack>
    </>
  );
}
