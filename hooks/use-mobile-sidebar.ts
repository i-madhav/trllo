import { create } from "zustand";

type MobileSidebarStore = {
    isOpen: Boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
    isOpen: false,
    onOpen:() => set({isOpen:true}),
    onClose:() => set({isOpen:false})
}));