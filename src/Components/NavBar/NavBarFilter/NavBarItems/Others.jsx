import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const Others = ({showNav, setShowNav}) => {
    const [showContent, setShowContent] = useState(false)
    // console.log(showNav)

    return (<>
      {!showNav ? (
        <Box id='services'
         onMouseEnter={() => setShowContent(true)}
         onMouseLeave={() => setShowContent(false)}
         onClick={() => setShowContent(!showContent)}
         gap={1}
        >
            <Button bg={'transparent'} mb={1} p={{lg: 1, xl: 2}} pr={{sm: 0, xl: 2}} _hover={{bg: 'transparent'}}> 
                <Text className='main_text_color txt-size' fontWeight={700} mt={1} >Others</Text>
            </Button>
            {showContent && (
            <VStack position={'fixed'} gap={4} right={{sm: 0, lg: 'unset'}}
              bg={'white'} p={2} zIndex={999}
              boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
              borderRadius={'5px'}
            >
              <Link w={'full'} as={RouterLink} to={'/about_us'} onClick={() => setShowNav(false)} px={3} textTransform={'capitalize'}>About Us</Link>
              <Link w={'full'} as={RouterLink} to={'/rent'} px={3} textTransform={'capitalize'}>Contact Us</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>travel and work abroad</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>Privacy center</Link>
              {/* <Link w={'full'} px={3} textTransform={'capitalize'}>electrical challenges </Link> */}
            </VStack>
            )}
        </Box>
        ) : (
        <Box id='services'
         gap={1}
        >
            <Button h={'unset'} display={'flex'} alignItems={'center'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
              <Text className='main_text_color' fontSize={'1.5em'}>Others </Text>
              {showContent ? <GoTriangleUp size={30} /> : <GoTriangleDown size={30} />}
            </Button>
            {showContent && (
            <VStack gap={4} 
              bg={'white'} 
            >
              <Link w={'full'} as={RouterLink} to={'/about_us'} pl={6} textTransform={'capitalize'}>About Us</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Contact Us</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>travel and work abroad</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Privacy center</Link>
              {/* <Link w={'full'} pl={6} textTransform={'capitalize'}>electrical challenges </Link> */}
            </VStack>
            )}
        </Box>
        )
      }
    </>)
}

export default Others