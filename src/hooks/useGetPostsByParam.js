import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'
import useSearchStore from '../store/searchStore'

const useGetPostsByParam = (param) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const {posts, setPosts} = usePostStore()
  const {setSearched} = useSearchStore()
  const showToast = useShowToast()

//   console.log(posts)
  // console.log('doing')
  useEffect(() => {
    console.log(posts)
    // console.log(param.searched)
    const getPosts = async() => {
        if(isLoading) return
        setIsLoading(true)
        setPosts([])
        try {
            // let q = param.sale_type === 'any' && param?.searched?.length === 0
            //   ? query(collection(firestore, 'posts'))
            //   : param.sale_type === 'any'
            //     ? query(collection(firestore, 'posts'), where('address', 'array-contains-any', param.searched))
            //     : query(collection(firestore, 'posts'), where('sale_type', '==', param.sale_type), where('address', 'array-contains-any', param.searched))
            
            // let h = param.sale_type === 'any' && param?.searched?.length === 0
            // ? query(collection(firestore, 'posts'), where('type', '==', param.type))
            // : param.sale_type === 'any'
            //   ? query(collection(firestore, 'posts'), where('address', 'array-contains-any', param.searched))
            //   : param?.searched?.length === 0
            //     ? query(collection(firestore, 'posts'), where('sale_type', '==', param.sale_type))    
            //     : query(collection(firestore, 'posts'), where('sale_type', '==', param.sale_type), where('address', 'array-contains-any', param.searched))    

            let q = query(collection(firestore, 'posts'))
            if (param?.searched?.length !== 0) {
                // console.log('searched')
              q = query(q, where('address', 'array-contains-any', param.searched))
            }
            if(param?.sale_type && param?.sale_type !== 'any') {
                // console.log('sale_type')
              q = query(q, where('sale_type', '==', param?.sale_type))
            }
            if(param?.type) {
                // console.log('type')
              q = query(q, where('type', '==', param?.type))
            }
            if(param?.isfeatured) {
              console.log('fec')
              q = query(q, where('isFeatured', '==', true))
            }

            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)

            // getDocs(q).then((querySnapshot) => {
            //   querySnapshot.forEach((doc) => {
            //     posts.push({...doc.data(), id:doc.id})
            //     console.log(doc.id, " => ", doc.data());
            //   });
            // })
            setSearched([])
            setPosts(posts)
        } catch (error) {
            showToast('Error', error.message,'error')
            console.log(error)
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()

  },  [setPosts, showToast, param])
  return {isLoading, posts}
}

export default useGetPostsByParam
