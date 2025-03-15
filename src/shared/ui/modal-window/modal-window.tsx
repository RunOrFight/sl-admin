import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui";
import { ReactNode, useCallback, useState } from "react";
import { ModalWindowRenderProps } from "./modal-window.type";

type ModalWindowProps = {
  children: (props: ModalWindowRenderProps) => ReactNode;
  renderTrigger: (props: ModalWindowRenderProps) => ReactNode;
  //`DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users.
  title: ReactNode;
};

export const ModalWindow = ({
  renderTrigger,
  title,
  children,
}: ModalWindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeWindow = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const props = { openWindow, closeWindow };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {renderTrigger(props)}
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children(props)}
      </DialogContent>
    </Dialog>
  );
};
