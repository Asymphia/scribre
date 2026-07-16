"use client"

import { ReactNode } from "react"
import Card from "@/components/ui/card"
import { createPortal } from "react-dom"
import IconButton from "@/components/ui/icon-button";
import { XMarkIcon } from "@heroicons/react/24/outline"

interface ModalProps {
    children: ReactNode
    text: string
}

const Modal = ({ children, text }: ModalProps) => {
    return createPortal(
        <div className="fixed inset-0 bg-header-color/20 backdrop-blur-xs z-20 flex items-center justify-center">
            <Card>
                <div className="flex items-center justify-between gap-7">
                    <h2 className="text-2xl">
                        { text }
                    </h2>

                    <IconButton Icon={ XMarkIcon } onClick={ () => {} } />
                </div>

                { children }
            </Card>
        </div>,
        document.body
    )
}

export default Modal