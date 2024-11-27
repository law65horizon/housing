import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { firestore } from '../FireBase/FireBase'
import useShowToast from './useShowToast'

const useSetPreferences = (id) => {
    const [isLoading, setIsLoading] = useState(false)
    const showToast = useShowToast()

    // const queries = [
    //     {saved_searches: [{xd: 'mdo'}]}
    // ]
    // const conditions = queries.map((query) => [])

    const setPreferences = async(queries) => {
        // console.log(queries)
        if(isLoading) return
        setIsLoading(true)
        try {
            const docRef = doc(firestore, 'users', id)
            // const docSnap = await getDoc(docRef)
            // console.log(docRef)
            await updateDoc(docRef, {...queries})
            showToast('Success', 'Update Successfull', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    }

  return { isLoading, setPreferences }
}

export default useSetPreferences