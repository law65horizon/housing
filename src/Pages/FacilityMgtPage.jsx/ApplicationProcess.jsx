import { Alert, AspectRatio, Box, Button, Container, Divider, Flex, Heading, Image, Input, Link, ListItem, OrderedList, Text, Textarea, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const ApplicationProcess = () => {
    const location = useLocation()
    const section = location.hash.substring(1)
    const [active_section, set_active_section] = useState(section)
    console.log(active_section) 
    return (
        <Box w={'full'} pb={8} bg={'ButtonFace'}>
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
                    <Heading fontSize={'50px'} textAlign={'center'}>Application Process</Heading>
                    {/* <Heading fontSize={'30px'}>Our Mission</Heading> */}
                    <Text maxW={'700px'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi ex exercitationem officia quae. Exercitationem sint necessitatibus dolor labore rerum?</Text>
                </Box>
    
            </Box>
            <Container maxW={'4xl'} py={4} mt={'20px'}>
              {/* <Flex justifyContent={'space-around'} id='explore' pb={3} textTransform={'capitalize'}>
                <Link minW={'100px'} href='#renting-platform' borderBottom={'1px solid gray'} w={'full'} borderRadius={0}
                    className={`button ${active_section === 'landlords' ? 'active_button1': ''}`} bg={'transparent'} textDecor={'none'} _hover={{textDecor: 'none'}}
                >
                    <Text textAlign={'center'} px={4}>easy renting</Text>
                </Link>
                <Link minW={'100px'} href={'#power-leverage'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0}
                    className={`button ${active_section === 'landlords' ? 'active_button1': ''}`} bg={'transparent'} _hover={{textDecor: 'none'}}
                >
                    <Text textAlign={'center'} px={4}>passive income</Text>
                </Link>
                <Link minW={'100px'} href={'#earnig'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0}
                    className={`button ${active_section === 'landlords' ? 'active_button1': ''}`} bg={'transparent'} _hover={{textDecor: 'none'}}
                >
                    <Text textAlign={'center'} px={4}>Landlords earning</Text>
                </Link>
                <Link minW={'100px'} href={'#benefits'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0}
                    className={`button ${active_section === 'landlords' ? 'active_button1': ''}`} bg={'transparent'} _hover={{textDecor: 'none'}}
                >
                    <Text textAlign={'center'} px={4}>benefits</Text>
                </Link>
              </Flex> */}

              <Box id='renting-platform' py={7}>
                <Heading pb={2} textTransform={'capitalize'}>Easy renting platform</Heading>
                <Text pl={2}>
                    As a property agent, this is a platform where your selling property/vacant houses for rent are 
                    sold or rent out easily within 24hours without much struggle. 
                    It’s a platform where your prospect clients get a genuine choice of houses/property buying 
                    with peace of mind within 24hours on request from their comfort zone without stress 
                    through our technological trending techniques.
                </Text>
                <Alert p={2} mt={2} display={'block'}>
                However, prospects tenant does not join us on inspection at first instance except on the 3rd
                 <Link href='/renting-hub/inpections' color={'blue.500'}> stage of inspection process.</Link>
                </Alert>
              </Box>

              <Box id='power-leverage' py={7}>
                <Heading pb={2} textTransform={'capitalize'}>power of leverage (passive income)</Heading>
                <Text pl={2}>
                    Housing Solutions Hub Ltd offers you the opportunity to earn passive income in multiple 
                    Ways, continuously not stopping from one single effort you made with the company. This 
                    means that, a yearly subscriber agent can earn commission not just one time payment but 
                    subsequently each time the tenant renew his/her rent from year to year. 
                </Text>
                <Alert p={2} mt={2} display={'block'}>
                    NOTE: This doesn’t attract tenancy increment on the tenant subsequently. Though your 
                    subsequent passive income is minimal earning compared to the first payment. 
                    <b> Subsequent passive income is just to say thank “you” by Housing Solutions Hub Ltd for being 
                    a partner. </b> Meanwhile, property agent might choose how to earn with the company either 7% 
                    or 5% commission. <b> This company also Offer you a referral bonus when others join the 
                    company through you as well as to earn from all their transactions with the company, 
                    even when you are at sleep. </b> (passive income/power of leverage) 
                </Alert>
              </Box>

              <Box id='earning' py={7}>
                <Heading pb={2} textTransform={'capitalize'}>landlords/property owners earning</Heading>
                <Text pl={2}>It’s so amazing that this company additionally offer you a privilege to earn commission from 
                  Landlords that you refered to the company. (facility Management). 
                </Text>
                <Alert p={2} mt={2} display={'block'}>
                   You are entitled to 1.5% commission on the bulk rent paying to the landlord every 
                   year. This includes incentives from the company such as, accommodation 
                   allowances, free WI-FI, rewards appraisal and many more. 
                </Alert>
                <Text pl={2} pt={2}>
                  HOUSING SOLUTIONS HUB LTD believes in synergy, a platform where property agent efforts 
                  are recognized and rewarded. It’s better to do it together than doing it alone. 
                </Text>
              </Box>

              <Box id='benefits' py={7}>
                <Heading pb={2} textTransform={'capitalize'}>benefits to subsribe with us (our uniqueness)</Heading>
                <Box>
                    <OrderedList pl={4}>
                        <ListItem>Direct yearly subscriber agent earn 7% (first renting deal) </ListItem>
                        <ListItem>Earns 0.5% subsequently</ListItem>
                        <ListItem>Upliner earns 1% agency fee (first renting only)</ListItem>
                        <ListItem>Upliner earns 0.2% commission (subsequently)</ListItem>
                        <ListItem>Direct agent earns 1.5% yearly from landlords payment (if referred by you) </ListItem>
                        <ListItem>Upliner earn 0.5% yearly on landlords payment</ListItem> 
                        <ListItem>Earn minimal commission when the property is sold</ListItem>
                        <ListItem>Direct agent earn 10% referral bonus (when a new member subscribes through you) </ListItem>
                        <ListItem>Upliner earn 5% referral bonus </ListItem>
                        <ListItem>Earn from all downline transactions</ListItem>
                        <ListItem>Free wifi and breakfast for all subsscribers after 1 year </ListItem>
                        <ListItem>Entitle to company’s T-shirt polo & cap </ListItem>
                        <ListItem>Free loan without interest </ListItem>
                        <ListItem>Entitle to company’s I.D card, flyer and banners</ListItem>
                        <ListItem>Zonal Inspection manager entitle to monthly stipends and yearly bonuses</ListItem>
                        <ListItem>Enjoy leadership Award yearly e.t.c</ListItem>
                    </OrderedList>
                </Box>
              </Box>
                
                {/* map */}
            </Container>
        </Box>
    )
}

export default ApplicationProcess