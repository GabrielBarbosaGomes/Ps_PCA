import { useParams } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { UserTitle } from "../../components/UserTitle/Index";
import { DataBasic } from "./DataBasic/index";
import { AccessLogs } from "./AccessLogs/index";
import { Profiles } from "./Profiles/index";
import { Breadcrumbs } from "../../components/Breacrumbs/Index";
import "./styles.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import data from "../../assets/mock/users.json";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HistoryIcon from "@mui/icons-material/History";

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box className="wrapperPanel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export function UserConfig() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  const current = data.filter((d) => d.id == id)[0];

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  const tabs = [
    { label: "Dados Básicos", content: <DataBasic user={current} /> },
    { label: "Perfis", content: <Profiles /> },
    { label: "Logs de Acesso", content: <AccessLogs /> },
  ];

  return (
    <Box className="wrapperUserConfig">
      <UserTitle />
      <Stack className="wrapperContentConfig">
        <Breadcrumbs page="Manutenção" />

        <Box>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant="fullWidth"
              className="titleTab"
              centered
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  id={`tab-${index}`}
                  aria-controls={`tabpanel-${index}`}
                />
              ))}
            </Tabs>
          </AppBar>
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              {tab.content}
            </TabPanel>
          ))}
        </Box>
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
        {value === 0 && (
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
        )}
      </Stack>
    </Box>
  );
}
