import { useState } from "react";
import { Box, Menu, Typography, Button, Divider, Grid } from "@mui/material";
import Link from "next/link";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import AppLinks from "./AppLinks";
import QuickLinks from "./QuickLinks";

const AppDD = () => {

  return (
    <Box ml={2}>
      <Typography
        variant="h6"
        fontWeight="600"
        color="textPrimary"
        display="flex"
        alignItems="center"
        gap="4px"
      >
        Pemerintah Provinsi Kepulauan Riau
      </Typography>
    </Box>
  );
};

export default AppDD;
