import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'
import usePostStore from '../../../../store/postStore'
import useShowToast from '../../../../hooks/useShowToast'

const Services = ({showNav, setShowNav}) => {
  const {setPosts} = usePostStore()
  const showToast = useShowToast()
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
                <Text className='main_text_color txt-size' fontWeight={700} mt={1}>Services </Text>
            </Button>
            {showContent && (
            <VStack position={'fixed'} gap={4} 
              bg={'white'} p={2} zIndex={999}
              boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
              borderRadius={'5px'}
            >
              <Link w={'full'} as={RouterLink} to={'/buy'} onClick={() => setShowNav(false)} px={3} textTransform={'capitalize'}>Flats & Apartment for sale</Link>
              <Link w={'full'} as={RouterLink} to={'/rent'} px={3} textTransform={'capitalize'}>Flats & Apartment for rent</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>Shortlet Apartments</Link>
              <Link w={'full'} as={RouterLink} to={'/any?type-land'} px={3} textTransform={'capitalize'}>Purchase Land spaces</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>Purchase Office spaces </Link>
            </VStack>
            )}
        </Box>
        ) : (
        <Box id='services'
         gap={1} className='main_text_color' fontWeight={'bold'}
        >
            <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
              <Text className='main_text_color' fontSize={'1.5em'}>Services </Text>
              {/* <h2>dosi</h2> */}
              {showContent ? <GoTriangleUp size={30} /> : <GoTriangleDown size={30} />}
            </Button>
            {showContent && (
            <VStack gap={4} py={2}
              bg={'white'} fontSize={'1.17em'} onClick={(() => showToast('success', 'jdojdo', 'success'))}
            >
              <Link w={'full'} as={RouterLink} to={'/buy'} pl={6} textTransform={'capitalize'}>Flats & Apartment for sale</Link>
              <Link w={'full'} as={RouterLink} to={'/rent'} pl={6} textTransform={'capitalize'}>Flats & Apartment for rent</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Shortlet Apartments</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Purchase Land spaces</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Purchase Office spaces </Link>
            </VStack>
            )}
        </Box>
        )
      }
    </>)
}

export default Services