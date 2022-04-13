import { FC, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdatePlanMutation } from "store/onboarding/onboarding.api";
import { SetPlanView } from "./set-plan.view";

interface SetPlanContainerProps {}

export type Plan = "personal" | "team";

export const SetPlanContainer: FC<SetPlanContainerProps> = () => {
  const navigate = useNavigate();

  const [plan, setPlan] = useState<Plan>("personal");

  const onChangePlan = (plan: Plan) => {
    setPlan(plan);
  };

  const [updatePlan, { isLoading: isSubmitting }] = useUpdatePlanMutation();

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    updatePlan({ body: { plan } }).then(() => {
      navigate("/onboarding/congratulation");
    });
  };

  return <SetPlanView {...{ plan, isSubmitting, onChangePlan, onSubmit }} />;
};
