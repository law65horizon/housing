import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'

const useGetPosts = (uid) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
  console.log(uid)

  useEffect(() => {
    const getPosts = async() => {
        if(isLoading) return
        setIsLoading(true)
        setPosts([])
        try {
            const q = uid 
               ? uid === 'any' 
                   ? query(collection(firestore, 'posts')) 
                   : query(collection(firestore, 'posts'), where('sale_type', '==', uid)) 
               : query(collection(firestore, 'posts'))
            
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)
            setPosts(posts)
        } catch (error) {
            console.log(error)
            showToast('Error', error.message,'error')
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()
  },  [setPosts, showToast])
  return {isLoading, posts, setIsLoading}
}

export default useGetPosts