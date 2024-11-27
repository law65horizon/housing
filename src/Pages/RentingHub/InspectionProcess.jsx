import { Alert, AspectRatio, Box, Button, Container, Divider, Flex, Heading, Image, Input, Link, ListItem, OrderedList, Text, Textarea, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const InspectionProcess = () => {
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
                    <Heading fontSize={'50px'} textAlign={'center'}>Inspection Process</Heading>
                    {/* <Heading fontSize={'30px'}>Our Mission</Heading> */}
                    <Text maxW={'700px'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi ex exercitationem officia quae. Exercitationem sint necessitatibus dolor labore rerum?</Text>
                </Box>
    
            </Box>
            <Container maxW={'4xl'} py={4} mt={'20px'}>
              <Heading  textTransform={'capitalize'} textAlign={'center'}>HOUSING INSPECTION PROCESSES </Heading>
              <Box display={'flex'} flexDir={'column'} gap={3} id='renting-platform' py={4} fontWeight={'400'}>
                <Text className='paragraph'>
                   First and foremost, potential tenants can select the kind of housing they
                   desire from the comfort of their own house or zone. You don't have to worry about worrying 
                   about accompanying us on inspection rounds or hopping from keke to keke in an unprofessional manner. 
                   <b> We attend to all our prospects through technologies trending in order to serve you much better.</b>
                </Text>

                <Text className='paragraph'>
                  <b>OUR FOCUS POINT</b> – is to put a call to our prospects tenant for key collection and to park in to your 
                  rented apartment without delay. All negotiations and payments are handled by the company on your behalf.
                  There are four stages of inspection:
                </Text>

                <Box>
                    <Heading pb={2} fontSize={'20px'}>Stage I:</Heading>
                    <UnorderedList pl={2}>
                    <ListItem>The prospect do registration and fill  out our tenancy form of non-refunded fee of (N3,000) </ListItem>
                    <ListItem>Must have read, signed and accept our teams of operations</ListItem>
                    <ListItem>Inspection fee is paid (non-refundable) this is determined according to the size of the apartment and the distance location</ListItem>
                    <ListItem>
                        Professional … pictures and videos of the apartment including the interior and external environment and 
                        the street to the apartment are properly taking and forwarded to the prospects to view for selection 
                        (website)
                    </ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Heading pb={2} fontSize={'20px'}>Stage II:</Heading>
                    <UnorderedList pl={2}>
                    <ListItem>The prospect confirmed and approves the apartment for processing</ListItem>
                    <ListItem>The company profiled the apartment and it’s owner if applicable on the following terms below </ListItem>
                    <UnorderedList>
                        <ListItem>Lighting – NEPA bills arrears/meters</ListItem>
                        <ListItem>Renovation (general interior and exterior maintenance repairs)</ListItem>
                        <ListItem>Previous tenant and reason for parking out of the apartment </ListItem>
                        <ListItem>Pumping of water and general survey of the environment including present occupants in the compound</ListItem>
                        <ListItem>Security/gateman and verification if any service charge applies</ListItem>
                    </UnorderedList>
                    <ListItem>The prospect could be allowed on inspection at this stage if needed</ListItem>
                    </UnorderedList>
                </Box>

                <Box>
                    <Heading pb={2} fontSize={'20px'}>Stage III:</Heading>
                    <UnorderedList pl={2}>
                    <ListItem>Prospect make all necessary payments</ListItem>
                    <ListItem>Verification process – tenancy agreement, prospects I.D and guarantor’s documentation</ListItem>
                    <ListItem>Handover of keys and general final inspection</ListItem>

                    </UnorderedList>
                </Box>

                <Box>
                    <Heading pb={2} fontSize={'20px'}>Stage IV:</Heading>
                    <UnorderedList pl={2}>
                    <ListItem>House cleaning and parking process if needed</ListItem>
                    <ListItem>Prospect tenant finally move in with smiles</ListItem>


                    </UnorderedList>
                </Box>
                {/* <Alert p={2} mt={2}>
                However, prospects tenant does not join us on inspection at first instance except on the 3rd
                stage of inspection process. 
                </Alert> */}
              </Box>

              {/* <Box id='power-leverage' py={7}>
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
              </Box> */}
                
                {/* map */}
            </Container>
        </Box>
    )
}

export default InspectionProcess