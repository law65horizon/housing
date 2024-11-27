import { Box, Button, Link, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

const HospitalityHub = ({showNav, setShowNav}) => {
    const [showContent, setShowContent] = useState(false)
    const [isLargerThan800] = useMediaQuery('(min-width: 991px)')
    // console.log(showNav)

    
  
    // return (<>
    //   {!showNav ? (
    //     <Box id='services' position={'relative'}
    //      onMouseEnter={() => setShowContent(true)}
    //      onMouseLeave={() => setShowContent(false)}
    //      onClick={() => setShowContent(!showContent)}
    //      gap={1} display={{lg: 'none', xl: 'block'}}
    //     >
    //         <Button bg={'transparent'} mb={1} p={{lg: 1, xl: 2}}> 
    //             <Text className='main_text_color txt-size' fontWeight={700} mt={1} >Hospitality</Text>
    //         </Button>
    //         {showContent && (
    //         <VStack position={'fixed'} gap={4} id='service'
    //           bg={'white'}  zIndex={999}
    //           boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
    //           borderRadius={'5px'}
    //         >
    //           {/* <Link w={'full'} as={RouterLink} to={'/buy'} onClick={() => setShowNav(false)} px={3} textTransform={'capitalize'}>Inspections</Link>
    //           <Link w={'full'} as={RouterLink} to={'/rent'} px={3} textTransform={'capitalize'}>Recreational facilities</Link>
    //           <Link w={'full'} px={3} textTransform={'capitalize'}>Conference halls</Link> */}
    //           <Link w={'full'} as={RouterLink} to={'/hospitality_hub'} px={3} textTransform={'capitalize'}> Hotels/Conference Hall Booking & reservations</Link>
    //           {/* <Link w={'full'} px={3} textTransform={'capitalize'}>Hotels </Link>
    //           <Link w={'full'} px={3} textTransform={'capitalize'}>Locations </Link> */}
    //         </VStack>
    //         )}
    //     </Box>
    //     ) : (
    //     <Box id='services'
    //      gap={1} fontWeight={'bold'} className='main_text_color'
    //     >
    //         <Button h={'unset'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'}  m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
    //             <Text className='main_text_color' fontSize={'1.5em'} >Hospitality</Text>
    //             {showContent ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
    //         </Button>
    //         {showContent && (
    //         <VStack gap={4} py={2}
    //           bg={'white'} fontSize={'1.17em'}
    //         >
    //           {/* <Link w={'full'} as={RouterLink} to={'/buy'} pl={6} textTransform={'capitalize'}>Inspections</Link>
    //           <Link w={'full'} pl={6} textTransform={'capitalize'}>Recreational facilities</Link>
    //           <Link w={'full'} pl={6} textTransform={'capitalize'}>Conference halls</Link> */}
    //           <Link w={'full'} as={RouterLink} to={'/hospitality_hub'} pl={6} textTransform={'capitalize'}>Hotel/Conference Hall Booking & reservations</Link>
    //           {/* <Link w={'full'} pl={6} textTransform={'capitalize'}>Hotels</Link>
    //           <Link w={'full'} pl={6} textTransform={'capitalize'}>Locations</Link> */}
    //         </VStack>
    //         )}
    //     </Box>
    //     )
    //   }
    // </>)

    return(<>
      {!showNav? (
        <Box p={0} m={0}>
        <Button bg={'transparent'} mb={1} p={{lg: 1, xl: 2}} pr={{sm: 0, xl: 2}} _hover={{bg: 'transparent'}} as={RouterLink} to={'hospitality_hub'}>
          <Text className='main_text_color txt-size' fontWeight={700} mt={1}>Hospitality </Text>
        </Button>
      </Box>
      ): (
        <Box id='services'
         gap={1} className='main_text_color' fontWeight={'bold'}
        >
            <Button h={'unset'} as={RouterLink} to={'hospitality_hub'} bg={'transparent'} fontSize={'clamp(10px, 6vw, 20px)'} fontWeight={'bold'} m={0} onClick={() => setShowContent(!showContent)} _hover={{bg: 'transparent'}}>
              <Text className='main_text_color' fontSize={'1.5em'}>Hospitality </Text>
            </Button>
        </Box>
      )}
    </>)
}

export default HospitalityHub