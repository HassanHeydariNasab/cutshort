import type { FC, FormEventHandler } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Stepper } from "components/molecules/Stepper";
import { ReactComponent as TickSVG } from "assets/images/tick.svg";

interface CongratulationViewProps {
  userName: string;
  onSubmit: FormEventHandler;
}

export const CongratulationView: FC<CongratulationViewProps> = ({
  userName,
  onSubmit,
}) => {
  return (
    <Stack>
      <Stepper steps={4} activeStep={3} sx={{ alignSelf: "center", mb: 11 }} />
      <Stack
        bgcolor={"primary.main"}
        alignSelf={"center"}
        borderRadius={"50%"}
        width={"64px"}
        height={"64px"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={6}
      >
        <TickSVG height={"24px"} width={"24px"} />
      </Stack>
      <Typography variant={"h1"} textAlign={"center"}>
        {`Congratulations, ${userName}!`}
      </Typography>
      <Typography variant={"subtitle1"} textAlign={"center"} mt={2}>
        You have completed onboarding, you can start using the Eden!
      </Typography>
      <Stack component={"form"} mt={4} spacing={2.5} onSubmit={onSubmit}>
        <Button
          variant={"contained"}
          type={"submit"}
          sx={{ width: { xs: "80%", sm: "420px" }, alignSelf: "center" }}
        >
          Launch Eden
        </Button>
      </Stack>
    </Stack>
  );
};
