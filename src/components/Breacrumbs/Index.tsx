import { Box, Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";
import "./styles.scss";
import React from "react";

export function Breadcrumbs({page}) {
  return (
    <Box>
      <MuiBreadcrumbs className="wrapperBreadcrumber">
        <Link underline="hover">{page}</Link>
      </MuiBreadcrumbs>
    </Box>
  );
}
