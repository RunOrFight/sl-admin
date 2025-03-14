import {
  Button,
  ModalWindow,
  type ModalWindowRenderTriggerProps,
} from "@/shared/ui";
import { CreateUserForm } from "./create-user-form";

const creteUserModalTrigger = ({
  openWindow,
}: ModalWindowRenderTriggerProps) => {
  return (
    <Button onClick={openWindow} className={"hover:cursor-pointer"}>
      {"Create User"}
    </Button>
  );
};

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow renderTrigger={creteUserModalTrigger} title={"Create User"}>
      ;
      <CreateUserForm />
    </ModalWindow>
  );
};
