import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    createPost: (post) => set(state => ({posts: [post, ...state.posts]})),
    deletePostFromStore: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
    updatePost: (updatedPost, id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, ...updatedPost } : post
          ),
        })),    
    setPosts: (posts) => set({posts}),

    post: [],
    setPost: (post) => set({post}),
    featured_post: [],
    setFeatured_post: (featured_post) => set({featured_post})
}))

export default usePostStore 