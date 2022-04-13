import type { FC, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useShallowPickSelector } from "store/useSelector";
import { CongratulationView } from "./congratulation.view";

interface CongratulationContainerProps {}

export const CongratulationContainer: FC<CongratulationContainerProps> = () => {
  const navigate = useNavigate();

  const { currentUser } = useShallowPickSelector("user", ["currentUser"]);

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <CongratulationView
      {...{
        onSubmit,
        userName: currentUser ? currentUser.fullName.split(" ")[0] : "User",
      }}
    />
  );
};
