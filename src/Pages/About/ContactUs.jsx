import { AspectRatio, Box, Button, Container, Heading, Image, Input, Link, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'

const ContactUs = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        subject: '',
        message:''
    })
  return (
    <Box w={'full'} bg={'ButtonFace'}>
        <Box w={'full'} maxH={{base: '300px'}} pb={4} position={'relative'}>
            {/* <AspectRatio maxH={'200px'} maxW={'full'} ratio={4/1}> */}
              <Image 
                // src='/contact-us-img.jpeg' 
                src='/banner.png'
                objectFit={'cover'}
                objectPosition={'center center'}
                w={'full'}
                maxH={'300px'}
              />
            {/* </AspectRatio> */}
            <Box position={'absolute'} gap={2} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} zIndex={2} top={'50%'} left={'25%'}>
                <Heading>Contact Us</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ratione ea cupiditate et nesciunt.</Text>
            </Box>

        </Box>
        <Container maxW={'6xl'} py={4} mt={'20px'}>
            <Box display={'flex'} flexDir={{base: 'column', md: 'row'}} gap={3}>
                <Box boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} p={5} w={{base: 'full', md:'50%'}}
                  borderRadius={'10px'}
                >
                    <Text fontSize={20} py={2}> Make an enquiry</Text>
                  <Box display={'flex'} flexDir={'column'} gap={4}>
                    <Input value={inputs.username} type='text' placeholder='Name' 
                      onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                    <Input value={inputs.email} type='email' placeholder='Email' 
                      onChange={(e) => setInputs({...inputs, email: e.target.value})}
                    />
                    <Input value={inputs.subject} type='text' placeholder='Subject' 
                      onChange={(e) => setInputs({...inputs, subject: e.target.value})}
                    />
                    <Textarea value={inputs.message} placeholder='Message' resize={'vertical'} 
                      onChange={(e) => setInputs({...inputs, message: e.target.value})}
                    />
                    <Box w={'full'} display={'flex'} justifyContent={{base: 'end'}}>
                        <Button className='main_bg' color={'white'}>Submit</Button>
                    </Box>
                  </Box>
                </Box>

                <Box boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} p={5} w={{base: 'full', md:'50%'}}
                  borderRadius={'10px'}
                >
                    <Box py={2}>
                        <Text fontSize={20} py={2} pt={3}>Whatsapp help desk</Text>
                        <Box display={'flex'} gap={2} pl={2} alignItems={'center'} as={RouterLink}>
                            <BsWhatsapp size={24} />
                            <Link>Whatsapp.com/diods/sdkidoosi</Link>
                        </Box>
                    </Box>
                    <Box py={2}>
                        <Text fontSize={20} py={2} pt={3}>Contact info.</Text>
                        <Box display={'flex'} flexDir={'column'} gap={4}>
                            <Box display={'flex'} gap={2} pl={2} alignItems={'center'} as={RouterLink}>
                                <Box display={'flex'} gap={1} alignItems={'center'} justifyContent={'center'}>
                                   <BiMailSend size={24} />
                                   <Text>E-mail:</Text>
                                </Box>
                                <Link>help@housingsolutions.com</Link>
                            </Box>
                            <Box display={'flex'} gap={2} pl={2} alignItems={'center'} as={RouterLink}>
                                <Box display={'flex'} gap={1} alignItems={'center'} justifyContent={'center'}>
                                   <BiPhone size={24} />
                                   <Text>Phone:</Text>
                                </Box>
                                <Link href=''>+234 32093 89382</Link>
                            </Box>
                            <Box display={'flex'} gap={2} pl={2} alignItems={'center'} as={RouterLink}>
                                <Box display={'flex'} gap={1} alignItems={'center'} justifyContent={'center'}>
                                   <BiPhone size={24} />
                                   <Text>Phone 2:</Text>
                                </Box>
                                <Link href=''>+234 32093 89382</Link>
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

export default ContactUs