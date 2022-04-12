import { FC, useState } from "react";
import { OnboardingView } from "./onboarding.view";

interface OnboardingContainerProps {}

export const OnboardingContainer: FC<OnboardingContainerProps> = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return <OnboardingView {...{ activeStep }} />;
};
