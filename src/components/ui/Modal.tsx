import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import { useState } from 'react'
import {ReactNode} from "react";

interface IProps {
  isOpen : boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({isOpen, closeModal, title , children}: IProps) => {

  return (
    <>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 "
            >

              {title && (
                <DialogTitle as="h3" className="text-base font-medium text-black">
                  {title}
                </DialogTitle>
              )}
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Modal