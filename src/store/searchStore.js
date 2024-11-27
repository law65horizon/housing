import { create } from "zustand";

const useSearchStore = create((set) => ({
    searches: [],
    setSearches: (searches) => set({searches}),
    searched: null,
    setSearched: (searched) => set({searched}),
}))

export default useSearchStore 