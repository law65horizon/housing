import { AspectRatio, Box, Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import DynamicLoad from '../DynamicLoad/DynamicLoad'

const Explore = () => {
  const [activeElement, setActiveElement] = useState('buy_section')
  const active_element = (section) => {
    setActiveElement(section)
    const parentEle = document.getElementById('explore') 
    const buttons = parentEle.querySelectorAll('.button')
    buttons.forEach((button) => button.classList.remove('active_button'))
    const active_button = parentEle.querySelector(`button.${section}`)
    active_button.classList.add('active_button')
    // this.isActive = true
  }
  return (
    <Box py={5} id='explore'>
        <Flex gap={2} overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
          scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}}  whiteSpace={'nowrap'}
        > 
            <Button minW={'100px'} onClick={() => {active_element('buy_section')}} className='button buy_section active_button' bg={'transparent'} border={'1px solid black'} w={'max-content'} borderRadius={'25px'}>
                <Text px={4} py={2}>Buying</Text>
            </Button>
            <Button minW={'100px'} onClick={() => {active_element('sell_section')}} className='button sell_section' bg={'transparent'} border={'1px solid black'} w={'max-content'} borderRadius={'25px'}>
                <Text px={4} py={2}>Selling</Text>
            </Button>
            <Button minW={'100px'} bg={'transparent'} border={'1px solid black'} w={'max-content'} borderRadius={'25px'}>
                <Text px={4} py={2}>Researching</Text>
            </Button>
            <Button minW={'100px'} onClick={() => {active_element('rent_section')}} className='button rent_section' bg={'transparent'} border={'1px solid black'} w={'max-content'} borderRadius={'25px'}>
                <Text px={4} py={2}>Renting</Text>
            </Button>
        </Flex>

        <DynamicLoad activeElement={activeElement}>
        <Flex gap={3} py={3} className='load-child active' id='buy_section' flexWrap={{base: 'wrap', md: 'nowrap'}}>
          <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
           <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
           <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
        </Flex>

        {/* sell */}

        <Flex gap={3} py={3} className='load-child' id='sell_section' flexWrap={{base: 'wrap', md: 'nowrap'}}>
          <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>

           <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
           
           <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Research</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
        </Flex>
        <Flex gap={3} py={3} className='load-child' id='rent_section' flexWrap={{base: 'wrap', md:'nowrap'}}>
          <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
           <Card boxShadow={'unset'} w={{base: 'full', md: 'unset'}} border={'1px solid gray'}>
            <CardBody display={'flex'} gap={3} flexDir={{base: 'row', md: 'column'}}>
              <Box w={'35%'} mt={{base: '6', md: '0'}} display={'flex'} justifyContent={{base: 'unset', md: 'center'}} h={'full'} alignItems={{base: 'unset', md: 'center'}}>
                {/* <AspectRatio maxW={'120px'} ratio={2/1}> */}
                  <Image
                    src='/track.avif'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    width={{base: '60px', sm: '120px'}}
                    h={{base: '60px', sm: '120px'}}
                  />
                {/* </AspectRatio> */}
              </Box>
              <Stack mt={6} spacing={3}>
                <Text fontWeight={600}>Get estimated property prices with a realEstimate™ Buy</Text>
                <Text color={'gray'}>See how much your property's worth whether you own it or want to buy it.</Text>
                <Text color={'blue'}>Check Property values</Text>
              </Stack>
            </CardBody>
           </Card>
        </Flex>
        </DynamicLoad>
    </Box>
  )
}

export default Explore