import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const Mentorship = ({showNav}) => {
    const [showContent, setShowContent] = useState(false)
    return (<>
    {!showNav? (
      <Box position={'relative'}
      cursor={'pointer'}
      onMouseLeave={() => setShowContent(false)}
      onMouseEnter={() => setShowContent(true)}
      onClick={() => setShowContent(!showContent)} 
    >
      <Button
        bg={'transparent'} mb={1} p={{lg: 1, xl: 2}} pr={{sm: 0, xl: 2}} _hover={{bg: 'transparent'}}
      >
        <Text className='main_text_color txt-size' fontWeight={700} mt={1} >Mentorship </Text> 
      </Button>
      {showContent && (
        <VStack position={'fixed'} gap={4} right={{sm: 0, lg: 'unset'}}
          bg={'white'} p={2} zIndex={999} opacity={1} 
          boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
          borderRadius={'5px'}
        >
          {/* <Link w={'full'} px={3} textTransform={'capitalize'}>Landlords & tenants mentorship</Link>
          <Link w={'full'} px={3} textTransform={'capitalize'}>I.T internship</Link>
          <Link w={'full'} px={3} textTransform={'capitalize'}>Attend a mentorship class</Link> */}
          <Link w={'full'} px={3} textTransform={'capitalize'} as={RouterLink} to={'/mentorship/agent-training'}>Training for property agents</Link>
          <Link w={'full'} px={3} textTransform={'capitalize'}>Landlords & tenants relationships</Link>
          <Link w={'full'} px={3} textTransform={'capitalize'}>Investors awareness</Link>
          {/* <Link w={'full'} px={3} textTransform={'capitalize'}>Training school - operation know your rights</Link>
          <Link w={'full'} px={3} textTransform={'capitalize'}>Real estate companies</Link>
          <Link w={'full'} px={3} textTransform={'capitalize'}>Real estate investors (ROI)</Link> */}
        </VStack>
      )}
      </Box>
    ) : (
      <Box position={'relative'}
          cursor={'pointer'}
          onClick={() => setShowContent(!showContent)}
        >
          <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
            <Text className='main_text_color' fontSize={'1.5em'}>Mentorship </Text>
            {showContent ? <GoTriangleUp size={30} /> : <GoTriangleDown size={30} />}
          </Button>
          {showContent && (
            <VStack gap={4}
              bg={'white'}  
            >
              {/* <Link w={'full'} pl={6} textTransform={'capitalize'}>Landlords & tenants mentorship</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>I.T internship</Link> */}
              {/* <Link w={'full'} pl={6} textTransform={'capitalize'}>Attend a mentorship class</Link> */}
              <Link w={'full'} pl={6} textTransform={'capitalize'} as={RouterLink} to={'/mentorship/agent-training'}>Training for property agents</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Landlords and tenants relationships</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Investors awareness</Link>
              {/* <Link w={'full'} pl={6} textTransform={'capitalize'}>Training school - operation know your rights</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Real estate companies</Link>
              <Link w={'full'} pl={6} textTransform={'capitalize'}>Real estate investors (ROI)</Link> */}
            </VStack>
          )}
        </Box>
    )}
    </>
    )
}

export default Mentorship