import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateWorkspaceMutation } from "store/onboarding/onboarding.api";
import { CreateWorkspaceView } from "./create-workspace.view";

interface CreateWorkspaceContainerProps {}

export const CreateWorkspaceContainer: FC<
  CreateWorkspaceContainerProps
> = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const [createWorkspace, { isLoading: isSubmitting }] =
    useCreateWorkspaceMutation();

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  const onChangeUrl: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUrl(event.target.value);
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    createWorkspace({ body: { name, url } }).then(() => {
      navigate("/onboarding/set-plan");
    });
  };

  return (
    <CreateWorkspaceView
      {...{
        name,
        url,
        isSubmitting,
        onChangeName,
        onChangeUrl,
        onSubmit,
      }}
    />
  );
};
