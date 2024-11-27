import { Box, Button, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom'
import React from 'react'
import { LiaBedSolid } from 'react-icons/lia'
import { PiBathtubLight } from 'react-icons/pi'
import { IoCarSportOutline, IoNotifications } from 'react-icons/io5'
import { BsTrash3 } from 'react-icons/bs'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../FireBase/FireBase'

const Searches = () => {
    const [user, loading, error] = useAuthState(auth)
    if(!loading && !user) return (
        <Navigate to={'/auth'} />
    )
  return (
    <Container maxW={'6xl'} mt={'30px'}>
        <Heading>Saved Searches</Heading>
        <Flex gap={3} mt={'20px'} wrap={'wrap'}>
            {[0,1,2,3].map((property) => (
                <Box
                  boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
                  borderRadius={'10px'} as={RouterLink}
                  w={{base: 'full', md: '48%', lg: '30%'}} p={2}
                >
                    <Text mb={3} px={3} py={2}><b>Lekki, Lagos</b></Text>
                    <Divider bg={'gray'}/>
                    <Flex mt={3} px={3}>
                        <Text pr={3}>Buy</Text>
                        <Divider orientation='vertical' h={3} px={4}/>
                        <Text pl={3}>Any price</Text>
                    </Flex>
                    <Flex px={3} gap={3} pt={2}>
                        <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                           <LiaBedSolid size={24}/>
                           <Text>-</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                           <PiBathtubLight size={24}/>
                           <Text>-</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} gap={2} alignItems={'center'}>
                           <IoCarSportOutline size={24}/>
                           <Text>-</Text>
                        </Box>
                    </Flex>
                    <Text py={2} px={2}>
                        Lekki Lagos Ns18; including surrounding suburbs.
                    </Text>
                    <Flex justifyContent={'space-between'} pt={4} alignItems={'center'} px={2}> 
                        <Box>
                            <BsTrash3 size={24}/>
                        </Box>
                        <Button bg={'transparent'} leftIcon={<IoNotifications size={'24'}/>}>
                            Notify me
                        </Button>
                    </Flex>
                </Box>
            ))}
        </Flex>
    </Container>
  )
}

export default Searches