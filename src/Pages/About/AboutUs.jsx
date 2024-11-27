import { AspectRatio, Box, Button, Container, Divider, Heading, Image, Input, Link, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <Box w={'full'} pb={6} bg={'ButtonFace'}>
        <Box w={'full'} minH={{base: '400px'}} pb={4} position={'relative'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
            <AspectRatio w={'full'} minH={'400px'} ratio={4 / 1.3}>
              <Image 
                // src='/contact-us-img.jpeg' 
                src='/banner.png'
                objectFit={'cover'}
                objectPosition={'start center'}
                w={'full'}
                minH={'400px'}
              />
            </AspectRatio>
            <Box position={'absolute'} gap={2} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} zIndex={2}>
                <Heading fontSize={'50px'}>About Us</Heading>
                <Heading fontSize={'30px'}>Our Mission</Heading>
                <Text maxW={'700px'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi ex exercitationem officia quae. Exercitationem sint necessitatibus dolor labore rerum?</Text>
            </Box>

        </Box>
        <Container maxW={'6xl'} py={4} mt={'20px'}>
            <Box display={'flex'} gap={3} mb={3} flexDir={{base: 'column'}}>
                <Box display={'flex'} flexDir={{base: 'column', md: 'row'}} gap={2}>
                    <Box w={{base: 'full', md: '50%'}} boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} borderRadius={'15px'}>
                        <Box p={3}>
                            <Heading py={3}>Our misson</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolore unde ea eaque quis architecto modi consectetur earum facere autem, dicta possimus quidem omnis necessitatibus repudiandae tenetur deleniti sunt obcaecati iste ratione consequuntur non, aliquam eos. Quos aliquid libero amet et eum laudantium ea! Accusamus reprehenderit at sint amet nesciunt?
                            </Text>
                        </Box>
                    </Box>
                    <Box w={{base: 'full', md: '50%'}}>
                        <AspectRatio maxW={'full'} ratio={4/3}>
                          <Image 
                            src='contact-us-img.jpeg'
                            objectFit={'cover'}
                            objectPosition={'center center'}
                            borderRadius={'15px'}
                          />
                        </AspectRatio>
                    </Box>
                </Box>
                <Box display={'flex'} flexDir={{base: 'column', md: 'row'}} gap={2}>
                    <Box w={{base: 'full', md: '50%'}} boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} borderRadius={'15px'}>
                        <Box p={3}>
                            <Heading py={3}>Our misson</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolore unde ea eaque quis architecto modi consectetur earum facere autem, dicta possimus quidem omnis necessitatibus repudiandae tenetur deleniti sunt obcaecati iste ratione consequuntur non, aliquam eos. Quos aliquid libero amet et eum laudantium ea! Accusamus reprehenderit at sint amet nesciunt?
                            </Text>
                        </Box>
                    </Box>
                    <Box w={{base: 'full', md: '50%'}}>
                        <AspectRatio maxW={'full'} ratio={4/3}>
                          <Image 
                            src='contact-us-img.jpeg'
                            objectFit={'cover'}
                            objectPosition={'center center'}
                            borderRadius={'15px'}
                          />
                        </AspectRatio>
                    </Box>
                </Box>
            </Box>

            <Heading py={4}>Meet the team</Heading>
            <Box display={'flex'} flexDir={'column'} gap={2}>
              <Box px={2}>
                <Box pt={3}>
                  <Box display={'flex'} flexDir={{base: 'column-reverse', md: 'row'}} gap={2}>
                    <Box w={{base: 'full', md: '70%'}}  borderRadius={'15px'}>
                        <Box p={3} textAlign={{base: 'center', md: 'start'}}>
                            <Heading py={3}>John Doe</Heading>
                            <Text pb={2} textTransform={'capitalize'} color={'gray'} fontSize={'18px'}>cheif executive officer</Text>
                            <Text textAlign={'start'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolore unde ea eaque quis architecto modi consectetur earum facere autem, dicta possimus quidem omnis necessitatibus repudiandae tenetur deleniti sunt obcaecati iste ratione consequuntur non, aliquam eos. Quos aliquid libero amet et eum laudantium ea! Accusamus reprehenderit at sint amet nesciunt?
                            </Text>
                        </Box>
                    </Box>
                    <Box w={{base: 'unset', md: '30'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {/* <AspectRatio maxW={'400px'} ratio={4/4}> */}
                          <Image 
                            src='contact-us-img.jpeg'
                            objectFit={'cover'}
                            objectPosition={'center center'}
                            h={{base: '300px'}}
                            w={{base: '300px'}}
                            // maxW={'300px'}
                            borderRadius={'50%'}
                          />
                        {/* </AspectRatio> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider bg={'black'} my={'10px'} h={'1px'} />
              <Box>
                <Box pt={3}>
                  <Box display={'flex'} flexDir={{base: 'column-reverse', md: 'row'}} gap={2}>
                    <Box w={{base: 'full', md: '70%'}}  borderRadius={'15px'}>
                        <Box p={3} textAlign={{base: 'center', md: 'start'}}>
                            <Heading py={3}>John Doe</Heading>
                            <Text pb={2} textTransform={'capitalize'} color={'gray'} fontSize={'18px'}>cheif executive officer</Text>
                            <Text textAlign={'start'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolore unde ea eaque quis architecto modi consectetur earum facere autem, dicta possimus quidem omnis necessitatibus repudiandae tenetur deleniti sunt obcaecati iste ratione consequuntur non, aliquam eos. Quos aliquid libero amet et eum laudantium ea! Accusamus reprehenderit at sint amet nesciunt?
                            </Text>
                        </Box>
                    </Box>
                    <Box w={{base: 'unset', md: '30'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {/* <AspectRatio maxW={'400px'} ratio={4/4}> */}
                          <Image 
                            src='contact-us-img.jpeg'
                            objectFit={'cover'}
                            objectPosition={'center center'}
                            h={{base: '300px'}}
                            w={{base: '300px'}}
                            // maxW={'300px'}
                            borderRadius={'50%'}
                          />
                        {/* </AspectRatio> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider bg={'black'} my={'10px'} h={'1px'} />
              <Box>
                <Box pt={3}>
                  <Box display={'flex'} flexDir={{base: 'column-reverse', md: 'row'}} gap={2}>
                    <Box w={{base: 'full', md: '70%'}}  borderRadius={'15px'}>
                        <Box p={3} textAlign={{base: 'center', md: 'start'}}>
                            <Heading py={3}>John Doe</Heading>
                            <Text pb={2} textTransform={'capitalize'} color={'gray'} fontSize={'18px'}>cheif executive officer</Text>
                            <Text textAlign={'start'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolore unde ea eaque quis architecto modi consectetur earum facere autem, dicta possimus quidem omnis necessitatibus repudiandae tenetur deleniti sunt obcaecati iste ratione consequuntur non, aliquam eos. Quos aliquid libero amet et eum laudantium ea! Accusamus reprehenderit at sint amet nesciunt?
                            </Text>
                        </Box>
                    </Box>
                    <Box w={{base: 'unset', md: '30'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {/* <AspectRatio maxW={'400px'} ratio={4/4}> */}
                          <Image 
                            src='contact-us-img.jpeg'
                            objectFit={'cover'}
                            objectPosition={'center center'}
                            h={{base: '300px'}}
                            w={{base: '300px'}}
                            // maxW={'300px'}
                            borderRadius={'50%'}
                          />
                        {/* </AspectRatio> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            
            {/* map */}
        </Container>
    </Box>
  )
}

export default AboutUs