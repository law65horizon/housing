import { AspectRatio, Avatar, Box, Button, Card, CardBody, Center, Container, Divider, Flex, Heading, Image, Link, ListItem, OrderedList, Spinner, Stack, Text, UnorderedList, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import NavBarFilter from '../../Components/NavBar/NavBarFilter/NavBarFilter'
import { Link as RouterLink } from 'react-router-dom'
import { BiBath, BiBed, BiHeart, BiImage, BiShare, BiVideo } from 'react-icons/bi'
import { FaRegStar, FaStar, FaToilet } from 'react-icons/fa6'
import { CiLocationOn, CiWifiOn } from 'react-icons/ci'
import { AiOutlineQuestion, AiOutlineQuestionCircle } from 'react-icons/ai'
import VerifiedListing from '../../Components/VerifiedListing/VerifiedListing'
import Subscribe from '../../Components/VerifiedListing/Subscribe'
import { LiaBedSolid, LiaSwimmingPoolSolid, LiaToiletSolid } from 'react-icons/lia'
import { PiBathtubLight, PiPhone, PiPhoneCall } from 'react-icons/pi'
import { IoCarSportOutline } from 'react-icons/io5'
import { RxDimensions } from 'react-icons/rx'
import { BsWhatsapp } from 'react-icons/bs'
import { useLocation, useParams } from 'react-router-dom'
import useShowToast from '../../hooks/useShowToast'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { auth, firestore } from '../../FireBase/FireBase'
import usePostStore from '../../store/postStore'
import useAuthStore from '../../store/authStore'
import useSetPreferences from '../../hooks/useSetPreferences'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GrFan } from 'react-icons/gr'
import { GiSolarPower, GiSpikedFence } from 'react-icons/gi'
import { RiRemoteControlLine } from 'react-icons/ri'
import Media from '../../Components/Media/Media'
import useFormateDate from '../../hooks/useFormateDate'
import Offline from '../../Components/ErrorComp/Offline'
import useSearchStore from '../../store/searchStore'

