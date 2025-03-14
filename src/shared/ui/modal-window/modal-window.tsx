import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { PropsWithChildren, ReactNode, useCallback, useState } from "react";
import { ModalWindowRenderTriggerProps } from "./modal-window.type";

type ModalWindowProps = PropsWithChildren<{
  renderTrigger: ({ openWindow }: ModalWindowRenderTriggerProps) => ReactNode;
  //`DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users.
  title: ReactNode;
}>;

export const ModalWindow = ({
  renderTrigger,
  title,
  children,
}: ModalWindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {renderTrigger({ openWindow })}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
