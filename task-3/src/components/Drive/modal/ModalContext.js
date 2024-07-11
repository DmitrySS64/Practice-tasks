import { createContext, useContext, useState } from "react";


const ModalContext = createContext();

export const useModal = () => {return useContext(ModalContext)};

export const ModalProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(null);
    const [onSubmit, setOnSubmit] = useState(null);
  
    const openModal = (content) => {
      setContent(content);
      setOpen(true);
    };
  
    const closeModal = () => {
      setOpen(false);
      setContent(null);
      setOnSubmit(null);
    };
  
    return (
      <ModalContext.Provider value={{ open, content, openModal, closeModal, onSubmit, setOnSubmit }}>
        {children}
      </ModalContext.Provider>
    )
} 