import type { ChangeEventHandler, FC, FormEventHandler } from "react";
import {
  Button,
  CircularProgress,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Stepper } from "components/molecules/Stepper";

interface CreateWorkspaceViewProps {
  name: string;
  url: string;
  isSubmitting: boolean;
  onChangeName: ChangeEventHandler<HTMLInputElement>;
  onChangeUrl: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler;
}

export const CreateWorkspaceView: FC<CreateWorkspaceViewProps> = ({
  name: name,
  url: url,
  isSubmitting,
  onChangeName,
  onChangeUrl,
  onSubmit,
}) => {
  return (
    <Stack>
      <Stepper steps={4} activeStep={1} sx={{ alignSelf: "center", mb: 11 }} />
      <Typography variant={"h1"} textAlign={"center"}>
        Let's set up a home for all your work
      </Typography>
      <Typography variant={"subtitle1"} textAlign={"center"} mt={2}>
        You can always create another workspace later.
      </Typography>
      <Stack
        component={"form"}
        mt={6}
        spacing={2.5}
        maxWidth={"420px"}
        alignSelf={"center"}
        onSubmit={onSubmit}
      >
        <Stack>
          <InputLabel htmlFor="workspace-name" className="OutlinedInputLabel">
            Workspace Name
          </InputLabel>
          <OutlinedInput
            id="workspace-name"
            placeholder="Eden"
            required
            value={name}
            onChange={onChangeName}
          />
        </Stack>
        <Stack>
          <InputLabel htmlFor="workspace-url" className="OutlinedInputLabel">
            Workspace URL{" "}
            <Typography
              fontWeight={500}
              fontSize={"0.875rem"}
              display={"inline"}
              sx={{ opacity: 0.3 }}
            >
              (optional)
            </Typography>
          </InputLabel>
          <Stack direction={"row"}>
            <OutlinedInput
              value={"www.eden.com/"}
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: "#5C69aa0a",
                "&.Mui-disabled input": {
                  color: "#5C69aaaa",
                  "-webkitTextFillColor": "unset",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRightWidth: 0,
                },
                flex: 1,
              }}
              disabled
            />
            <OutlinedInput
              id="workspace-url"
              placeholder="Steve"
              value={url}
              onChange={onChangeUrl}
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                flex: 2,
              }}
            />
          </Stack>
        </Stack>
        <Button variant={"contained"} type={"submit"} disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : "Continue"}
        </Button>
      </Stack>
    </Stack>
  );
};
