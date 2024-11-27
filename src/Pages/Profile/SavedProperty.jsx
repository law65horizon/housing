import { AspectRatio, Avatar, Box, Button, Center, Container, Divider, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { CiLocationOn, CiStar } from 'react-icons/ci'
import { LiaBedSolid } from 'react-icons/lia'
import { PiBathtubLight } from 'react-icons/pi'
import { IoCarSportOutline } from 'react-icons/io5'
import { RxDimensions } from 'react-icons/rx'
import useAuthStore from '../../store/authStore'
import Item from '../../Components/Property/Property'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../FireBase/FireBase'
import { doc, getDoc } from 'firebase/firestore'
import useShowToast from '../../hooks/useShowToast'

const SavedProperty = () => {
  const [user, loading, error] = useAuthState(auth)
  if(!loading && !user) return (
    <Navigate to={'/auth'} />
  )
  const {isLoading, properties} = useGetSavedProperties()
    // const queries = [
    //   {saved_searches: [{xd: 'mdo'}]},
    //   {saved_sear: [{xd: 'mdo'}]},
    // ]
    function format(q) {
      // queries.map((query) => {
      //   return {query}
      // })
      // for (let obj  q) {
      //   // if (String(obj.id) === searchId) {
      //   //     return true;
      //   // }
      //   return obj
      // }
      queries.forEach((q) => {
        console.log(q)
      })
    }
    console.log(properties)
    // console.log(format(queries))
    // const userdata = useAuthStore(state => state.user)
    // function containsId(array, searchId) {
    //   for (let obj of array) {
    //       if (String(obj.id) === searchId) {
    //           return true;
    //       }
    //   }
    //   return false;
    // }
    // const result = containsId(userdata.saved_properties, saved_properties.id)
    // const [liked, setLiked] = useState(result)
    // const setUser = useAuthStore((state) => state.setUser)
  
    // // console.log(result)
    // const handleSavedProperties = () => {
    //    setLiked(!liked)
    //   if(!liked) {
    //     userdata.saved_properties.push(saved_properties)
		// 	  localStorage.setItem("user-info", JSON.stringify(userdata));
    //   }else {
    //     setUser({...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc.id !== saved_properties.id)})
    //     const newData = {...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc.id !== saved_properties.id)}
		// 	  localStorage.setItem("user-info", JSON.stringify(newData));
    //   }
    // }
    // console.log(saved_properties)
    return (
    <Container maxW={'6xl'} mt={'30px'} pb={'40px'} pt={2}>
        <Heading px={4}>Saved Properties</Heading>
        <Flex pt={4} px={5}>
          <Flex wrap={'wrap'} gap={3} w={{base: 'full', md: '70%'}}>
            {properties 
              ? properties.map((property, index) => (
                <React.Fragment key={index}>
                  <Item property={property} />
                </React.Fragment>
              ))
              : (
                <Text fontSize={20}><b>No Saved Properties</b></Text>
              )
            }
            {isLoading && (
              <Flex w={'full'} minH={'15vh'} alignItems={'center'} justifyContent={'center'}>
                <Spinner />
              </Flex>
            )}
          </Flex>
        </Flex>
    </Container>
  )
}

export default SavedProperty

function useGetSavedProperties() {
  const [isLoading, setIsLoading] = useState(false)
  const [user, loading, error] = useAuthState(auth)
  const [properties, setProperties] = useState([])
  const showToast = useShowToast()
  if(!loading && !user) return (
    <Navigate to={'/auth'} />
  )
  const saved_properties = JSON.parse(localStorage.getItem('user-info'))?.saved_properties
  const keys = [] 
  saved_properties?.map((property) => keys.push(property.split('/')[1]))
  useEffect(() => {
    const getProperties = async() => {
      if(isLoading) return
      setIsLoading(true)
      setProperties([])
      try {
        const dods = keys.map(key => doc(firestore, 'posts', key))
        console.log(dods)
        const doc_ref = await Promise.all(dods.map(getDoc))
        const properties = []
        doc_ref.forEach(async(docSnapshot) => {
          if (docSnapshot.exists()) {
            properties.push({...docSnapshot.data(), id:docSnapshot.id})
            setProperties(properties)
          } 
        })
      } catch (error) {
        showToast('Error', error.message, 'error')
      }
      finally {
        setIsLoading(false)
      }
    }
    getProperties()
  }, [])
  return {isLoading, properties}
}