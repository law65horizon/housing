import React, {useState, useEffect} from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'

const useGetFeaturedPosts = () => {
  const [isLoadingFeatured_post, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const {featured_post, setFeatured_post} = usePostStore()
  const showToast = useShowToast()

  useEffect(() => {
    const getPosts = async() => {
        if(isLoadingFeatured_post) return
        setIsLoading(true)
        setFeatured_post([])
        try {
            const q = query(collection(firestore, 'posts'), where('isFeatured', '==', true))
            
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)
            setFeatured_post(posts)
        } catch (error) {
            console.log(error)
            showToast('Error', error.message,'error')
            setFeatured_post([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()
  },  [setFeatured_post, showToast])
  return {isLoadingFeatured_post, featured_post}
}

export default useGetFeaturedPosts