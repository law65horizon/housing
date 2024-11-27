import { Box, Button, Container, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useAuthStore from '../../store/authStore'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import EditProfile from './EditProfile'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../FireBase/FireBase'

const ProfileDesc = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const userdata = useAuthStore(state => state.user)
    const {userProfile, isLoading} = useGetUserProfileById(userdata?.uid)
    console.log(userProfile)
    if(!loading && !user) return (
        <Navigate to={'/auth/sign_up'} />
      )
    return (
        <Container maxW={'5xl'} pt={3} pb={'40px'}>
            {loading ? (
                <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
                    <Spinner size='xl' />
               </Flex>
            ) : (
              <Flex gap={5} direction={{base: 'column', md: 'row'}}>
                <Box w={{base: 'full', md: '60%'}}>
                    <Heading py={4}>Profile</Heading>
                    <Text color={'gray'}>Welcome to your profile. Here you can edit your account details and explore the Privacy Centre.</Text>
                    <Box py={2}>
                        {userProfile?.map((profile) => (
                            <EditProfile profile={profile}  />
                        ))}
                    </Box>
                    {/* <Button>Add account details</Button> */}
                </Box>
                <Box 
                   boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}
                   borderRadius={'10px'} transform={{lg: 'translateY(40px)'}}
                >
                    <Box p={4} alignContent={'center'}>
                        <Image
                          src='/private.png'
                          w={'64px'}
                        />
                        <Text py={4} fontWeight={'600'} fontSize={20}>Understanding your privacy</Text>
                        <Text>Take control of your privacy and learn how we protect it</Text>
                        <Button variant={'outline'} mt={3} colorScheme='black'> Privacy centre</Button>
                    </Box>
                </Box>
              </Flex>
            )}
        </Container>
    )
}

export default ProfileDesc