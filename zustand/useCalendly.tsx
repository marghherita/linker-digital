import { create } from "zustand";

type Calendly = {
  isOpen: boolean | null;
  setOpen: () => void;
  setClose: () => void;
};

export const useCalendly = create<Calendly>()((set) => ({
  isOpen: null,
  setOpen: () => set(() => ({ isOpen: true })),
  setClose: () => set(() => ({ isOpen: null })),
}));
