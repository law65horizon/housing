import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const EmploymentSourcing = ({showNav}) => {
    const [showContent, setShowContent] = useState(false)
  return (<>
    {!showNav ? (
      <Box position={'relative'}
      cursor={'pointer'}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
      gap={1}
      onClick={() => setShowContent(!showContent)}
      >
        <Button bg={'transparent'} mb={1} p={{lg: 1, xl: 2}} pr={{sm: 0, xl: 2}} _hover={{bg: 'transparent'}} >
          <Text className='main_text_color txt-size' fontWeight={700} mt={1} >Employment Sourcing</Text>
        </Button>
        {showContent && (
          <VStack position={'fixed'} gap={4}
            bg={'white'} p={2} zIndex={999} opacity={1} 
            boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
            borderRadius={'5px'} textDecoration={'none'}
            onMouseLeave={() => setShowContent(false)}
          >
            <Link w={'full'} px={3} textTransform={'capitalize'} as={RouterLink} to={'/employment/cleaning-fumigation'}>Industrial cleaning & fumigation</Link>
            <Link w={'full'} px={3} textTransform={'capitalize'} as={RouterLink} to={'/employment/artisians-hiring'}>Artisians/Skills hiring hub</Link>
            <Link w={'full'} px={3} textTransform={'capitalize'} as={RouterLink} to={'/employment/corporate-staffing'}>Corporate staffing</Link>
            <Link w={'full'} px={3} textTransform={'capitalize'} as={RouterLink} to={'/employment/domestic-staffing'}>Domestic staffing</Link>
            <Link w={'full'} px={3} textTransform={'capitalize'}>Prospective employees</Link>
            <Link w={'full'} px={3} textTransform={'capitalize'}>estate developer</Link>
            <Link w={'full'} px={3} textTransform={'capitalize'}>Training for job applicants</Link>
          </VStack>
        )}
      </Box>
     ): (
      <Box position={'relative'} className='main_text_color' cursor={'pointer'} fontWeight={'bold'} >
        <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
          <Text className='main_text_color' fontSize={'1.5em'}>Employment Sourcing </Text>
          {showContent ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
        </Button>
        {showContent && (
          <VStack gap={4} py={2}
            bg={'white'} fontSize={'1.17em'}
          >
            <Link w={'full'} pl={6} textTransform={'capitalize'} as={RouterLink} to={'/employment/cleaning-fumigation'}>Industrial cleaning & fumigation</Link>
            <Link w={'full'} pl={6} textTransform={'capitalize'} as={RouterLink} to={'/employment/artisians-hiring'}>Artisians/Skills hiring hub</Link>
            <Link w={'full'} pl={6} textTransform={'capitalize'} as={RouterLink} to={'/employment/corporate-staffing'}>Corporate staffing</Link>
            <Link w={'full'} pl={6} textTransform={'capitalize'} as={RouterLink} to={'/employment/domestic-staffing'}>Domestic staffing</Link>
            <Link w={'full'} pl={6} textTransform={'capitalize'}>Prospective employees</Link>
            <Link w={'full'} pl={6} textTransform={'capitalize'}>estate developer</Link>
            <Link w={'full'} pl={6} textTransform={'capitalize'}>Training for job applicants</Link>
          </VStack>
        )}
      </Box>
     )
    }
  </>)
}

export default EmploymentSourcing