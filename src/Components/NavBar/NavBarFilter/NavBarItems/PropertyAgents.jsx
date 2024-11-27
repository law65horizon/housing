import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const PropertyAgents = ({showNav, setShowNav}) => {
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
                <Text className='main_text_color txt-size' fontWeight={700} mt={1}>Property Agents </Text>
            </Button>
            {showContent && (
            <VStack position={'fixed'} gap={4} 
              bg={'white'} p={2} zIndex={999}
              boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
              borderRadius={'5px'}
            >
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process#benefits'} px={3} textTransform={'capitalize'}>Subscribers benefits</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process#benefits'} px={3} textTransform={'capitalize'}>How to subscribe</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process#earning'} px={3} textTransform={'capitalize'}>Earning platform</Link>
            </VStack>
            )}
        </Box>
        ) : (
        <Box id='services' gap={1} className='main_text_color' fontWeight={'bold'}>
            <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
              <Text className='main_text_color' fontSize={'1.5em'}>Property Agents </Text>
              {showContent ? <GoTriangleUp size={30} /> : <GoTriangleDown size={30} />}
            </Button>
            {showContent && (
            <VStack gap={4}  py={2}
              bg={'white'} fontSize={'1.17em'}
            >
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process#benefits'} pl={6} textTransform={'capitalize'}>Subscribers benefits</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process#benefits'} pl={6} textTransform={'capitalize'}>How to subscribe</Link>
              <Link w={'full'} as={RouterLink} to={'/mgt/application-process#earning'} pl={6} textTransform={'capitalize'}>Earning platform</Link>
            </VStack>
            )}
        </Box>
        )
      }
    </>)
}

export default PropertyAgents