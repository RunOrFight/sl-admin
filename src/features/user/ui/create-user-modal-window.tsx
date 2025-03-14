import { ModalWindow } from "@/shared/ui/modal-window";
import { Button } from "../../../shared/ui/button";

const creteUserModalTrigger = ({ open }) => {
  return <Button onClick={open}>{"Create User"}</Button>;
};

export const CreateUserModalWindow = () => {
  return <ModalWindow renderTrigger={creteUserModalTrigger} />;
};
