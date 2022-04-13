import type { FC } from "react";
import {
  Button,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

interface CreateUserViewProps {}

export const CreateUserView: FC<CreateUserViewProps> = () => {
  return (
    <Stack mt={11}>
      <Typography variant={"h1"} textAlign={"center"}>
        Welcome! First things first...
      </Typography>
      <Typography variant={"subtitle1"} textAlign={"center"} mt={2}>
        You can always change them later.
      </Typography>
      <Stack component={"form"} mt={6} spacing={2.5}>
        <Stack>
          <InputLabel htmlFor="fullName" className="OutlinedInputLabel">
            Full Name
          </InputLabel>
          <OutlinedInput id="fullName" placeholder="Steve Jobs" />
        </Stack>
        <Stack>
          <InputLabel htmlFor="displayName" className="OutlinedInputLabel">
            Display Name
          </InputLabel>
          <OutlinedInput id="displayName" placeholder="Steve" />
        </Stack>
        <Button variant={"contained"}>Continue</Button>
      </Stack>
    </Stack>
  );
};