const Property = () => {
    const {isOpen, onOpen, onClose}  = useDisclosure()
    const [user, loading, error] = useAuthState(auth)
    const {desc} = useParams()
    const location = useLocation()
    const {post, isLoading} = useGetSinglePost(desc)
    const showToast = useShowToast()
    const pgnf = post.length === 0 && !isLoading
    const states = `Abia Adamawa Akwa Ibom Anambra Bauchi Bayelsa Benue Borno Cross River Delta Ebonyi 
        Edo Ekiti Enugu Gombe Imo Jigawa Kaduna Kano Katsina Kebbi Kogi Kwara Lagos Nasarawa Niger Ogun Ondo 
        Osun Oyo Plateau Rivers Sokoto Taraba Yobe Zamfara
    `
    const userdata = useAuthStore(state => state.user)
    const {formateDate} = useFormateDate()
    const {setPreferences} = useSetPreferences(user ? userdata.uid : null)
    function containsId(array, searchId) {
      for (let obj of array) {
          if (String(obj.id) === searchId) {
              return true;
          }
      }
      return false;
    }
    // console.log(post)
    const [param, setParam] = useState({
        exempt: post[0]?.id,
        sale_type: 'any',
        searched: post[0]?.address,
        // type: ,
        isfeatured: post[0]?.isFeatured,
    })
    useEffect(() => {
        setParam({
            exempt: post[0]?.id,
            sale_type: 'any',
            searched: post[0]?.address,
            isfeatured: post[0]?.isFeatured,
        })
    }, [post])
    // console.log(param)
    const result = user? containsId(userdata.saved_properties, post[0]?.id): ''
    const [liked, setLiked] = useState(result)
    const setUser = useAuthStore((state) => state.setUser)
    const {posts, isLoading_01} = useGetPostsWithExecption(param)
    // console.log(posts)
    let custom_fea = []
    post[0]?.custom_features?.map((feature) => {
        custom_fea.push(`${Object.keys(feature)[0]}: ${feature[Object.keys(feature)[0]]}`)
    })
    const fea = post[0]?.indoor_features.concat(post[0]?.outdoor_features).concat(custom_fea)
    const handleSavedProperties = () => {
        if(!navigator.onLine) {
            showToast('Error', 'Client is offline', 'error')
        }
        setLiked(!liked)
       if(!liked) {
            userdata.saved_properties.push(post[0])
            setPreferences({saved_properties: userdata.saved_properties})
            localStorage.setItem("user-info", JSON.stringify(userdata));
       }
        else {
            setUser({...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc.id !== post[0]?.id)})
            const newData = {...userdata, saved_properties: userdata.saved_properties.filter((doc) => doc.id !== post[0]?.id)}
            localStorage.setItem("user-info", JSON.stringify(newData));
            setPreferences({saved_properties: newData.saved_properties})
        }
    }

    const seticon_feature_pair = (feature) => {
        let icon
        if(feature == 'air conditioning') icon = <GrFan size={24} />
        if(feature == 'swimming pool') icon = <LiaSwimmingPoolSolid size={24} />
        if(feature == 'garage' || feature.includes('parking')) icon = <Image src='/garage.png' />
        if(feature == 'internet') icon = <CiWifiOn size={24} />
        if(feature.includes('fence')) icon = <GiSpikedFence size={24} />
        if(feature.includes('solar')) icon = <GiSolarPower size={24} />
        if(feature.includes('toilet')) icon = <LiaToiletSolid size={24} />
        if(feature.includes('remote')) icon = <RiRemoteControlLine size={24} />
        if(feature.includes('size') || feature.includes('dimension')) icon = <RxDimensions size={24} />
        if(feature.includes('water') || feature.includes('heater')) icon = <Image src='/water-heater.png' /> 
        if(feature.includes('shed')) icon = <Image src='/shop.png' />
        if(feature.includes('balcony')) icon = <Image src='/balcony.png' />
        if(feature.includes('wardrobe')) icon = <Image src='/wardrobe.png' />
        if(feature.includes('alarm')) icon = <Image src='/bell-alarm.png' />
        if(feature.includes('water') && !feature.includes('heater')) icon = <Image src='/water-tank.png' />
        if(feature.includes('ensuite') || feature.includes('bath')) icon = <Image src='/shower.png' />
        return (
            <Box display={'flex'} width = {{base: 'full',  md: 'calc(50% - 0.5rem)'}}
                gap={1} alignItems={'center'} key={feature}
            >
                {/* <RxDimensions size={24}/> */}
                {icon}
                <Text textTransform={'capitalize'}> {feature} </Text>
            </Box>
        )
    }


    const set_custom_feature_pair = (feature) => {
        let icon
        if(Object.keys(feature)[0] == 'air conditioning') icon = <GrFan size={24} />
        if(Object.keys(feature)[0] == 'swimming pool') icon = <LiaSwimmingPoolSolid size={24} />
        if(Object.keys(feature)[0] == 'garage' || Object.keys(feature)[0].includes('parking')) icon = <Image src='/garage.png' />
        if(Object.keys(feature)[0] == 'internet') icon = <CiWifiOn size={24} />
        if(Object.keys(feature)[0].includes('bath')) icon = <Image src='/shower.png' />
        if(Object.keys(feature)[0].includes('fence')) icon = <GiSpikedFence size={24} />
        if(Object.keys(feature)[0].includes('solar')) icon = <GiSolarPower size={24} />
        if(Object.keys(feature)[0].includes('toilet')) icon = <LiaToiletSolid size={24} />
        if(Object.keys(feature)[0].includes('remote')) icon = <RiRemoteControlLine size={24} />
        if(Object.keys(feature)[0].includes('size') || Object.keys(feature)[0].includes('dimension')) icon = <RxDimensions size={24} />
        if(Object.keys(feature)[0].includes('bed')) icon = <BiBed size={24} />
        if(Object.keys(feature)[0].includes('water') || Object.keys(feature)[0].includes('heater')) icon = <Image src='/water-heater.png' /> 
        if(Object.keys(feature)[0].includes('shed')) icon = <Image src='/shop.png' />
        if(Object.keys(feature)[0].includes('balcony')) icon = <Image src='/balcony.png' />
        if(Object.keys(feature)[0].includes('wardrobe')) icon = <Image src='/wardrobe.png' />
        if(Object.keys(feature)[0].includes('alarm')) icon = <Image src='/bell-alarm.png' />
        if(Object.keys(feature)[0].includes('water') && !Object.keys(feature)[0].includes('heater')) icon = <Image src='/water-tank.png' />
        if(Object.keys(feature)[0].includes('ensuite') || [Object.keys(feature)].includes('bath')) icon = <Image src='/shower.png' />
        // console.log(Object.keys(feature)[0])
        return (
            <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                {icon}
                <Text> {feature[Object.keys(feature)]} </Text>
            </Box>
        )
    }
    
    const det_sale_type = (type) => {
        if(type === 'buy') return 'sale'
        if(type === 'rent') return 'rent'
    }
    if (isLoading) {
        return <PageLayoutSpinner />
    }
    if(pgnf) return <Offline />
    // if(pgnf) return (
    //     <Flex 
    //                 bg={'white'} my={3}
    //                 bottom={0} w={'full'} p={3} gap={4} alignItems={'center'}
    //             >
    //                 <Link href="https://wa.me/2348063325729" borderRadius={'6px'} height={'2.5rem'} display={'flex'} justifyContent={'center'}
    //                  alignItems={'center'} target='_blank' bg={'#34eb67'} p={3} w={{base: '50%', sm: '45%', md: '40%'}} _hover={{opacity: 0.5}}
    //                 >
    //                     <Flex alignItems={'center'} gap={1}>
    //                         <BsWhatsapp />
    //                         <Text>Chat</Text>
    //                     </Flex>
    //                 </Link>
    //                 <Link href='tel:+2348142355996' borderRadius={'6px'} height={'2.5rem'} display={'flex'} justifyContent={'center'} 
    //                  alignItems={'center'} target='_blank' bg={'#34eb67'} p={3} w={{base: '50%', sm: '45%', md: '40%'}} _hover={{opacity: 0.5}}
    //                 >
    //                     <Flex alignItems={'center'} gap={1}>
    //                         <PiPhoneCall />
    //                         <Text>Call</Text>
    //                     </Flex>
    //                 </Link>
    //             </Flex>
    // )

  return (<>
    <NavBarFilter />
    <Box bg={'rgb(26 62 52)'} color={'white'} w={'full'}  mt={{base: '98px', sm:'112px', lg: '64px'}} py={4} textAlign={'center'} textTransform={'uppercase'}> {post[0]?.agent || 'Housing solutions'} </Box>
    {/* <Container maxW={'7xl'}  mt={{base: '204px', md:'182px', lg: '104px'}}> */}
    <Box w={'full'}>
        <Flex gap={3} >
            <Box w={'full'} gap={3}>
               <Flex>
                <VStack bg={'ButtonFace'} w={'30%'} gap={{base: '3', xl: 15}} px={3} display={{base: 'none', lg: 'flex'}}>
                    <Flex justifyContent={'flex-end'} w={'full'} pt={4}>
                        <Flex gap={3}>
                            <Button ><BiShare size={'24'}/></Button>
                            {user ? (
                                <Button onClick={handleSavedProperties}>
                                    {liked? <FaStar color='yellow' size={'24'}/> : <FaRegStar size={24} />}
                                </Button>
                            ): (
                                <Button>
                                    <FaRegStar size={24} />
                                </Button>
                            )
                            }
                        </Flex>
                    </Flex>
                    <Text fontWeight={'700'} fontSize={30} textTransform={'capitalize'}> Brand New 4 Bedroom Terrace Duplex</Text>
                    <Box py={4} w={'full'}>
                        <Text><b> {post[0]?.address.join(' ')} </b></Text> 
                      <Flex py={2} gap={3} wrap={'wrap'} textTransform={'capitalize'}>
                        {post[0]?.custom_features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                {set_custom_feature_pair(feature)}
                            </React.Fragment>
                        ))}
                        <Center h={'full'}>
                            <Divider orientation='vertical' w={'2px'} bg={'gray'}/>
                        </Center>
                        <Box display={'flex'} gap={2} color={'white'}>
                            <Box bg={'rgb(26 62 52)'} borderRadius={'5px'}><Text p={1} px={2}> {post[0]?.type} </Text></Box>
                            <Box bg={'rgb(26 62 52)'} borderRadius={'5px'}><Text px={2} p={1}> For {det_sale_type(post[0]?.sale_type)} </Text></Box>
                        </Box>
                      </Flex>
                    </Box> 
                    <Text fontSize={24} px={2} fontWeight={'700'} w={'full'}>₦ {post[0]?.price} </Text>
                    <Text w={'full'}>
                        {post[0]?.inspections?.length > 0 ? (
                            <b>Inspection: {formateDate(post[0]?.inspections[0]?.date)} {post[0]?.inspections[0]?.time} 
                                {/* <Link pl={2} color={'blue'}>view all</Link> */}
                            </b>
                        ): (
                            <Text><b>No current inspection plans.</b></Text>
                        )
                        }
                    </Text>
                </VStack>
                <VStack w={{base: 'full',lg: '70%'}} gap={'4px'} position={'relative'}>
                    <AspectRatio w={'full'} ratio={{base: 5/4, md:5/3, lg: 5/2.3}}>
                      <Image 
                        // src='/web.avif'
                        src={post[0]?.images[0].src}
                        loading='lazy'
                        objectFit={'contain'}
                        // borderRadius={'10px'}
                        objectPosition={'center center'}
                        onClick={onOpen}
                    //   w={'200px'}
                    //   h={200}
                      />
                    </AspectRatio>
                    <Box display={{base: 'none', lg: 'flex'}} gap={'4px'} w={'full'}>
                        {/* <AspectRatio w={'33.3%'} ratio={5/2.4}>
                          <Image 
                            src='/web.avif'
                            loading='lazy'
                            objectFit={'cover'}
                            // borderRadius={'10px'}
                            objectPosition={'center center'}
                          />
                        </AspectRatio>
                        <AspectRatio w={'33.3%'} ratio={5/2.4}>
                          <Image 
                            src='/web.avif'
                            loading='lazy'
                            objectFit={'cover'}
                            // borderRadius={'10px'}
                            objectPosition={'center center'}
                          />
                        </AspectRatio>
                        <AspectRatio w={'33.3%'} ratio={5/2.4}>
                          <Image 
                            src='/web.avif'
                            loading='lazy'
                            objectFit={'cover'}
                            // borderRadius={'10px'}
                            objectPosition={'center center'}
                          />
                        </AspectRatio> */}
                        {post[0]?.images.slice(1,3).map((img, index) => (
                            <AspectRatio w={'33.3%'} key={index} ratio={5/2.4} onClick={onOpen}>
                            <Image 
                            //   src='/web.avif'
                              src={img.src}
                              loading='lazy'
                              objectFit={'cover'}
                              // borderRadius={'10px'}
                              objectPosition={'center center'}
                              onClick={onOpen}
                            />
                            </AspectRatio>
                        ))}
                        {post[0]?.videos.slice(0,1).map((vid, index) => (
                            <AspectRatio w={'33.3%'} key={index} maxH={'200px'}>
                                <video src={vid?.src} autoPlay muted loop height={'100%'}/>
                            </AspectRatio>
                        ))}
                        
                    </Box>
                    <Flex w={'max-content'} display={{base: 'flex', lg: 'none'}} 
                      position={'absolute'} justifyContent={'center'} alignItems={'center'}
                      zIndex={4} bottom={0} bg={'white'} mb={3} borderRadius={'10px'}
                    >
                            {/* <Button bg={'transparent'} p={2} leftIcon={<BiVideo />}>
                                {post[0]?.videos.length} Video
                            </Button>
                            <Button bg={'transparent'} p={2} leftIcon={<BiImage />}>
                                {post[0]?.images.length} Images
                            </Button> */}
                        <Media isOpen={isOpen} onClose={onClose} onOpen={onOpen} images={post[0]?.images} videos={post[0]?.videos} />
                    </Flex>
                </VStack>
              </Flex>
              <Container maxW={'800px'} pt={5} display={'flex'} gap={2}>
               <Box>
                <Flex gap={3} flexDirection={{base: 'column', md: 'row'}} display={{base: 'flex', lg: 'none'}} justifyContent={'space-between'}>
                    <Text fontSize={20} textTransform={'capitalize'}><b> {post[0]?.property_name_desc} </b></Text>
                    <Flex gap={3}>
                        {user ? (
                            <Button onClick={handleSavedProperties} leftIcon={liked ? <FaStar color='yellow' size={'24'}/> : <FaRegStar size={24} />}>
                                Add to favorites
                            </Button>
                        ): (
                            <Button leftIcon={<FaRegStar size={24} />}>
                                Add to favorites
                            </Button>
                        )}
                        <Button leftIcon={<BiShare />}>
                            Share
                        </Button>
                    </Flex>
                </Flex>
                <Flex py={2} gap={2} justifyContent={'space-between'} flexDir={{base: 'column-reverse'}} w={'full'} display={{base: 'flex', lg: 'none'}}>
                    <Text fontSize={20} fontStyle={'inherit'}><b>₦ {post[0]?.price} </b> </Text>
                    <Flex gap={{base: '3', sm: '4'}} flexWrap={'wrap'} fontSize={'clamp(14px, 3vw, 18px)'}>
                        {post[0]?.custom_features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                {set_custom_feature_pair(feature)}
                            </React.Fragment>
                        ))}
                        <Center h={'full'}>
                            <Divider orientation='vertical' w={'2px'} bg={'gray'}/>
                        </Center>
                        <Box bg={'rgb(26 62 52)'} display={'flex'} justifyContent={'center'} alignItems={'center'} px={2} color={'white'} borderRadius={'5px'}>
                            <Text textTransform={'capitalize'}> {post[0]?.type} </Text>
                        </Box>
                        <Box bg={'rgb(26 62 52)'} display={'flex'} justifyContent={'center'} alignItems={'center'} px={2} color={'white'} borderRadius={'5px'}>
                            <Text textTransform={'capitalize'}>for {det_sale_type(post[0]?.sale_type)} </Text>
                        </Box>
                    </Flex>
                </Flex>
                {post[0]?.inspections?.length > 0
                 ? (
                    <Text display={{base: 'flex', lg: 'none'}}><b> {formateDate(post[0]?.inspections[0]?.date)} 
                    {/* <Link pl={2} color={'blue'}>view all</Link> */}
                    </b></Text>
                    )
                    : (
                        <Text><b>No current inspection plans.</b></Text>
                    )
                }
                <Text className='main_text_color'><b>Property address</b></Text>
                <Box display={'flex'}  w={'max-content'} gap={3} borderRadius={3} py={2} alignItems={'center'}>
                    <CiLocationOn /> {post[0]?.address.join(' ')}
                </Box>
                <Box display={'flex'} gap={1} flexDirection={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
                    {/* <Text color={'gray'} fontSize={'small'}>Updated 08 Aug 2024, Added 06 Jun 2024</Text> */}
                    <Text color={'gray'} fontSize={'small'} display={'flex'} gap={1}> Added on {formateDate(post[0]?.createdAt)}</Text>
                    <Text fontSize={'small'} color={'gray'}><b> pid: {post[0]?.id} </b></Text>
                </Box>
                <Box >
                    <Box p={3}>
                        <Box display={'flex'}  w={'max-content'} justifyContent={'center'} borderRadius={3} py={2} alignItems={'center'}>
                            <Text className='main_text_color' fontSize={20}><b>Safety tips</b></Text>
                            <AiOutlineQuestionCircle size={'20'}/>
                        </Box>
                        <VStack gap={2}>
                            <OrderedList gap={2} >
                                <ListItem fontSize={'clamp(12px, 4vw, 18px)'}>Do not make any inspection fee without seeing the agent and property.</ListItem>
                                <ListItem fontSize={'clamp(10px, 4vw, 18px)'}>Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.</ListItem>
                                <ListItem fontSize={'clamp(10px, 4vw, 18px)'}>Ensure you meet the Agent in an open location.</ListItem>
                                <ListItem fontSize={'clamp(10px, 4vw, 18px)'}>
                                    The Agent does not represent PropertyPro and PropertyPro is not ListItemable for any monetary transaction between you and the Agent.
                                </ListItem>
                            </OrderedList>

                            {/* Description */}
                            <Divider bg={'gray'} my={2} h={'1px'}/>
                            <VStack w={'full'}>
                                <Text w={'full'} fontSize={24} className='main_text_color' textAlign={'start'}><b>Description</b></Text>
                                {/* <Text w={'full'} px={2}> LUXURY 2&3 BEDROOMS APARTMENTS WITH ELEVATOR</Text>
                                <Text w={'full'} px={2}> Location:  Lekki Lagos</Text>
                                <Text w={'full'} px={2}> Price: N450 Thousand (2 bedroom) and N100 million (3 bedroom) respectively</Text>
                                <UnorderedList gap={2} px={3}>
                                    <li>Do not make any inspection fee without seeing the agent and property.</li>
                                    <li>Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.</li>
                                    <li>Ensure you meet the Agent in an open location.</li>
                                    <li>
                                        The Agent does not represent PropertyPro and PropertyPro is not liable for any monetary transaction between you and the Agent.
                                    </li>
                                </UnorderedList> */}
                                {post[0]?.property_desc.split('\n').map((desc, index) => (
                                    <Text w={'full'} key={index}> {desc} </Text>
                                ))}
                                {/* {post[0]?.property_desc} */}
                            </VStack>
                        </VStack>
                    </Box>
                </Box>
                <Divider bg={'gray'} my={2} h={'1px'}/>
                <Box py={4}>
                    <Text fontSize={20} py={2}><b>Property features</b></Text>
                    <Flex gap={3} px={2} justifyContent={'space-between'} wrap={'wrap'}>
                        {fea?.map((feature, index) => (
                            <React.Fragment key={index}>
                                {seticon_feature_pair(feature)}
                            </React.Fragment>
                        ))}
                        {/* {post[0]?.outdoor_features.map((feature) => (
                            <React.Fragment key={feature}>
                                {seticon_feature_pair(feature)}
                            </React.Fragment>
                        ))} */}
                    </Flex>
                </Box>
                {/* <Card>
                    <
                </Card> */}
                <Flex 
                    bg={'white'} my={3}
                    bottom={0} w={'full'} p={3} gap={4} alignItems={'center'}
                >
                    <Button bg={'#34eb67'} p={3} leftIcon={<BsWhatsapp />}  w={{base: '50%', sm: '45%', md: '40%'}}>Enquire</Button>
                    <Button bg={'#34eb67'} p={3} leftIcon={<PiPhoneCall />} w={{base: '50%', sm: '45%', md: '40%'}}>
                        <a href='tel:+2348142355996'>Call</a>
                    </Button>
                </Flex>
                <VerifiedListing />
                <Subscribe />
               </Box>
               {/* <Box  boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}>
                <Box display={'flex'} gap={2} position={'absolute'} right={0}>
                    <Avatar name='Property agent'/>
                    <Box display={'flex'} flexDir={'column'}>
                        <Text>Property Agent</Text>
                        <a href='tel:+2348142355996'>08142355996</a>
                    </Box>
                </Box>
                <Heading></Heading>
               </Box> */}
              </Container>
            </Box>
        </Flex>

    </Box> 


    {/*  products */}
    <Box p={5} mt={{sm: '20px', md:'25px'}} mb={5}>
                    <Flex justifyContent={'space-between'} >
                        <Heading>Recommended properties</Heading>
                        <Link textDecor={'underline'}>see all</Link>
                    </Flex>
                    <Flex gap={2} w={'full'}
                     overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
                     scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}}  whiteSpace={'nowrap'}
                    >
                        {/* {[0,1,2,3,4,5,6].map((property, index) => (
                            <Card key={index} minW={'400px'}>
                                <CardBody>
                                    <AspectRatio maxW={'800px'} ratio={6/3}>
                                        <Image 
                                            src='/venice1.jpg'
                                            objectFit={'cover'}
                                            objectPosition={'center center'}
                                        />
                                    </AspectRatio>
                                    <Stack mt={6} spacing={3}>
                                        <Text ><b>5 BEDROOM DETACHED DUPLEX WITH POOL<br/>
                                           <span style={{color: 'purple', fontWeight: 600}}>500,000,000</span><br/>
                                           <span>Marine Land</span></b>
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))} */}
                        {posts?.map((property, index) => (
                            <Card key={index} minW={'400px'}>
                                <CardBody>
                                    <AspectRatio maxW={'800px'} ratio={6/3}>
                                        <Image 
                                            src={property?.images[0]?.src}
                                            objectFit={'cover'}
                                            objectPosition={'center center'}
                                        />
                                    </AspectRatio>
                                    <Stack mt={6} spacing={3}>
                                        <Text ><b> {property.property_name_desc} <br/>
                                           <span style={{color: 'purple', fontWeight: 600}}> {property?.price} </span><br/>
                                           <span> {property?.address.join(' ')} </span></b>
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </Flex>
                    {/* <UnorderedList display={'flex'} gap={3} w={'full'} overflow={'scroll'}>
                        {[0,1,2,3].map((property) => (
                            <Box key={property} w={'300px'}>
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
                            </Box>
                        ))}
                    </UnorderedList> */}
        </Box>

    {/* <Box bg={'white'} opacity={1} zIndex={4} display={{base: 'block', lg: 'none'}}>  */}
        <Flex 
          zIndex={999} position={'fixed'} bg={'white'}
          bottom={0} w={'full'} p={3} gap={4} alignItems={'center'}
          justifyContent={'center'} boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 1.0), 0 1px 2px 0 rgba(0, 0, 0, 1.0)'}
          display={{base: 'flex', xl: 'none'}}
        >
            <Link href="https://wa.me/2348063325729" borderRadius={'6px'} height={'2.5rem'} display={'flex'} justifyContent={'center'}
             alignItems={'center'} target='_blank' bg={'#34eb67'} p={3} w={{base: '50%', sm: '45%', md: '40%'}} _hover={{opacity: 0.5}}
            >
                <Flex alignItems={'center'} gap={1}>
                    <BsWhatsapp />
                    <Text>Chat</Text>
                </Flex>
            </Link>
            <Link href='tel:+2348142355996' borderRadius={'6px'} height={'2.5rem'} display={'flex'} justifyContent={'center'} 
                alignItems={'center'} target='_blank' bg={'#34eb67'} p={3} w={{base: '50%', sm: '45%', md: '40%'}} _hover={{opacity: 0.5}}
            >
                <Flex alignItems={'center'} gap={1}>
                    <PiPhoneCall />
                    <Text>Call</Text>
                </Flex>
            </Link>
        </Flex>
    {/* </Box> */}
  </>
  )

}

