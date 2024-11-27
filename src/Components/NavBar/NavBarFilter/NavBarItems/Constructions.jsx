import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const Constructions = ({showNav, setShowNav}) => {
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
            <Button bg={'transparent'} mb={1} p={{lg: 0, xl: 2}}>
                <Text className='main_text_color txt-size' fontWeight={700}>Constructions Team </Text>
            </Button>
            {showContent && (
            <VStack position={'fixed'} gap={4} 
              bg={'white'} p={2} zIndex={999}
              boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
              borderRadius={'5px'}
            >
              <Link w={'full'} as={RouterLink} to={'/buy'} onClick={() => setShowNav(false)} px={3} textTransform={'capitalize'}>Building artisians hiring</Link>
              <Link w={'full'} as={RouterLink} to={'/rent'} px={3} textTransform={'capitalize'}>Housing maintenance and repairs</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>roof leakages</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>plumbing issues</Link>
              <Link w={'full'} px={3} textTransform={'capitalize'}>electrical challenges </Link>
            </VStack>
            )}
        </Box>
        ) : (
        <Box id='services' gap={1} className='main_text_color' fontWeight={'bold'}>
            <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
              <Text className='main_text_color' fontSize={'1.5em'}>Constructions Team </Text>
              {showContent ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
            </Button>
            {showContent && (
            <VStack gap={4}  py={2}
              bg={'white'} fontSize={'1.17em'}
            >
              <Link w={'full'} as={RouterLink} to={'/buy'} pl={6} textTransform={'capitalize'}>Building artisians hiring</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Housing maintenance and repairs</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>roof leakages</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>plumbing issues</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>electrical challenges </Link>
            </VStack>
            )}
        </Box>
        )
      }
    </>)
}

export default Constructions