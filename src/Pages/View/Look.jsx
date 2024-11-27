import { AspectRatio, Box, Center, Divider, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiBed } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa6'

const Look = () => {
  return(
    <Box boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
      borderRadius={'10px'} maxW={'600px'} m={5} p={2} color={'white'} position={'relative'}
    >
      <Box position={'absolute'} p={2} pt={8} pr={8} top={0} right={0} zIndex={2}>
        <Box bg={'rgb(26 62 52)'} p={2} px={3}>
          Housing Solutions
        </Box>
      </Box>
      <Box>
        <AspectRatio maxW={'full'}>
          <Image 
            src='/venice1.jpg'
            objectFit={'cover'}
            objectPosition={'center center'}
          />
        </AspectRatio>
      </Box>
      <Box position={'absolute'} color={'white'} w={'full'} display={'flex'} flexDir={'column'} gap={1} p={2} bottom={0} pl={4} pb={4} zIndex={4} left={0}>
        <Box bg={'rgb(26 62 52)'} w={'200px'} p={2} display={'flex'} gap={2} alignItems={'center'}>
          <Box p={2} borderRadius={'50%'} w={'max-content'} bg={'white'}>
            <Image src='/homes.png' w={'24px'}/>
          </Box>
          <Box px={2}>
            <Text lineHeight={'20px'}><b>Preomain St. ____ msoaiowio ss</b></Text>
          </Box>
        </Box>
        <Box bg={'rgb(26 62 52)'} w={'98%'} p={2}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} w={'full'} color={'white'} gap={2} alignItems={'center'} justifyContent={'space-between'}>
              <Text> ₦1232</Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} w={'full'} color={'gray'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <Text> pid: d2soidosisoioidosio</Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={2}>
              <FaRegStar size={24} />
            </Box>
          </Box>
        </Box> 
        <Box bg={'rgb(26 62 52)'} w={'98%'} p={2}>
          <Box display={'flex'} textTransform={'capitalize'} justifyContent={'space-evenly'} gap={2}>
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <BiBed size={24}/>
              <Text> 3</Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <BiBed size={24}/>
              <Text> 3</Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <BiBed size={24}/>
              <Text> 3</Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <Text> house</Text>
              <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                <Divider orientation='vertical' bg={'gray'}/>
              </Center>
            </Box>
            <Box display={'flex'} color={'white'} gap={2} alignItems={'center'} justifyContent={'center'}>
              <Text> buy</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Look