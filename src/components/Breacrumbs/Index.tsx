import { Box, Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";
import "./styles.scss";
import React from "react";

export function Breadcrumbs({link,page}) {
  return (
    <Box>
      <MuiBreadcrumbs className="wrapperBreadcrumber">
        <Link underline="hover" href={link}>{page}</Link>
      </MuiBreadcrumbs>
    </Box>
  );
}
