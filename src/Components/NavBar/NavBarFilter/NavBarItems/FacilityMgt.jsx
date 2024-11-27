import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const FacilityMgt = ({showNav, setShowNav}) => {
    const [showContent, setShowContent] = useState(false)
    // console.log(showNav)

    return (<>
      {!showNav ? (
        <Box id='services'
         onMouseEnter={() => setShowContent(true)}
         onMouseLeave={() => setShowContent(false)}
         onClick={() => setShowContent(!showContent)}
         gap={1} display={{lg: 'block', xl: 'block'}}
        >
            <Button bg={'transparent'} mb={1} p={{lg: 1, xl: 2}} pr={{sm: 0, xl: 2}} _hover={{bg: 'transparent'}}>
                <Text className='main_text_color txt-size' fontWeight={700} mt={1}>Facility Mgt. </Text>
            </Button>
            {showContent && (
            <VStack position={'fixed'} gap={4} 
              bg={'white'} p={2} zIndex={999}
              boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
              borderRadius={'5px'}
            >
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process'} onClick={() => setShowNav(false)} px={3} textTransform={'capitalize'}>Application process</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/apartment-management'} px={3} textTransform={'capitalize'}>Apartment/Hotels Management</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/tac#landlords'} px={3} textTransform={'capitalize'}>Terms and conditions</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>landlord subscription form</Link>
              {/* <Link w={'full'} px={3} textTransform={'capitalize'}>electrical challenges </Link> */}
            </VStack>
            )}
        </Box>
        ) : (
        <Box id='services' gap={1} className='main_text_color' fontWeight={'bold'}>
            <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
              <Text className='main_text_color' fontSize={'1.5em'}>Facility Mgt. </Text>
              {showContent ? <GoTriangleUp size={30} /> : <GoTriangleDown size={30} />}
            </Button>
            {showContent && (
            <VStack gap={4}  py={2}
              bg={'white'} fontSize={'1.17em'}
            >
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process'} pl={6} textTransform={'capitalize'}>Application process</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/apartment-management'} pl={6} textTransform={'capitalize'}>Apartment/Hotels Management</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/tac#landlords'} pl={6} textTransform={'capitalize'}>Terms and conditions</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>landlord subscription form</Link>
              {/* <Link w={'full'} pl={6} textTransform={'capitalize'}>electrical challenges </Link> */}
            </VStack>
            )}
        </Box>
        )
      }
    </>)
}

export default FacilityMgt