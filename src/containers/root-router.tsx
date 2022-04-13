import { Routes, Route } from "react-router-dom";
import { OnboardingScreen } from "./onboarding";
import { CreateUserScreen } from "./onboarding/create-user";
import { CreateWorkspaceScreen } from "./onboarding/create-workspace";
import { SplashScreen } from "./splash";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<SplashScreen />} />
      <Route path={"/onboarding"} element={<OnboardingScreen />}>
        <Route path={"create-user"} element={<CreateUserScreen />} />
        <Route path={"create-workspace"} element={<CreateWorkspaceScreen />} />
      </Route>
    </Routes>
  );
};
