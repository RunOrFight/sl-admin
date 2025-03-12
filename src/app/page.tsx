import {Dialog, DialogContent, DialogTitle,} from "@/components/ui/dialog"


export default function Home() {
    return (
        <Dialog open>
            <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>
                    {"Hello World!"}
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}
