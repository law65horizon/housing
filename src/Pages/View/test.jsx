<Container maxW={'7xl'}  mt={{base: '204px', md:'182px', lg: '104px'}}>
        <Flex gap={3} flexDirection={{base: 'column', lg: 'row'}} justifyContent={'space-between'}>
            <Heading className='main_text_color' textTransform={'capitalize'}> Brand New 4 Bedroom Terrace Duplex</Heading>
            <Flex gap={3}>
                <Button leftIcon={<BiHeart />}>
                    Add to favorites
                </Button>
                <Button leftIcon={<BiShare />}>
                    Share
                </Button>
            </Flex>
        </Flex>
        <Flex gap={3} py={3}>
            <Box w={{base:'full', lg: '70%'}}>
                <AspectRatio ratio={5/3}>
                    <Image 
                      src='/web.avif'
                      loading='lazy'
                      objectFit={'cover'}
                      borderRadius={'10px'}
                      objectPosition={'center center'}
                      w={'full'}
                    />
                </AspectRatio>
                <Flex py={4} justifyContent={'space-between'} w={'full'}>
                    <Text fontSize={20}><b>₦450,000</b> </Text>
                    <Divider orientation='vertical' />
                    <Box display={'flex'} gap={4}>
                        <Box display={'flex'} justifyContent={'center'} gap={3} bg={'ButtonFace'} px={4} borderRadius={3} py={2} alignItems={'center'}>
                            <BiBed /> 4 Bedrooms
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} gap={3} bg={'ButtonFace'} px={4} borderRadius={3} py={2} alignItems={'center'}>
                            <BiBath /> 4 Baths
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} gap={3} bg={'ButtonFace'} px={4} borderRadius={3} py={2} alignItems={'center'}>
                            <FaToilet /> 3 Toilets
                        </Box>
                    </Box>
                </Flex>
                <Text className='main_text_color'><b>Property address</b></Text>
                <Box display={'flex'}  w={'max-content'} gap={3} borderRadius={3} py={2} alignItems={'center'}>
                    <CiLocationOn /> Lekki Lagos
                </Box>
                <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
                    <Text color={'gray'} fontSize={'small'}>Updated 08 Aug 2024, Added 06 Jun 2024</Text>
                    <Text fontSize={'small'} color={'gray'}><b> pid: 3793</b></Text>
                </Box>
                <Link py={2} className='main_text_color'><b>View similar properties nearby</b></Link>
                <Box >
                    <Box p={3}>
                        <Box display={'flex'}  w={'max-content'} justifyContent={'center'} borderRadius={3} py={2} alignItems={'center'}>
                            <Text className='main_text_color' fontSize={20}><b>Safety tips</b></Text>
                            <AiOutlineQuestionCircle size={'20'}/>
                        </Box>
                        <VStack gap={2}>
                            <OrderedList gap={2}>
                                <li>Do not make any inspection fee without seeing the agent and property.</li>
                                <li>Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.</li>
                                <li>Ensure you meet the Agent in an open location.</li>
                                <li>
                                    The Agent does not represent PropertyPro and PropertyPro is not liable for any monetary transaction between you and the Agent.
                                </li>
                            </OrderedList>
                            <VStack w={'full'}>
                                <Text w={'full'} fontSize={24} className='main_text_color' textAlign={'start'}><b>Description</b></Text>
                                <Text w={'full'} px={2}> LUXURY 2&3 BEDROOMS APARTMENTS WITH ELEVATOR</Text>
                                <Text w={'full'} px={2}> Location:  Lekki Lagos</Text>
                                <Text w={'full'} px={2}> Price: N450 Thousand (2 bedroom) and N100 million (3 bedroom) respectively</Text>
                                <UnorderedList gap={2} px={3}>
                                    <li>Do not make any inspection fee without seeing the agent and property.</li>
                                    <li>Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.</li>
                                    <li>Ensure you meet the Agent in an open location.</li>
                                    <li>
                                        The Agent does not represent PropertyPro and PropertyPro is not liable for any monetary transaction between you and the Agent.
                                    </li>
                                </UnorderedList>
                            </VStack>
                        </VStack>
                    </Box>
                </Box>
                {/* <Box></Box> */}
                <VerifiedListing />
                <Subscribe />
            </Box>
        </Flex>
        {/* featured products */}
        <Box p={5} mt={{sm: '20px', md:'25px'}}>
                    <Flex justifyContent={'space-between'}>
                        <Heading>Recommended properties</Heading>
                        <Link textDecor={'underline'}>see all</Link>
                    </Flex>
                    <Flex gap={2} w={'full'}>
                        {[0,1,2,3].map((property) => (
                            <Card key={property}>
                                <CardBody>
                                    <AspectRatio maxW={'800px'} ratio={6/3}>
                                        <Image 
                                            src='/venice1.jpg'
                                            objectFit={'cover'}
                                            objectPosition={'center center'}
                                        />
                                    </AspectRatio>
                                    <Stack mt={6} spacing={3}>
                                        <Text color={'pink'}>5 BEDROOM DETACHED DUPLEX WITH POOL<br/>
                                           <span style={{color: 'purple', fontWeight: 600}}>500,000,000</span><br/>
                                           <span>Marine Land</span>
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </Flex>
        </Box>
    </Container>