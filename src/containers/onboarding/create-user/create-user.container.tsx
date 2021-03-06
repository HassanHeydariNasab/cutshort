import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "store/onboarding/onboarding.api";
import { userActions } from "store/user/user.slice";
import { CreateUserView } from "./create-user.view";

interface CreateUserContainerProps {}

export const CreateUserContainer: FC<CreateUserContainerProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  const [createUser, { isLoading: isSubmitting }] = useCreateUserMutation();

  const onChangeFullName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFullName(event.target.value);
  };

  const onChangeDisplayName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDisplayName(event.target.value);
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    createUser({ body: { fullName, displayName } })
      .unwrap()
      .then((user) => {
        dispatch(userActions.setCurrentUser(user));
        navigate("/onboarding/create-workspace");
      });
  };

  return (
    <CreateUserView
      {...{
        fullName,
        displayName,
        isSubmitting,
        onChangeFullName,
        onChangeDisplayName,
        onSubmit,
      }}
    />
  );
};
