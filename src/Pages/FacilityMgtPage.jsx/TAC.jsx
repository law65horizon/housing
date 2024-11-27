import { AspectRatio, Box, Button, Container, Divider, Flex, Heading, Image, Input, Link, ListItem, OrderedList, Text, Textarea, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const TAC = () => {
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
                    <Heading fontSize={'50px'} textAlign={'center'}>Terms and Conditions</Heading>
                    {/* <Heading fontSize={'30px'}>Our Mission</Heading> */}
                    <Text maxW={'700px'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi ex exercitationem officia quae. Exercitationem sint necessitatibus dolor labore rerum?</Text>
                </Box>
    
            </Box>
            <Container maxW={'6xl'} py={4} mt={'20px'}>
              <Flex justifyContent={'space-around'} id='explore' pb={3}>
                <Button minW={'100px'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0} onClick={() => set_active_section('tenants')} 
                    className={`button ${active_section !== 'landlords' ? 'active_button1': ''}`} bg={'transparent'}
                >
                    <Text px={4} py={2}>Tenants</Text>
                </Button>
                <Button minW={'100px'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0} onClick={() => set_active_section('landlords')} 
                    className={`button ${active_section === 'landlords' ? 'active_button1': ''}`} bg={'transparent'}
                >
                    <Text px={4} py={2}>Landlord</Text>
                </Button>
              </Flex>

              <Box>
                {active_section === 'landlords' ? (
                    <Box>
                        <Heading textAlign={'center'} fontSize={'clamp(18px, 3vw, 28px)'} py={2}>Terms & Conditions (Partnership terms for Landlords) </Heading>

                        <Box w={{base: 'full', md: 'full'}} >
                            <Text py={2} pl={{base: 2, md: 9}}>These terms and conditions are applicable to landlords who wish to subscribe to our services</Text>
                            <OrderedList px={{base: 2, md: 6}} fontWeight={'400'} display={'flex'} flexDir={'column'} justifyContent={'center'} gap={1} >
                                <ListItem>  An agent must do KYC registration with Housing Solutions Hub Ltd before striking a deal (Non-refundable fee of N3,000)</ListItem> 
                                <ListItem> Must register his/her prospects with us before inspection.</ListItem>
                                <ListItem> Must be truthful when registering his/her vacant houses and avoid fraudulence practices</ListItem> 
                                <ListItem> It’s prohibited in this company for an agent to hijack his/her fellow agent’s prospect client.</ListItem> 
                                <ListItem> Must be patient and not quarrelsome, willing to follow the company’s policies on 
                                terms of inspection and payment of commission</ListItem>
                                <ListItem> All transactions attract 1% reduction that covers (vat/bank charges/Adm</ListItem>) 
                                <ListItem> This company doesn’t recognize a third party deal on renting services (direct agent only)</ListItem>
                                <ListItem> All commission payments are made within 48hrs after transaction (cash out days are 3 
                                times a week, Monday, Wednesday & Fridays)</ListItem> 
                                <ListItem> Housing Solutions Hub Ltd offers 7% agency fee only for a yearly subscriber partner 
                                agent and earns 0.5% subsequently on renting deal</ListItem> 
                                <ListItem>  While a registered agent who’s not a yearly subscriber earns 5% only and doesn’t earn 
                                subsequently nor entitled to other benefits</ListItem> 
                                <ListItem>  Agent who wish to earn 7% agency fee, referral bonuses, upliner and downline earning</ListItem> 
                                are entitled to other benefits from the company, must do yearly subscription fee of N30,000 to join as partnership.
                                <ListItem>  Must not fight/quarrel with any staff/agent as it leads to immediate termination of the ontract with the company.</ListItem> 
                                <ListItem>  Must follow the company’s dress code, not being rude or arrogant and must attend weekly training. </ListItem>
                                <ListItem>  Failure to renew the yearly subscription fee will lead to termination of the contract at the end of the year.</ListItem>
                                <ListItem>  Must not do backyard deal with the company’s clients nor extorting money from them as defaulters will face legal actions.</ListItem> 
                                <ListItem>  Your prospects tenant is not permitted on inspection with us except on the 3rd stage of housing inspection process. </ListItem>
                                <ListItem>  All contracts and the company’s benefits offers are subject to be reviewed yearly.norderedList</ListItem>
                            </OrderedList>
                        </Box>
                    </Box>
                ): (
                    <Box>
                        <Heading textAlign={'center'} fontSize={'clamp(18px, 3vw, 28px)'} py={2}>Terms & Conditions (Partnership terms for landlords) </Heading>

                        <Box w={{base: 'full', md: 'full'}} >
                            <Text py={2} pl={{base: 2, md: 9}}>
                                These terms and conditions are applicable to customers holding residential subscribtions with Housing Solutions Hub Ltd
                            </Text>
                            <OrderedList px={{base: 2, md: 6}} fontWeight={'400'} display={'flex'} flexDir={'column'} justifyContent={'center'} gap={{base: 2, md: 1}} >
                                <ListItem>Prospects must properly fill out our tenancy KYC form with us– (non refundable registration fee).</ListItem>
                                <ListItem> Prospects must be willing and ready to pay for the following fees-</ListItem>
                                    <UnorderedList>
                                        <ListItem>Inspection and agency fee of  (15%) non-refundable after service </ListItem>
                                        <ListItem>Yearly subscription administrative charges (according to the size of the apartment)</ListItem>
                                        <ListItem>Caution fee of 10% (if needed) re-fundable if nothing is damaged in the apartment</ListItem>
                                        <ListItem>Legal fee of (10%) not re-fundable after service  </ListItem>
                                        <ListItem>Yearly rent </ListItem>
                                    </UnorderedList>
                                <ListItem>Must make all necessary payments that concerns the apartment through housing solutions Hub Ltd and not to the third party</ListItem>
                                <ListItem>Must communicate with the Landlord through the company in everything</ListItem>
                                <ListItem>Must not parked out of the apartment without 1 month notice (for proper inspection and handover of keys) </ListItem>
                                <ListItem>Must be truthful and cooperate with neighbors, not quarrelling and abide by the compound rules</ListItem>
                                <ListItem>Must put the interiors of the apartment in good repairs such as door keys, toiletries, wardrobe and kitchen cabinets and general compound sanitation including waste disposal</ListItem>
                                <ListItem>Must not sub-let part of the apartment without our permission</ListItem>
                                <ListItem>Must not bring in devious fiends into the premise</ListItem> 
                                <ListItem>Must pay all necessary monthly dues – NEPA, water and be willing to present evidence of such payment receipt quarterly at our office</ListItem>
                                <ListItem>Must be willing to allow our housing inspection officer to inspect the interior if it’s in good repairs bi-annually (6 months time)</ListItem>
                                <ListItem>Must be willing to pay for compound service charge managed by the company such as light, gateman/waste bin, personal utility bill </ListItem>
                                <ListItem>Must not engaged in a fraudulent business</ListItem>
                                <ListItem>Does not join us for apartment inspection except in stage 3 of inspection</ListItem>
                                <ListItem>Must pay your rent as at when due (must give prior two (2) months notice in case of financial cries as late payment slightly attracts sanction)</ListItem>
                                <ListItem>Must not tempered with the prepaid meter in the apartment either during or before packing out</ListItem> 
                                <ListItem>Must pay and settled all personal utility bills used within the period of occupancy such as light, water, security etc before parking out of the premises</ListItem>
                                <ListItem>Must be liable and responsible for any damages that might occurred as a result of negligence during his/her stays in the apartment</ListItem>
                                <ListItem>Must keep the interior of the apartment clean and tidy such as the painted wall, kitchen cabinet, wardrobes, key handles in an orderly manner just as there were before moving into the apartment</ListItem>
                                <ListItem>Must stay at least 2 years to start enjoying from the company’s full benefits such as  free maintenance repairs of (30%) interior while the tenant pays 70%, installmental payment, etc (And such repairs must be handled by the company’s artisans team)</ListItem>
                                <ListItem>All apartment interior repairs are care for and handled by the tenant and not the property owner after parking in; while the major external compound maintenance repairs are handled by the property owner and not the tenant</ListItem>
                                <ListItem>Free inspection and agency fee subsequently is applicable to only properties under our management while 70% of both fees are to be handled by the existing tenants on external properties (third management party) and our company pays 30% of such fees on behalf of the tenant.</ListItem>
                            </OrderedList>
                        </Box>
                    </Box>
                )}
              </Box>
                
                {/* map */}
            </Container>
        </Box>
    )
}

export default TAC