import type { ChangeEventHandler, FC, FormEventHandler } from "react";
import {
  Button,
  CircularProgress,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

interface CreateUserViewProps {
  fullName: string;
  displayName: string;
  isSubmitting: boolean;
  onChangeFullName: ChangeEventHandler<HTMLInputElement>;
  onChangeDisplayName: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler;
}

export const CreateUserView: FC<CreateUserViewProps> = ({
  fullName,
  displayName,
  isSubmitting,
  onChangeFullName,
  onChangeDisplayName,
  onSubmit,
}) => {
  return (
    <Stack mt={11}>
      <Typography variant={"h1"} textAlign={"center"}>
        Welcome! First things first...
      </Typography>
      <Typography variant={"subtitle1"} textAlign={"center"} mt={2}>
        You can always change them later.
      </Typography>
      <Stack component={"form"} mt={6} spacing={2.5} onSubmit={onSubmit}>
        <Stack>
          <InputLabel htmlFor="fullName" className="OutlinedInputLabel">
            Full Name
          </InputLabel>
          <OutlinedInput
            id="fullName"
            placeholder="Steve Jobs"
            required
            value={fullName}
            onChange={onChangeFullName}
          />
        </Stack>
        <Stack>
          <InputLabel htmlFor="displayName" className="OutlinedInputLabel">
            Display Name
          </InputLabel>
          <OutlinedInput
            id="displayName"
            placeholder="Steve"
            required
            value={displayName}
            onChange={onChangeDisplayName}
          />
        </Stack>
        <Button variant={"contained"} type={"submit"} disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : "Continue"}
        </Button>
      </Stack>
    </Stack>
  );
};
