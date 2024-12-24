import { Box, Card, Flex, Heading,Text, Image, VStack, Input, AlertIcon, Container, Link, CardBody, AspectRatio, Stack, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Explore from '../../Components/Explore/Explore'
import ExploreAdv from '../../Components/Explore/ExploreAdv'
import { Hero } from '../../Components/Hero/Hero'
import useGetPosts from '../../hooks/useGetPosts'
import { BiSearch } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa6'
import useGetFeaturedPosts from '../../hooks/useGetFeaturedPosts'

const HomePage = () => {
  const {posts, isLoading} = useGetPosts()
  const {featured_post, isLoadingFeatured_post} = useGetFeaturedPosts()
  const searches = JSON.parse(localStorage.getItem('searches'))
  console.log(featured_post.length)
  console.log(posts)
  return (
    <Box>
      <Hero />

      <Container maxW={'6xl'} mt={'75px'} pt={5}>

        {/* recent searches */}

        <Flex w={'full'} gap={2} justifyContent={'space-between'} overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
          scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}}  whiteSpace={'nowrap'}>
          {searches?.searched?.slice(0,3).map((property, index) => (
            <Flex borderRadius={'10px'} gap={2} p={2} key={index} w={'full'} justifyContent={'space-around'} alignItems={'center'} border={'1px solid gray'}>
              <Box w={'full'} display={'flex'} gap={3} pl={3} alignItems={'center'}>
                <BiSearch size={24} />
                <VStack w={'full'} gap={1}>
                  <Text w={'full'}> 
                    {(() => {if (property.searched.length < 1 ) {return 'Any Location'} else {return property.searched.join(' ').replace(/,/g, ' ')}})()} 
                  </Text>
                  <Text textTransform={'capitalize'} w={'full'} fontSize={'small'}> {property.sale_type} </Text>
                </VStack>
              </Box>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {true ? <FaRegStar size={24} /> : ''}
              </Box>
              {} 
            </Flex>
          ))}
        </Flex>

        {/* featured projects */}

        {featured_post.length > 0 && (<>
          <Flex justifyContent={'space-between'} p={5} alignItems={'end'}>
            <Heading>Featured Projects</Heading>
            <Link textDecor={'underline'} as={RouterLink} to={'/any?featured-true'}>see all</Link>
          </Flex>
        <Flex gap={3} flexDir={{base: 'column',md: 'row'}}>
          {isLoadingFeatured_post && [0,1].map((index) => (
            <Skeleton key={index} w={'800px'}>
              <Box h={'400px'}>contents wrapped</Box>
            </Skeleton>
          ))}
          {!isLoadingFeatured_post && featured_post.map((property, index) => (
            <Card>
            <CardBody>
              <AspectRatio maxW={'800px'} ratio={6/3}>
                <Image 
                  src={property?.images[0]?.src}
                  objectFit={'cover'}
                  objectPosition={'center center'}
                />
              </AspectRatio>
              <Stack mt={6} spacing={3}>
                <Heading textTransform={'uppercase'}> {property.featured_title} </Heading>
                <Flex w={'full'}>
                  <Text w={'80%'}> {property.property_name_desc || 'Homeland Development Co · 2 toilets · 3 baths · 4 bedrooms'} </Text>
                  <Box><Image src='/logo.png' /></Box>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
          ))}
          {/* <Card>
            <CardBody>
              <AspectRatio maxW={'800px'} ratio={6/3}>
                <Image 
                  src='/venice1.jpg'
                  objectFit={'cover'}
                  objectPosition={'center center'}
                />
              </AspectRatio>
              <Stack mt={6} spacing={3}>
                <Heading>The Venice</Heading>
                <Flex w={'full'}>
                  <Text w={'80%'}>Homeland Development Co · 2 toilets · 3 baths · 4 bedrooms</Text>
                  <Box><Image src='/logo.png' /></Box>
                </Flex>
              </Stack>
            </CardBody>
          </Card> */}
        </Flex>
        </>)}

        {/*  products */}
        <Box p={5} mt={{sm: '20px', md:'25px'}}>
          <Flex justifyContent={'space-between'}>
            <Heading>Featured Products</Heading>
            <Link as={RouterLink} to={'/any'} textDecor={'underline'}>see all</Link>
          </Flex>
          <Flex gap={3} w={'full'}
            overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
            scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}} pt={2}  whiteSpace={'nowrap'}
          >
           {/* {[0,1,2,3,4,5,6].map((property) => ( */}

            {isLoading || posts.length === 0  && [0,1,2,3].map((index) => (
              <Skeleton key={index} minW={'400px'}>
                <Box h={'300px'}>contents wrapped</Box>
              </Skeleton>
            ))}

           {!isLoading && posts?.map((property) => (
            <Card key={property.id} minW={'400px'}>
            <CardBody>
              <AspectRatio maxW={'800px'} ratio={6/3}>
                <Image 
                  // src='/venice1.jpg'
                  src={property?.images[0]?.src}
                  objectFit={'cover'}
                  objectPosition={'center center'}
                />
              </AspectRatio>
              <Stack px={3} mt={6} spacing={3}>
                <Text > {property?.property_name_desc} <br/>
                <span style={{color: 'rgb(26 62 52)', fontWeight: 700, fontSize: '26'}}> {property?.price} </span><br/>
                <span> {property?.address.join(' ')} </span></Text>
              </Stack>
            </CardBody>
           </Card>
           ))}
         </Flex>
        </Box>

        {/* explore */}
        {/* <Box>
          <Heading p={5}>Explore all things property</Heading>
          <Explore />
        </Box> */}

        {/* ExploreAdv */}
        <Box pt={5}>
          <ExploreAdv />
        </Box>
      </Container>
    </Box>
  )
}

export default HomePage

