import { create } from 'zustand';

const useStore = create((set) => ({
  playList: [], 
  setPlayList: (newPlayList) => set({ playList: newPlayList }), // Actualizar el estado
}));

export default useStore;