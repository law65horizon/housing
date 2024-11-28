import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsHouse } from 'react-icons/bs'
import AuthIn from '.AuthIn'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../FireBase/FireBase'

const Auth = () => {
  const [user, loading, error] = useAuthState(auth)
  if(user) console.log('sosisoido')
  return (
    <Flex justifyContent={'center'} minH={'100vh'} alignItems={'center'}>
        <Box w={'500px'}>
           <VStack spacing={4} p={6} align={"stretch"} w={'full'} boxShadow={'0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.16)'}>
              <Box display={'flex'}alignItems={'center'} justifyContent={'center'} textAlign={'center'} fontWeight={800}> 
                <Box display={{base:'block', md:'none'}}></Box><BsHouse size={'34'}/><Text fontWeight={'700'} fontSize={'2em'} color={'#4d61d6;'}><b>Housingsolutionshub.com</b></Text>
              </Box>
              <AuthIn />
              {/* <Box textAlign={"center"}><b>Get the app</b></Box>
                <Flex gap={5} justifyContent={"center"}>
                  <Image src="/playstore.png" h={"10"} alt="playstore logo"/>
                  <Image src="/microsoft.png" h={"10"} alt="microsoft logo"/>
                </Flex> */}
            </VStack>
        </Box>
    </Flex>
  )
}

export default Auth
