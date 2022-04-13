import type { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";

interface OnboardingViewProps {}

export const OnboardingView: FC<OnboardingViewProps> = () => {
  return (
    <Stack
      flex={1}
      pb={8}
      px={1}
      bgcolor={"#fff"}
      alignItems={"center"}
      sx={{ mx: { xs: 0, sm: "4vw" }, my: { xs: 0, sm: 8 } }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1} mt={10} mb={8}>
        <LogoSVG height={"32px"} width={"32px"} />
        <Typography fontWeight={700} fontSize={"1.75rem"} color={"#080B11"}>
          Eden
        </Typography>
      </Stack>
      <Outlet />
    </Stack>
  );
};
