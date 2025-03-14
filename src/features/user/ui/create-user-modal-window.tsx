import { Button, ModalWindow, type ModalWindowRenderProps } from "@/shared/ui";
import { CreateUserForm } from "@/features/user";
import { TEXT } from "@/shared/model";

const renderCreteUserModalTrigger = ({
  openWindow,
}: ModalWindowRenderProps) => (
  <Button onClick={openWindow} className={"hover:cursor-pointer"}>
    {TEXT.createUser}
  </Button>
);

const renderCreteUserModalContent = ({
  closeWindow,
}: ModalWindowRenderProps) => <CreateUserForm onCreateSuccess={closeWindow} />;

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow
      renderTrigger={renderCreteUserModalTrigger}
      title={TEXT.createUser}
    >
      {renderCreteUserModalContent}
    </ModalWindow>
  );
};
