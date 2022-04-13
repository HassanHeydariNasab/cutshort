import type { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";
import { Stepper } from "components/molecules/Stepper";

interface OnboardingViewProps {
  activeStep: number;
}

export const OnboardingView: FC<OnboardingViewProps> = ({ activeStep }) => {
  return (
    <Stack
      flex={1}
      my={8}
      bgcolor={"#fff"}
      alignItems={"center"}
      sx={{ mx: { xs: 0, sm: "4vw" } }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1} mt={10} mb={8}>
        <LogoSVG height={"32px"} width={"32px"} />
        <Typography fontWeight={700} fontSize={"1.75rem"}>
          Eden
        </Typography>
      </Stack>
      <Stepper steps={4} activeStep={activeStep} />
      <Outlet />
    </Stack>
  );
};
