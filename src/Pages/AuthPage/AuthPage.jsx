import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'
import { BsHouse } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

const AuthPage = () => {
  const {param} = useParams()
  return (
    <Flex justifyContent={'center'} minH={'100vh'} alignItems={'center'}>
      <Container maxW={'6xl'} padding={0}>
        <Flex justify={'center'}  py={8} gap={10}>
          <Box display={{base:"none", md: "block"}} >
            <Image src="/contact-us-img.jpeg" h={"650"} alt="phone img" borderRadius={'15px'}/>
          </Box>
          <Box w={'500px'}>
           <VStack spacing={4} p={6} align={"stretch"} w={'full'} boxShadow={'0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.16)'}>
              <Box display={'flex'}alignItems={'center'} justifyContent={'center'} textAlign={'center'} fontWeight={800}> 
                {/* <Box display={{base:'block', md:'none'}}></Box> */}
                <BsHouse size={'34'}/><Text fontWeight={'700'} fontSize={'2em'} className='main_text_color'><b>Housingsolutionshub.com</b></Text>
              </Box>
              <AuthForm param={param}/>
              {/* <Box textAlign={"center"}><b>Get the app</b></Box>
                <Flex gap={5} justifyContent={"center"}>
                  <Image src="/playstore.png" h={"10"} alt="playstore logo"/>
                  <Image src="/microsoft.png" h={"10"} alt="microsoft logo"/>
                </Flex> */}
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage