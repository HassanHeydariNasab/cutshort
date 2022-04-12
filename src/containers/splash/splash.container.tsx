import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SplashView } from "./splash.view";

interface SplashContainerProps {}

export const SplashContainer: FC<SplashContainerProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // TODO check if user doesn't need onboarding
    navigate("/onboarding/create-user");
  }, []);

  return <SplashView />;
};
