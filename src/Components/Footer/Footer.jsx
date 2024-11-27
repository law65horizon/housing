import { Box, Button, Center, Container, Divider, Flex, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { PiPinterestLogo } from 'react-icons/pi'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    // <Box w={'full'}>
    //     {/* <Box w={'full'} h={'100px'}></Box> */}
    //     <Divider bg={'gray'} h={'1px'} mt={'50px'}/>
    //     <Container maxW={'7xl'} justifyContent={{base: 'center', md: 'space-between'}}
    //        gap={3} alignItems={'center'} w={'full'} display={'flex'} flexDirection={{base: 'column', lg: 'row'}}
    //     >
    //         <Flex py={4} gap={5} w={{base: '100%', sm: '80%', md: '50%'}} justifyContent={{base: 'space-around', lg:'unset'}}>
    //             {/* <FaInstagram /> */}
    //             <PiPinterestLogo size={24}/>
    //             <FaFacebook size={24}/>
    //             <BsTwitter size={24}/>
    //             <BsYoutube size={24}/>
    //         </Flex>
    //         <Flex gap={4} pb={4}>
    //             <Link color={'gray'} fontWeight={'700'} textTransform={'capitalize'}>Advertise with us</Link>
    //             <Link color={'gray'} fontWeight={'700'} textTransform={'capitalize'}>Contact Us</Link>
    //             <Link color={'gray'} fontWeight={'700'} textTransform={'capitalize'}>Legal</Link>
    //             <Link color={'gray'} fontWeight={'700'} textTransform={'capitalize'}>Site map</Link>
    //         </Flex>
    //     </Container>
    //     <Container maxW={'7xl'}>
    //         {/* <Text fontWeight={20}><b>Other Services</b></Text> */}
    //         <Flex gap={4} wrap={'wrap'} pl={3} color={'gray'} pb={'20px'}>
    //             <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
    //                 <Link fontWeight={'700'}>Employment sourcing hub</Link>
    //                 {/* <Center h={'80%'}>
    //                     <Divider orientation='vertical' w={'1px'} bg={'black'} color={'red'}/>
    //                 </Center> */}
    //             </Flex>
    //             <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
    //                 <Link fontWeight={'700'}>Attend a mentorship class</Link>
    //                 {/* <Center h={'80%'}>
    //                     <Divider orientation='vertical' w={'1px'} bg={'black'} color={'red'}/>
    //                 </Center> */}
    //             </Flex>
    //             <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
    //                 <Link fontWeight={'700'}>Travel and work abroad</Link>
    //                 {/* <Center h={'80%'}>
    //                     <Divider orientation='vertical' w={'1px'} bg={'black'} color={'red'}/>
    //                 </Center> */}
    //             </Flex>
    //             <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
    //                 <Link fontWeight={'700'}>Artisians/skills hiring hub</Link>
    //                 {/* <Center h={'80%'}>
    //                     <Divider orientation='vertical' w={'1px'} bg={'black'} color={'red'}/>
    //                 </Center> */}
    //             </Flex>
    //             <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
    //                 <Link fontWeight={'700'}>I. T. students internship</Link>
    //                 {/* <Center h={'80%'}>
    //                     <Divider orientation='vertical' w={'1px'} bg={'black'} color={'red'}/>
    //                 </Center> */}
    //             </Flex>
    //             <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
    //                 <Link fontWeight={'700'}>Hospitality hub</Link>
    //                 {/* <Center h={'80%'}>
    //                     <Divider orientation='vertical' w={'1px'} bg={'black'} color={'red'}/>
    //                 </Center> */}
    //             </Flex>
    //         </Flex>
    //     </Container>
    // </Box>
   <Box bg={'rgb(26 62 52)'} color={'white'} py={'20px'} >
    <Container maxW={'8xl'} bg={'rgb(26 62 52)'}>
        <Flex gap={2} py={4} justifyContent={'space-between'} flexDir={{base: 'column', sm:'row'}}>
            <Box gap={3} w={{base: 'full', sm: '50%'}}>
                <Text fontSize={20}>Get the latest leasing news</Text>
                <InputGroup borderBottom={'2px solid white'} display={{base: 'none', lg: 'flex'}} w={'90%'} >
                  <Input type='email' name='email' border={'none'} outline={'none'} _placeholder={{color: 'white'}} placeholder='Email address'/>
                  <InputRightElement w={'max-content'}>
                    <Button colorScheme='black' fontSize={'small'} h={'full'} color={'white'}>Subscribe</Button>
                  </InputRightElement>
                </InputGroup>
                <Flex gap={4} py={3}>
                    <Link as={RouterLink} to={''}><BsTwitter size={24} /></Link>
                    <Link as={RouterLink} to={''}><FaFacebook size={24} /></Link>
                    <Link as={RouterLink} to={''}><PiPinterestLogo size={24} /></Link>
                    <Link as={RouterLink} to={''}><BsYoutube size={24} /></Link>
                </Flex>
                <Text color={'gray'} fontSize={'small'}>©2024 Housing Solutions Hub. All rights reserved</Text>
            </Box>
            <Box w={{base: 'full', sm: '50%'}} pt={{base: 'unset', md: '4'}}>
                <Flex justifyContent={'space-between'}  w={'full'} wrap={'wrap'}>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Advertise with us
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink} to={'/contact_us'}
                     >
                        Contact us
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Legal
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Site map
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Hospitality Hub
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink} to={'/about_us'}
                     >
                        About us
                    </Link>
                </Flex>
            </Box>
        </Flex>
        <InputGroup display={{base: 'flex', lg: 'none'}} bg={'transparent'} pb={2} w={'100%'}>
            <Input bg={'transparent'} type='email' name='email' border={'none'} outline={'none'} _placeholder={{color: 'white'}} placeholder='Email address'/>
            <InputRightElement w={'max-content'}>
                <Button bg={'black'} fontSize={'small'} color={'white'}>Subscribe</Button>
            </InputRightElement>
        </InputGroup>
        <Divider bg={'gray'}></Divider>
        <Flex gap={4} wrap={'wrap'} color={'white'} textTransform={'capitalize'}>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Employment sourcing hub</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Attend a mentorship class</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Travel and work abroad</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Artisians/Skills hiring hub</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>I.T students internship</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Real estate companies</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>online brokering</Link>
                {/* <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center> */}
            </Flex>
        </Flex>
    </Container>
    </Box>
  )
}

export default Footer