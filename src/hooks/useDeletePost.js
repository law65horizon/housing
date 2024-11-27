import React, { useState } from 'react'
import useShowToast from './useShowToast'
import { deleteDoc, doc } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'
import usePostStore from '../store/postStore'

const useDeletePost = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const showToast = useShowToast()
    const {posts, setPosts} = usePostStore()
    const deletePostFromStore = usePostStore((state) => state.deletePostFromStore)
    // console.log(posts)

    const deletePost = async(id) =>{
        if(isDeleting) return 
        try {
            await deleteDoc(doc(firestore, "posts", id));
            deletePostFromStore(id)
            showToast('Success', 'Post Deleted Successfully', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
        }finally {
            setIsDeleting(false)
        }
    }
  return (
    {isDeleting, deletePost}
  )
}

export default useDeletePost