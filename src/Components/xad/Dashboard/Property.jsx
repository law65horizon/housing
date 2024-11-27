import { Box, Button, Container, Flex, Input, Image, Modal, Text, Textarea, VStack, AspectRatio, Checkbox, Stack, Radio, RadioGroup, ModalContent, ModalBody, ModalOverlay, ModalCloseButton, useDisclosure, ModalHeader, Skeleton } from '@chakra-ui/react'
import { Avatar, Center, Divider } from '@chakra-ui/react'
import React from 'react'
import { LiaBedSolid, LiaSwimmingPoolSolid, LiaToiletSolid } from 'react-icons/lia'
import { PiBathtubLight } from 'react-icons/pi'
import { IoCarSportOutline } from 'react-icons/io5'
import { RxDimensions } from 'react-icons/rx'
import { Link as RouterLink } from 'react-router-dom'
// import EditPost from './EditPost'
import { BsTrash3 } from 'react-icons/bs'
import useDeletePost from '../../../hooks/useDeletePost'
import EditPost from './EditPost'
import { GrFan } from 'react-icons/gr'
import { CiWifiOn } from 'react-icons/ci'
import { GiSolarPower, GiSpikedFence } from 'react-icons/gi'
import { RiRemoteControlLine } from 'react-icons/ri'
import { BiBed } from 'react-icons/bi'
// import usePostStore from '../../../store/postStore'

const Property = ({post}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {isDeleting, deletePost} = useDeletePost()
    const custom_fea = []
    post?.custom_features?.map((feature) => {
      custom_fea.push(`${Object.keys(feature)[0]}: ${feature[Object.keys(feature)[0]]}`)
    })
    const fea = custom_fea.concat(post?.indoor_features).concat(post?.outdoor_features)
    const handleDeletePost = async() => {
      if(confirm('Confirm action')) {
        await deletePost(post.id)
        // deletePostFromStore(post.id)
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
      return (
          <Box display={'flex'} width = {{base: 'full',  md: 'calc(50% - 0.5rem)'}}
              gap={2} alignItems={'center'} key={feature}
          >
              {/* <RxDimensions size={24}/> */}
              {icon}
              <Text textTransform={'capitalize'}> {feature} </Text>
          </Box>
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
      // console.log(Object.keys(feature)[0])
      return (
          <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
              {icon}
              <Text> {feature[Object.keys(feature)]} </Text>
          </Box>
      )
    }
    console.log(fea)
  return (<>
    <Box
                  boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
                  borderRadius={'10px'} key={post?.id} fontSize={'clamp(10px, 2.5vw, 15px)'}
                  w={{base: 'full', md: 'calc(50% - 0.5rem)'}}
                >
                  {isOpen && <EditPost isOpen={isOpen} property={post} onClose={onClose} />}
                  <Box bg={'black'} borderTopRadius={'10px'}> 
                    <Flex px={5} justifyContent={'space-between'} alignItems={'center'}> 
                      <Text px={5} fontSize={20} color={'white'}> {post?.agent} </Text>
                      <Avatar name={post?.agent} transform={'translateY(10px)'} zIndex={3}/>
                    </Flex>
                  </Box>
                  <AspectRatio maxW={'full'} ratio={6/4} >
                    <Image 
                      // src='/image.jpg'
                      src={post?.images[0]?.src}
                      objectFit={'cover'}
                      objectPosition={'center center'}
                        //   borderRadius={'10px'}
                        //   w={'200px'}
                    />
                  </AspectRatio>
                  <Box py={4} px={5} w={'full'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Text fontSize={20} fontWeight={'500'}>₦{post?.price} </Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} w={'full'} flexDir={{base: 'column', sm: 'row'}} alignItems={'center'}>
                      <Text w={'full'}><b> {post?.address.join(' ')} </b></Text>
                      <Text w={'full'} textAlign={{base: 'unset', md: 'end'}} fontSize={'small'} color={'gray'}><b>PID: {post?.id} </b></Text>
                    </Flex>
                    <Flex py={2} gap={3} flexDir={{base:'column', sm: 'row'}} >
                     <Flex alignItems={'center'} gap={3} w={'full'}>
                      {/* <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                        <LiaBedSolid size={24} fontWeight={800}/>
                        <Text>3</Text>
                      </Box>
                      <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                        <PiBathtubLight size={24} fontWeight={900}/>
                        <Text>4</Text>
                      </Box>
                      <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                        <IoCarSportOutline size={24}/>
                        <Text>3</Text>
                      </Box>
                      <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                        <RxDimensions size={24}/>
                        <Text>559m</Text>
                      </Box> */}
                      {post?.custom_features?.slice(0,3).map((feature) => (
                      // {fea?.slice(0,3).map((feature) => (
                            <React.Fragment key={feature}>
                                {set_custom_feature_pair(feature)}
                            </React.Fragment>
                        ))}
                     </Flex>
                     {/* <Center h={'20px'} display={{base: 'none', sm: 'flex'}}>
                        <Divider orientation='vertical' w={'2px'} bg={'gray'} h={'full'}/>
                     </Center> */}
                      <Text px={{base:'0', sm: '4'}} textTransform={'capitalize'}> {post.type} </Text>
                      <Text px={{base:'0', sm: '4'}} textTransform={'capitalize'}> {post.sale_type} </Text>
                    </Flex>
                  </Box> 
                  <Flex w={'full'} justifyContent={'space-between'} p={2}>
                    {/* <Button onClick={onOpen} color={'white'} bg={'black'} w={'full'}>Edit x Post</Button> */}
                    <Button  onClick={onOpen} color={'white'} bg={'black'}>Edit Post</Button>
                    <Button bg={'black'} color={'white'} isLoading={isDeleting} onClick={handleDeletePost}> <BsTrash3 size={24} /></Button>
                  </Flex>
    </Box>
  </>)
}

export default Property