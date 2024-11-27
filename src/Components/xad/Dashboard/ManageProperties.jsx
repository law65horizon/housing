import React, { useEffect, useState } from 'react'
import NavBarFilter from '../../NavBar/NavBarFilter/NavBarFilter'

// import useGetPosts from '../../../hooks/useGetPosts'
import useGetPosts from '../../../hooks/useGetPosts'
// import Property from '../../Property/Property'
import Property from './Property'
import { Box, Button, Container, Flex, Input, Skeleton, Text } from '@chakra-ui/react'
import useShowToast from '../../../hooks/useShowToast'
import usePostStore from '../../../store/postStore'
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { firestore } from '../../../FireBase/FireBase'

const ManageProperties = () => {
  const {posts, isLoading, setIsLoading} = useGetPosts()
  const [input, setInput] = useState('')
  const {setPosts} = usePostStore()
  const showToast = useShowToast()
  // console.log(posts)
  // console.log(posts[1]?.images[0]?.src)
  const getSinglePost = (id) => {
    if(!id) {
      showToast('Error', 'Input property ID', 'error')
      return
    }
    if(isLoading) return
    const getPosts = async() => {
      let pid = id.trim()
      // try {
      //   const q = query(collection(firestore, 'posts'), where('id', '==', pid))
      //   const querySnapShot = await getDocs(q)
      //   const posts = []
      //   querySnapShot.forEach((doc) => {
      //       posts.push({...doc.data(), id:doc.id})
      //   })
      //   posts.sort((a,b) => b.createdAt - a.createdAt)
      //   console.log(querySnapShot)
      //   setPosts(posts)
      try {
        const userRef = await getDoc(doc(firestore, "posts", pid));
        const isEmpty = Object.keys(userRef.data()).length === 0
        const post = []
        if(userRef.exists && !isEmpty) {
          post.push({...userRef.data(), id: userRef.id})
          setPosts(post)
        }
        console.log(post)
      } catch (error) {
        console.log(error)
        showToast('Error', error.message,'error')
        setPosts([])
      }
    }
    getPosts()
  }
  return (<>
   <NavBarFilter />
   {/* <Container maxW={'6xl'}> */}
   <Container maxW={'6xl'} mt={{base: '204px', md:'142px', lg: '104px'}}>
    <Flex justifyContent={'space-between'} flexDirection={{base: 'column', sm:'row'}} gap={3}>
        <Text><b>All Properties</b></Text>
        <Flex justifyContent={'center'} alignItems={'center'} gap={3}>
          <Input placeholder='Enter PID' type='text' maxW={'500px'} onChange={(e) => setInput(e.target.value)}/>
          <Button onClick={() => getSinglePost(input)}>Search</Button>
        </Flex>
    </Flex>
    <Box py={5} display={'flex'} flexDir={{base: 'column', md: 'row'}}m={{sm: '0 auto', md: 'unset'}} flexWrap={'wrap'} w={{base: 'full'}} justifyContent={'space-between'} gap={4}>
      {/* {[0,1,3,4].map((property) => (
                // <Box
                //   boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
                //   borderRadius={'10px'} key={property}
                //   w={{base: 'full', md: 'calc(50% - 0.5rem)'}}
                // >
                //   <Box bg={'black'} borderTopRadius={'10px'}>
                //     <Flex px={5} justifyContent={'space-between'} alignItems={'center'}> 
                //       <Text px={5} fontSize={20} color={'white'}> Jane Doe</Text>
                //       <Avatar name='Jane Doe' transform={'translateY(10px)'} zIndex={3}/>
                //     </Flex>
                //   </Box>
                //   <AspectRatio maxW={'full'} ratio={6/4}>
                //     <Image 
                //       src='/image.jpg'
                //       objectFit={'cover'}
                //       objectPosition={'center center'}
                //         //   borderRadius={'10px'}
                //         //   w={'200px'}
                //     />
                //   </AspectRatio>
                //   <Box py={4} px={5} >
                //     <Flex justifyContent={'space-between'} alignItems={'center'}>
                //       <Text fontSize={20} fontWeight={'500'}> ₦ 450, 500</Text>
                //     </Flex>
                //     <Flex justifyContent={'space-between'} alignItems={'center'}>
                //       <Text><b>5 wilson street, Lekki</b></Text>
                //       <Text fontSize={'small'} color={'gray'}><b> pid: 3793 </b></Text>
                //     </Flex>
                //     <Flex py={2} gap={3} alignItems={'center'}>
                //       <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                //         <LiaBedSolid size={24} fontWeight={800}/>
                //         <Text>3</Text>
                //       </Box>
                //       <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                //         <PiBathtubLight size={24} fontWeight={900}/>
                //         <Text>4</Text>
                //       </Box>
                //       <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                //         <IoCarSportOutline size={24}/>
                //         <Text>3</Text>
                //       </Box>
                //       <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                //         <RxDimensions size={24}/>
                //         <Text>559m</Text>
                //       </Box>
                //       <Center h={'20px'}>
                //         <Divider orientation='vertical' w={'2px'} bg={'gray'} h={'full'}/>
                //       </Center>
                //       <Text px={4}>House</Text>
                //       </Flex>
                //   </Box> 
                //   <Box w={'full'}>
                //     <Button onClick={onOpen} color={'white'} bg={'black'} w={'full'}>Edit x Post</Button>
                //   </Box>
                //   {isOpen && <EditPost isOpen={isOpen} onClose={onClose} />}
                // </Box>
                <Property post={{id:'di', type: 'diso', price: 'dois'}} />
      ))} */}
      {isLoading && (<>
        {[0,1,2,3].map((property, index) => (
          <Skeleton w={{base: 'full', md: 'calc(50% - 0.5rem)'}} key={index}>
            <Box h={'400px'}>contents wrapped</Box>
          </Skeleton>
        ))}
      </>)}
      {!isLoading && (<>
        {posts?.map((property, index) => (
          <Property post={property}/>
        ))}
      </>)}
    </Box>
   </Container>
  </>
  )
}

export default ManageProperties

function useGetSinglePost(id) {
  const [isLoading, setIsLoading] = useState(false)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()

  useEffect(() => {
    const getPosts = async() => {
        setIsLoading(true)
        setPosts([])
        try {
          const q = id 
             ? query(collection(firestore, 'posts'), orderBy('counter'), where('id', '==', id))
             : query(collection(firestore, 'posts'), orderBy('counter'))
          
          const querySnapShot = await getDocs(q)
          const posts = []
          querySnapShot.forEach((doc) => {
              posts.push({...doc.data(), id:doc.id})
          })
          posts.sort((a,b) => b.createdAt - a.createdAt)
          setPosts(posts)
        }  catch (error) {
            showToast('Error', error.message,'error')
            console.log(error.message)
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
  getPosts()
    window.addEventListener('online', getPosts)
  },  [setPosts, showToast])
  return {isLoading, posts}
}