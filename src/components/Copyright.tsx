import type { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "next/link";
import type { FC } from "react";

const Copyright: FC<TypographyProps> = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link color="inherit" href="https://vicloudservices.co/">
      VicloudServices
    </Link>{" "}
    {new Date().getFullYear()} .
  </Typography>
);

export default Copyright;
