import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast'
import useSearchStore from '../store/searchStore'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'

const useSearchParam = () => {
    const [isLoading, setIsLoading] = useState(false)
    const showToast = useShowToast()
    const {searches, setSearches} = useSearchStore()

    // useEffect(() => {
        const searchParam = async(params) => {
            const queries = params.search.split(' ').map((p) => (
                [
                    {
                        field: 'state',
                        value: p
                    },
                    {
                        field: 'postcode',
                        value: p
                    },
                    {
                        field: 'suburb',
                        value: p
                    }
                ]
            ))
            try {
                const q = query(collection(firestore, 'posts'), where('address', 'array-contains-any', params.search.toUpperCase().split(' ')), limit(10))
                console.log('diod')
                const querySnapShot = await getDocs(q)
                const searches = []
                querySnapShot.forEach((doc) => {
                    searches.push(doc.data())
                })
                setSearches(searches)
                // console.log(searches)
            } catch (error) {
                // console.log(error.message)
                showToast('Error', error.message, 'error')
            }
            // console.log(params.search.split(' '))
        }
    // })
  return {isLoading, searchParam, searches}
}

export default useSearchParam