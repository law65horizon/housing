import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const RebrandingApartment = ({showNav, setShowNav}) => {
    const [showContent, setShowContent] = useState(false)
    // console.log(showNav)

    return (<>
      {!showNav ? (
        <Box id='services'
         onMouseEnter={() => setShowContent(true)}
         onMouseLeave={() => setShowContent(false)}
         onClick={() => setShowContent(!showContent)}
         gap={1} display={{lg: 'none', xl: 'block'}}
        >
            <Button bg={'transparent'} mb={1} >
                <Text className='main_text_color txt-size' fontWeight={700}>Apartment Rebrandings </Text>
            </Button>
            {showContent && (
            <VStack position={'fixed'} gap={4} 
              bg={'white'} p={2} zIndex={999}
              boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
              borderRadius={'5px'}
            >
              <Link w={'full'} as={RouterLink} to={'/buy'} onClick={() => setShowNav(false)} px={3} textTransform={'capitalize'}>Become property zonal manger</Link>
              <Link w={'full'} as={RouterLink} to={'/rent'} px={3} textTransform={'capitalize'}>Property inspection officer</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>multiple ways to earn networking</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>compensation plans</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>incentives </Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>Best performance awards </Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>Tenacy passive income earning </Link>
            </VStack>
            )}
        </Box>
        ) : (
        <Box id='services'
         gap={1}
        >
            <Button h={'unset'} bg={'transparent'} m={0} onClick={() => setShowContent(!showContent)}>
                <Text className='main_text_color' fontWeight={700}>Apartment Rebrandings </Text>
                {showContent ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
            </Button>
            {showContent && (
            <VStack gap={4} 
              bg={'white'} 
            >
              <Link w={'full'} as={RouterLink} to={'/buy'} pl={6} textTransform={'capitalize'}>Become property zonal manger</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Property inspection officer</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>multiple ways tnetworkingo earn ()</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>compensation plans</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>incentives </Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Best performance awards </Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Tenacy passive income earning </Link>
            </VStack>
            )}
        </Box>
        )
      }
    </>)
}

export default RebrandingApartment