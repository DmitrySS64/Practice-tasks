import { Dialog, DialogTitle, 
    DialogContent, DialogContentText, 
    DialogActions, Button } from "@mui/material"
import { useModal } from "./ModalContext";

const Modal = ({}) => {
    const {open, closeModal, content, onSubmit} = useModal();

    return(
        <Dialog open={open} onClose={closeModal}>
        {content && (
        <>
            <DialogTitle>{content.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{content.text}</DialogContentText>
                {content.children}
            </DialogContent>
            {/*
            <DialogActions>
                <Button onClick={closeModal}>Cancel</Button>
                {onSubmit && (
                    <Button onClick={onSubmit}>{content.submitText}</Button>
                )}
            </DialogActions>*/}
        </>
        )}
        </Dialog>
    )
}
export default Modal;