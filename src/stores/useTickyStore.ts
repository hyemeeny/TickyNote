import { create } from 'zustand';
import { Ticky } from '@/types/ticky';

type TickyState = {
  tickies: Ticky[];
  addTicky: (ticky: Ticky) => void;
  removeTicky: (id: string) => void;
};

export const useTickyStore = create<TickyState>((set) => ({
  tickies: [],
  addTicky: (ticky) => {
    set((state) => ({ tickies: [...state.tickies, ticky] }));
  },
  removeTicky: (id) => {
    set((state) => ({ tickies: state.tickies.filter((t) => t.id !== id) }));
  },
}));
