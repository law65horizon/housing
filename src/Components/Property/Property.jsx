import { Box, Button, Container, Flex, Input, Image, Modal, Text, Textarea, VStack, AspectRatio, Checkbox, Stack, Radio, RadioGroup, ModalContent, ModalBody, ModalOverlay, ModalCloseButton, useDisclosure, ModalHeader } from '@chakra-ui/react'
import { Avatar, Center, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { LiaBedSolid, LiaSwimmingPoolSolid, LiaToiletSolid } from 'react-icons/lia'
import { PiBathtubLight } from 'react-icons/pi'
import { IoCarSportOutline, IoLocationSharp } from 'react-icons/io5'
import { RxDimensions } from 'react-icons/rx'
import { Link as RouterLink } from 'react-router-dom'
// import EditPost from './EditPost'
import { BsTrash3 } from 'react-icons/bs'
// import useDeletePost from '../../../hooks/useDeletePost'
// import EditPost from './EditPost'
// import useDeletePost from '../../hooks/useDeletePost'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { CiLocationOn, CiStar, CiWifiOn } from 'react-icons/ci'
import useAuthStore from '../../store/authStore'
import { MdSafetyDivider } from 'react-icons/md'
import useSetPreferences from '../../hooks/useSetPreferences'
import { auth, firestore } from '../../FireBase/FireBase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiBed } from 'react-icons/bi'
import { GrFan } from 'react-icons/gr'
import { GiSolarPower, GiSpikedFence } from 'react-icons/gi'
import { RiRemoteControlLine } from 'react-icons/ri'
import { doc } from 'firebase/firestore'
import useShowToast from '../../hooks/useShowToast'
// import usePostStore from '../../../store/postStore'

const Item = ({property, id}) => {
    const [user, loading, error] = useAuthState(auth)
    const showToast = useShowToast()
    const userdata = useAuthStore(state => state.user)
    const {isLoading, setPreferences} = useSetPreferences(user ?userdata.uid : null)
    function containsId(array, searchId) {
      let id_ref = `posts/${property?.id}`
      if(array){
         for (let obj of array) {
          if (String(obj) === id_ref) {
              // console.log(obj, id_ref)
              return true;
          }
        }
      }
      return false;
    }
    const fea = property?.indoor_features?.concat(property?.outdoor_features)
    const result = user ? containsId(userdata?.saved_properties, property.id) : ''
    const [liked, setLiked] = useState(user ? result : null)
    const setUser = useAuthStore((state) => state.setUser)
  
    // const handleSavedProperties = () => {
    //   setLiked(!liked)
    //   if(!liked) {
    //     userdata.saved_properties.push(property)
    //     setPreferences({saved_properties: userdata.saved_properties})
		// 	  localStorage.setItem("user-info", JSON.stringify(userdata));
    //   }else {
    //     setUser({...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc.id !== property.id)})
    //     const newData = {...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc.id !== property.id)}
		// 	  localStorage.setItem("user-info", JSON.stringify(newData));
    //     setPreferences({saved_properties: newData.saved_properties})
    //   }
    // }
    // console.log(liked, property?.id)

    const handleSavedProperties = async() => {
      setLiked(!liked)
      if(!liked) {
        const userRef = doc(firestore, 'posts', property?.id)
        userdata.saved_properties.unshift(userRef._key.path.segments.join('/'))
        console.log(userdata)
        setPreferences({saved_properties: userdata.saved_properties})
			  localStorage.setItem("user-info", JSON.stringify(userdata));
      }else {
        const userRef = doc(firestore, 'posts', property?.id)
        setUser({...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc !== userRef._key.path.segments.join('/'))})
        const newData = {...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc !== userRef._key.path.segments.join('/'))}
        console.log(newData)
			  localStorage.setItem("user-info", JSON.stringify(newData));
        setPreferences({saved_properties: newData.saved_properties})
      }
    }

    const seticon_feature_pair = (feature) => {
      let icon
      if(feature == 'air conditioning') icon = <GrFan size={24} />
      if(feature == 'swimming pool') icon = <LiaSwimmingPoolSolid size={24} />
      if(feature == 'garage' || feature.includes('parking')) icon = <Image src='/garage.png' />
      if(feature == 'internet') icon = <CiWifiOn size={24} />
      if(feature.includes('fence')) icon = <GiSpikedFence size={24} />
      if(feature.includes('solar')) icon = <GiSolarPower size={24} />
      if(feature.includes('toilet')) icon = <LiaToiletSolid size={24} />
      if(feature.includes('remote')) icon = <RiRemoteControlLine size={24} />
      if(feature.includes('size') || feature.includes('dimension')) icon = <RxDimensions size={24} />
      if(feature.includes('water') || feature.includes('heater')) icon = <Image src='/water-heater.png' /> 
      if(feature.includes('shed')) icon = <Image src='/shop.png' />
      if(feature.includes('balcony')) icon = <Image src='/balcony.png' />
      if(feature.includes('wardrobe')) icon = <Image src='/wardrobe.png' />
      if(feature.includes('alarm')) icon = <Image src='/bell-alarm.png' />
      if(feature.includes('water') && !feature.includes('heater')) icon = <Image src='/water-tank.png' />
      if(feature.includes('ensuite') || feature.includes('bath')) icon = <Image src='/shower.png' />
      return (<>
        <Box display={{base:'none', sm: 'flex'}} color={'white'} gap={2} alignItems={'center'}>
          {icon}
          <Text> {feature[Object.keys(feature)]} </Text>
          <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
            <Divider orientation='vertical' bg={'gray'}/>
          </Center>
        </Box>
        <Box display={{base: 'flex', sm: 'none'}} justifyContent={'center'} gap={2} alignItems={'center'}>
          {icon}
          <Text> {feature[Object.keys(feature)]} </Text>
        </Box>
      </>
      )
    }

    const set_custom_feature_pair = (feature) => {
      let icon
      if(Object.keys(feature)[0] == 'air conditioning') icon = <GrFan size={24} />
      if(Object.keys(feature)[0] == 'swimming pool') icon = <LiaSwimmingPoolSolid size={24} />
      if(Object.keys(feature)[0] == 'garage' || Object.keys(feature)[0].includes('parking')) icon = <Image src='/garage.png' />
      if(Object.keys(feature)[0] == 'internet') icon = <CiWifiOn size={24} />
      if(Object.keys(feature)[0].includes('bath')) icon = <Image src='/shower.png' />
      if(Object.keys(feature)[0].includes('fence')) icon = <GiSpikedFence size={24} />
      if(Object.keys(feature)[0].includes('solar')) icon = <GiSolarPower size={24} />
      if(Object.keys(feature)[0].includes('toilet')) icon = <LiaToiletSolid size={24} />
      if(Object.keys(feature)[0].includes('remote')) icon = <RiRemoteControlLine size={24} />
      if(Object.keys(feature)[0].includes('size') || Object.keys(feature)[0].includes('dimension')) icon = <RxDimensions size={24} />
      if(Object.keys(feature)[0].includes('bed')) icon = <BiBed size={24} />
      if(Object.keys(feature)[0].includes('water') || Object.keys(feature)[0].includes('heater')) icon = <Image src='/water-heater.png' /> 
      if(Object.keys(feature)[0].includes('shed')) icon = <Image src='/shop.png' />
      if(Object.keys(feature)[0].includes('balcony')) icon = <Image src='/balcony.png' />
      if(Object.keys(feature)[0].includes('wardrobe')) icon = <Image src='/wardrobe.png' />
      if(Object.keys(feature)[0].includes('alarm')) icon = <Image src='/bell-alarm.png' />
      if(Object.keys(feature)[0].includes('water') && !Object.keys(feature)[0].includes('heater')) icon = <Image src='/water-tank.png' />
      if(Object.keys(feature)[0].includes('ensuite') || [Object.keys(feature)].includes('bath')) icon = <Image src='/shower.png' />
      // console.log(Object.keys(feature)[0]) clamp
      return (<>
        <Box display={{base:'none', sm: 'flex'}} color={'white'} gap={2} alignItems={'center'}>
          {icon}
          <Text> {feature[Object.keys(feature)]} </Text>
          <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
            <Divider orientation='vertical' bg={'gray'}/>
          </Center>
        </Box>
        <Box display={{base: 'flex', sm: 'none'}} justifyContent={'center'} gap={2} alignItems={'center'}>
          {icon}
          <Text> {feature[Object.keys(feature)]} </Text>
        </Box>
      </>)
  }

  // return (
  //   <Box
  //     boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
  //     borderRadius={'10px'} key={id}
  //     w={{base: 'full', md: '80%'}}
  //   >
  //                 <Box bg={'black'} borderTopRadius={'10px'}>
  //                   <Flex px={5} justifyContent={'space-between'} alignItems={'center'}> 
  //                     <Text px={5} fontSize={20} color={'white'}> {property?.agent} </Text>
  //                     <Avatar name={property?.agent} transform={'translateY(10px)'} zIndex={3}/>
  //                   </Flex>
  //                 </Box>
  //                 {/* <AspectRatio maxW={'full'} ratio={6/4} as={RouterLink} to={`/property/${property.property_name_desc}`}> */}
  //                 <AspectRatio maxW={'full'} ratio={6/4} as={RouterLink} to={`/property/${property.id}`}>
  //                   <Image 
  //                     src={property?.images[0]?.src}
  //                     objectFit={'cover'}
  //                     objectPosition={'center center'}
  //                       //   borderRadius={'10px'}
  //                       //   w={'200px'}
  //                   />
  //                 </AspectRatio>
  //                 <Box py={4} px={5} >
  //                   <Flex justifyContent={'space-between'} alignItems={'center'}>
  //                     <Text fontSize={20} fontWeight={'500'}> ₦ {property?.price} </Text>
  //                     {user ? (
  //                       <Button isLoading={isLoading} bg={'transparent'} onClick={handleSavedProperties}>
  //                         {liked? <FaStar size={24} color='yellow'/> : <CiStar size={24} />}
  //                       </Button>
  //                     ) : (
  //                       <Button isLoading={isLoading} bg={'transparent'}>
  //                         {/* {liked? <FaStar size={24} color='yellow'/> : <CiStar size={24} />} */}
  //                         <CiStar size={24} />
  //                       </Button>
  //                     )}
  //                   </Flex>
  //                   <Flex justifyContent={'space-between'} w={'full'} flexDir={{base: 'column', sm: 'row'}} gap={2} alignItems={'center'}>
  //                     <Text w={'full'} display={'flex'} alignItems={'center'} gap={1}> <IoLocationSharp size={20}/> <b> {property?.address.join(' ')} </b></Text>
  //                     <Text w={'full'} fontSize={'small'} textAlign={{base: 'unset', sm:'end'}} color={'gray'}><b>PID: {property?.id} </b></Text>
  //                   </Flex>
  //                   <Flex py={2} gap={3} alignItems={'center'}>
  //                     <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
  //                       <LiaBedSolid size={24} fontWeight={800}/>
  //                       <Text>3</Text>
  //                     </Box>
  //                     <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
  //                       <PiBathtubLight size={24} fontWeight={900}/>
  //                       <Text>4</Text>
  //                     </Box>
  //                     <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
  //                       <IoCarSportOutline size={24}/>
  //                       <Text>3</Text>
  //                     </Box>
  //                     <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
  //                       <RxDimensions size={24}/>
  //                       <Text>559m</Text>
  //                     </Box>
  //                     <Center h={'20px'}>
  //                       <Divider orientation='vertical' w={'2px'} bg={'gray'} h={'full'}/>
  //                     </Center>
  //                     <Text px={4} textTransform={'capitalize'}> {property?.type} </Text>
  //                     <Text px={4} textTransform={'capitalize'}> for {property?.sale_type} </Text>
  //                     </Flex>
  //                 </Box> 
  //   </Box>
  // )

  return(
    <Box boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} fontSize={{base: 'clamp(15px, 2vw, 15px)', sm: 'clamp(10px, 2vw, 15px)'}}
      borderRadius={'10px'} w={{base: 'full', md: '80%'}} p={2} color={{base: 'black', sm: 'white'}} position={'relative'}
    >
      <Box position={'absolute'} p={2} pt={8} pr={8} top={0} right={0} zIndex={2}>
        { property?.agent &&
        <Box bg={'rgb(26 62 52)'} p={2} px={3}>
         {property?.agent}
        </Box>
        }         
      </Box>
      <Box as={RouterLink} to={`/property/${property?.id}`}>
        <AspectRatio maxW={'full'}>
          <Image borderRadius={'5px'}
            src={property?.images[0]?.src}
            // src='/venice1.jpg'
            objectFit={'cover'}
            zIndex={10}
            objectPosition={'center center'}
          />
        </AspectRatio>
      </Box>
      <Box position={{base: 'unset', sm: 'absolute'}} color={{base: 'black', sm: 'white'}} w={'full'} display={{base: 'none', sm: 'flex'}} flexDir={'column'} gap={1} p={2} bottom={0} pl={4} pb={4} zIndex={4} left={0}>
        <Box bg={{base: 'transparent',sm:'rgb(26 62 52)'}} w={{base: 'full', sm: '200px'}} p={{base: '0', sm: 2}} display={'flex'} gap={2} alignItems={'center'}>
          <Box p={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            {/* <Image src='/homes.png' w={'24px'}/> */}
            <CiLocationOn size={24} />
          </Box>
          <Box px={2}>
            <Text lineHeight={'20px'} opacity={1.0}><b> {property?.address.join(' ')} </b></Text>
          </Box>
        </Box>
        <Box bg={{base: 'transparent',sm:'rgb(26 62 52)'}} w={'98%'} p={{base: '0', sm: 2}}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} w={'full'} gap={2} alignItems={'center'} justifyContent={'space-between'}>
              <Text> ₦{property?.price} </Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} w={'full'} color={'gray'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <Text> pid: {property?.id} </Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} px={2}>
            {user ? (
              <Button _hover={{bg: 'transparent'}} isLoading={isLoading} bg={'transparent'} onClick={handleSavedProperties}>
                {liked? <FaStar size={24} color='white'/> : <CiStar color='white' size={24} />}
              </Button>
              ) : (
              <Button _hover={{bg: 'transparent'}} isLoading={isLoading} bg={'transparent'}>
                <CiStar color='white' size={24} />
              </Button>
            )}
            </Box>
          </Box>
        </Box> 
        <Box bg={{base: 'transparent',sm:'rgb(26 62 52)'}} w={'98%'} p={{base: '0', sm: 2}}>
          <Box display={'flex'} textTransform={'capitalize'} justifyContent={'space-evenly'} gap={2}>
            {property?.custom_features?.length > 0 
              ? property?.custom_features?.map((feature, index) => (
                <React.Fragment key={index}>
                  {set_custom_feature_pair(feature)}
                </React.Fragment>
              ))
              : fea?.map((feature, index) => (
                <React.Fragment key={index}>
                  {seticon_feature_pair(feature)}
                </React.Fragment>
              ))
            }
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <Text> {property?.type} </Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <Text> {property?.sale_type} </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box py={4} display={{base: 'block', sm: 'none'}}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Text fontSize={20} fontWeight={'500'}> ₦ {property?.price} </Text>
                      {user ? (
                        <Button isLoading={isLoading} bg={'transparent'} onClick={handleSavedProperties}>
                          {liked? <FaStar size={24} color='yellow'/> : <CiStar size={24} />}
                        </Button>
                      ) : (
                        <Button isLoading={isLoading} bg={'transparent'}>
                          <CiStar size={24} />
                        </Button>
                      )}
                    </Flex>
                    <Flex justifyContent={'space-between'} w={'full'} flexDir={{base: 'column', sm: 'row'}} gap={2} alignItems={'center'}>
                      <Text w={'full'} display={'flex'} alignItems={'center'} gap={1}> <IoLocationSharp size={20}/> <b> {property?.address.join(' ')} </b></Text>
                      <Text w={'full'} fontSize={'small'} textAlign={{base: 'unset', sm:'end'}} color={'gray'}><b>PID: {property?.id} </b></Text>
                    </Flex>
                    <Flex py={2} gap={3} alignItems={'center'} wrap={'wrap'}>
                      {property?.custom_features?.length > 0
                        ? property?.custom_features?.map((feature, index) => (
                          <React.Fragment key={index}>
                            {set_custom_feature_pair(feature)}
                          </React.Fragment>
                        ))
                        : fea?.map((feature, index) => (
                          <React.Fragment key={index}>
                            {seticon_feature_pair(feature)}
                          </React.Fragment>
                        ))
                      }
                      <Text textTransform={'capitalize'}> {property?.type} </Text>
                      <Text textTransform={'capitalize'}> {property?.sale_type} </Text>
                    </Flex>
      </Box> 
    </Box>
  )
}

export default Item
