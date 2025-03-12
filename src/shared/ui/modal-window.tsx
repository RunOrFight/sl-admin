import {Dialog, DialogContent} from "./dialog";
import { PropsWithChildren, ReactNode, useCallback, useState} from "react";

type ModalWindowProps = PropsWithChildren<{
    renderTrigger: ({ triggerOpen })=>ReactNode
}>

export const ModalWindow = ({renderTrigger}: ModalWindowProps) => {
    const [open, setOpen] = useState(false)

    const triggerOpen = useCallback(()=>{
        setOpen(true)
    },[])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {renderTrigger({triggerOpen })}
            <DialogContent>
            </DialogContent>
        </Dialog>
    )
}