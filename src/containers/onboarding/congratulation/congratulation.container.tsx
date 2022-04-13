import { FC, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShallowPickSelector } from "store/useSelector";
import { CongratulationView } from "./congratulation.view";

interface CongratulationContainerProps {}

export const CongratulationContainer: FC<CongratulationContainerProps> = () => {
  const navigate = useNavigate();

  const [isLaunching, setIsLaunching] = useState<boolean>(false);

  const { currentUser } = useShallowPickSelector("user", ["currentUser"]);

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      navigate("/");
    }, 3000);
  };

  return (
    <CongratulationView
      {...{
        onSubmit,
        isLaunching,
        userName: currentUser ? currentUser.fullName.split(" ")[0] : "User",
      }}
    />
  );
};
