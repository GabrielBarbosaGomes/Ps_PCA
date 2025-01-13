import "../../../styles/config.scss";
import "./styles.scss";
import { Stack, FormControlLabel, Switch } from "@mui/material";

export function Profiles() {
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
    </>
  );
}
