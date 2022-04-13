import { Routes, Route } from "react-router-dom";
import { SplashScreen } from "./splash";
import { OnboardingScreen } from "./onboarding";
import { CreateUserScreen } from "./onboarding/create-user";
import { CreateWorkspaceScreen } from "./onboarding/create-workspace";
import { SetPlanScreen } from "./onboarding/set-plan";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<SplashScreen />} />
      <Route path={"/onboarding"} element={<OnboardingScreen />}>
        <Route path={"create-user"} element={<CreateUserScreen />} />
        <Route path={"create-workspace"} element={<CreateWorkspaceScreen />} />
        <Route path={"set-plan"} element={<SetPlanScreen />} />
      </Route>
    </Routes>
  );
};
