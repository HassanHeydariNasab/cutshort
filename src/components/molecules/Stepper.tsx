import type { FC } from "react";
import { Box, Stack, SxProps } from "@mui/material";
import { theme } from "styles/theme";

interface StepperProps {
  steps: number;
  activeStep: number;
  sx?: SxProps;
}

export const Stepper: FC<StepperProps> = ({ steps, activeStep, sx }) => {
  return (
    <Stack direction={"row"} sx={sx}>
      {new Array(steps).fill(null).map((_, index) => (
        <Step index={index} steps={steps} activeStep={activeStep} key={index} />
      ))}
    </Stack>
  );
};

interface StepProps {
  index: number;
  steps: number;
  activeStep: number;
}

const Step: FC<StepProps> = ({ index, steps, activeStep }) => {
  const isStepPassed = activeStep >= index;
  return (
    <Stack direction={"row"} alignItems={"center"}>
      {index !== 0 && (
        <Box
          height={"1px"}
          width={"32px"}
          bgcolor={isStepPassed ? "primary.main" : "secondary.main"}
        />
      )}
      <Box
        bgcolor={isStepPassed ? "primary.main" : undefined}
        borderRadius={"100%"}
        width={"36px"}
        height={"36px"}
        lineHeight={"40px"}
        textAlign={"center"}
        color={isStepPassed ? "#fff" : "#646F85"}
        border={`solid 1px ${
          isStepPassed
            ? theme.palette.primary.main
            : theme.palette.secondary.main
        }`}
        fontSize={"0.875rem"}
        fontWeight={500}
      >
        {index + 1}
      </Box>
      {index + 1 !== steps && (
        <Box
          height={"1px"}
          width={"32px"}
          bgcolor={isStepPassed ? "primary.main" : "secondary.main"}
        />
      )}
    </Stack>
  );
};
