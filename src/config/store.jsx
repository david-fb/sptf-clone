import { create } from 'zustand';

const useStore = create((set) => ({
  playlist: [], 
  setPlaylist: (newPlaylist) => set({ playlist: newPlaylist }), 
}));

export default useStore;