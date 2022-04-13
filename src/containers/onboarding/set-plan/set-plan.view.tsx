import type { FC, FormEventHandler, SVGProps, MouseEventHandler } from "react";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { Stepper } from "components/molecules/Stepper";
import { theme } from "styles/theme";
import { ReactComponent as PersonSVG } from "assets/images/person.svg";
import { ReactComponent as PersonsSVG } from "assets/images/persons.svg";

interface SetPlanViewProps {
  plan: "personal" | "team";
  isSubmitting: boolean;
  onChangePlan: (plan: "personal" | "team") => void;
  onSubmit: FormEventHandler;
}

export const SetPlanView: FC<SetPlanViewProps> = ({
  plan,
  isSubmitting,
  onChangePlan,
  onSubmit,
}) => {
  return (
    <Stack>
      <Stepper steps={4} activeStep={2} sx={{ alignSelf: "center", mb: 11 }} />
      <Typography variant={"h1"} textAlign={"center"}>
        How are you planning to use Eden?
      </Typography>
      <Typography variant={"subtitle1"} textAlign={"center"} mt={2}>
        We'll streamline your setup experience accordingly.
      </Typography>
      <Stack
        component={"form"}
        mt={6}
        maxWidth={"420px"}
        alignSelf={"center"}
        spacing={2.5}
        onSubmit={onSubmit}
      >
        <Stack direction="row" spacing={4}>
          <PlanItem
            title="For myself"
            description="Write better. Think more clearly. Stay organized."
            SvgIcon={PersonSVG}
            isSelected={plan === "personal"}
            onClick={() => onChangePlan("personal")}
          />
          <PlanItem
            title="With my team"
            description={"Wikis, docs, tasks & projects, all in one place."}
            SvgIcon={PersonsSVG}
            isSelected={plan === "team"}
            onClick={() => onChangePlan("team")}
          />
        </Stack>
        <Button variant={"contained"} type={"submit"} disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : "Continue"}
        </Button>
      </Stack>
    </Stack>
  );
};

interface PlanItemProps {
  title: string;
  description: string;
  SvgIcon: FC<SVGProps<SVGSVGElement>>;
  isSelected: boolean;
  onClick: MouseEventHandler;
}

const PlanItem: FC<PlanItemProps> = ({
  title,
  description,
  SvgIcon,
  isSelected,
  onClick,
}) => (
  <Stack
    border={`1px solid ${
      isSelected ? theme.palette.primary.main : theme.palette.secondary.main
    }`}
    borderRadius={theme.shape.borderRadius + "px"}
    p={3}
    flex={1}
    onClick={onClick}
  >
    <SvgIcon
      height={"24px"}
      width={"24px"}
      fill={
        isSelected ? theme.palette.primary.main : theme.palette.text.primary
      }
    />
    <Typography fontWeight={600} mt={2}>
      {title}
    </Typography>
    <Typography variant={"subtitle2"} mt={1}>
      {description}
    </Typography>
  </Stack>
);