export default Property

function useGetSinglePost(desc) {
    const [isLoading, setIsLoading] = useState(false)
    const {post, setPost} = usePostStore()
    const showToast = useShowToast()
  
    useEffect(() => {
      const getPosts = async() => {
          setIsLoading(true)
          setPost([])
          try {
              const userRef = await getDoc(doc(firestore, "posts", desc));
            //   console.log(userRef)
              const isEmpty = Object.keys(userRef.data()).length === 0
              const post = []
              if(userRef.exists && !isEmpty) {
                post.push({...userRef.data(), id: userRef.id})
                setPost(post)
              }
          } catch (error) {
              showToast('Error', error.message,'error')
              console.log(error.message)
              setPost([])
          }finally {
              setIsLoading(false)
          }
      }
    getPosts()
      window.addEventListener('online', getPosts)
    },  [setPost, showToast])
    return {isLoading, post}
}

function useGetPostsWithExecption(param) {
    const [isLoading_01, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const {posts, setPosts} = usePostStore()
    const {setSearched} = useSearchStore()
    const showToast = useShowToast()

    console.log(posts)
    
    useEffect(() => {
        // console.log(param.searched)
        const getPosts = async() => {
            if(!param.exempt) return
            if(isLoading_01) return
            setIsLoading(true)
            setPosts([])
            console.log(param)
            try {
    
                let q = query(collection(firestore, 'posts'))
                if (param?.searched?.length !== 0) {
                    console.log('searched')
                  q = query(q, where('address', 'array-contains-any', param.searched))
                }
                if(param?.sale_type && param?.sale_type !== 'any') {
                    // console.log('sale_type')
                  q = query(q, where('sale_type', '==', param?.sale_type))
                }
                if(param?.type) {
                    // console.log('type')
                  q = query(q, where('type', '==', param?.type))
                }
                if(param?.isfeatured) {
                  console.log('fec')
                  q = query(q, where('isFeatured', '==', true))
                }
    
                const querySnapShot = await getDocs(q)
                const posts = []
                querySnapShot.forEach((doc) => {
                    posts.push({...doc.data(), id:doc.id})
                })
                posts.sort((a,b) => b.createdAt - a.createdAt)
    
                // getDocs(q).then((querySnapshot) => {
                //   querySnapshot.forEach((doc) => {
                //     posts.push({...doc.data(), id:doc.id})
                //     console.log(doc.id, " => ", doc.data());
                //   });
                // })
                setSearched([])
                setPosts(posts.filter(doc => doc.id !== param.exempt))
            } catch (error) {
                showToast('Error', error.message,'error')
                console.log(error)
                setPosts([])
            }finally {
                setIsLoading(false)
            }
        }
        getPosts()
    
    },  [setPosts, showToast, param])
    return {isLoading_01, posts}
}
const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};