import type { FC } from "react";
import { CreateUserView } from "./create-user.view";

interface CreateUserContainerProps {}

export const CreateUserContainer: FC<
  CreateUserContainerProps
> = () => {
  return <CreateUserView />;
};
