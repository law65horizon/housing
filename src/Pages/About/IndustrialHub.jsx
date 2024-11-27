import { AspectRatio, Box, Button, Container, Heading, Image, Input, Link, ListItem, Text, Textarea, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'

const IndustrialHub
 = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        subject: '',
        message:''
    })
  return (
    <Box w={'full'} pb={8} bg={'ButtonFace'}>
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
                <Heading>Industrial Hub</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ratione ea cupiditate et nesciunt.</Text>
            </Box>

        </Box>
        <Container maxW={'4xl'} py={4} mt={'20px'}>
            <Box display={'flex'} flexDir={{base: 'column'}} gap={3}>
                <Box>
                    <Heading py={2} textTransform={'capitalize'}>Professional Cleaning Services</Heading>
                    <Text className='paragraph'>
                        Our team of reliable professionals is equipped to handle all cleaning tasks with expertise. 
                        They are thoroughly trained to operate industrial cleaning equipment effectively and safely, with a 
                        deep understanding of various chemicals to avoid damaging properties and ensure the well-being of people.
                    </Text>
                    <Text className='paragraph'>
                        We organize workshops and seminar sessions on industrial cleaning skills, 
                        providing vocational training for interested participants. These sessions are designed for job placement and 
                        career development.
                    </Text>
                </Box>
                <Box py={4}>
                    <Heading py={2} textTransform={'capitalize'}>Our cleaning services</Heading>
                    <Text className='paragraph'>Our specialized cleaning services include:</Text>
                    <UnorderedList pl={7}>
                        <ListItem>⁠Aluminum window cleaning and polishing</ListItem>
                        <ListItem>⁠Wooden door cleaning</ListItem>
                        <ListItem>⁠Glass cleaning</ListItem>
                        <ListItem> ⁠Floor tile, marble, granite, and terrazzo cleaning</ListItem>
                        <ListItem>⁠Toilet system and bathroom ceramic cleaning</ListItem>
                        <ListItem>⁠Swimming pool cleaning</ListItem>
                        <ListItem>⁠Furniture and kitchen cabinet polishing</ListItem>
                    </UnorderedList>
                </Box>
                <Box py={4}>
                    <Heading py={2} textTransform={'capitalize'}>Cleaning Process</Heading>
                    <Text className='paragraph'>Our comprehensive cleaning services ranges from first to second
                      cleaning such as:
                    </Text>
                    <UnorderedList pl={7}>
                        <ListItem>Sweeping and mopping</ListItem>
                        <ListItem>Removing stains from doors, glasses, and furniture</ListItem>
                        <ListItem>Toilet cleaning and sanitization</ListItem>
                        <ListItem>Polishing and shining</ListItem>
                        <ListItem>Emptying trash bins</ListItem>
                        <ListItem>Gardening</ListItem>
                    </UnorderedList>
                </Box>
                <Box py={4}>
                    <Heading py={2} textTransform={'capitalize'}>Cleaning Materials and Equipment</Heading>
                    <Text className='paragraph'>We utilize industrial-grade chemicals and equipment, including:</Text>
                    <UnorderedList pl={7}>
                        <ListItem>Liquid/Powder detergents</ListItem>
                        <ListItem>Liquid soaps</ListItem>
                        <ListItem>Toilet cleaners</ListItem>
                        <ListItem>Sanitizers</ListItem>
                        <ListItem>Scrubbing machines</ListItem>
                        <ListItem>Vacuum cleaners</ListItem>
                        <ListItem>Floor wipers</ListItem>
                    </UnorderedList>
                    <Text className='paragraph'>
                        We also use industrial equipments such as: <b>blower</b> - blowing sand off the window base; <b>Scrubbing machine</b>;
                        <b>vaccum & the floor wiper</b> to remove harden stains and control water from the tiles.
                    </Text>
                </Box>
                <Text lineHeight={1.5}>   
                    Our goal is to provide professional cleaning services to each client's facility, including residential apartments, 
                    supermarkets, shopping malls, and banks, to the highest standard possible. We look forward to partnering with you.
                </Text>
                <Text>We look forward to the opportunity of partnering with you.</Text>
            </Box>
            
            {/* map */}
        </Container>
    </Box>
  )
}

export default IndustrialHub
