import { AspectRatio, Box, Button, Card, CardBody, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom'
import React from 'react'
import useLogout from '../../hooks/useLogout'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../FireBase/FireBase'

const Profile = () => {
  const {handleLogout, isLoggingOut} = useLogout()
  const [user, loading, error] = useAuthState(auth)
  if(!loading && !user) return (
    <Navigate to={'/auth'} />
  )
  return (
    <Box>
      <Container maxW={'5xl'} pb={'40px'}>
        <Flex p={4} mb={'20px'} justifyContent={'space-between'} alignItems={'center'}>
          <Heading>Profile</Heading>
          <Button bg={'black'} color={'white'}
            onClick={handleLogout} isLoading={isLoggingOut}
          >
            Log out
          </Button>
        </Flex>
        <Flex gap={3} wrap={{base: 'nowrap', md: 'wrap'}} direction={{base: 'column', md: 'row'}}>
          <Card w={{base: 'full', md: '42%', lg: '30%'}} 
            boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
            borderRadius={'10px'} as={RouterLink} to={'/searches'}
          >
            <CardBody>
              <Image 
                src='/property.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>Saved Searches</b></Text>
              <Text>View your saved searches.</Text>
            </CardBody>
          </Card>
          <Card w={{base: 'full', md: '42%', lg: '33%'}} 
            boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
            borderRadius={'10px'} as={RouterLink} to={'/saved-properties'}
          >
            <CardBody>
              <Image 
                src='/homes.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>My saved properties</b></Text>
              <Text>View open times and auctions for properties you've saved.</Text>
            </CardBody>
          </Card>
          <Card w={{base: 'full', md: '42%', lg: '33%'}} 
            boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}
            borderRadius={'10px'} as={RouterLink} to={'/profile'}
          >
            <CardBody>
              <Image 
                src='/id.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>My profile</b></Text>
              <Text>Manage your personal details.</Text>
            </CardBody>
          </Card>
          <Card w={{base: 'full', md: '42%', lg: '33%'}} 
            boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
            borderRadius={'10px'} as={RouterLink} to={'/settings'}
          >
            <CardBody>
              <Image 
                src='/settings.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>Settings</b></Text>
              <Text>Manage your login details, notifications and privacy settings.</Text>
            </CardBody>
          </Card>
          <Card w={{base: 'full', md: '42%', lg: '33%'}} boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} borderRadius={'10px'} as={RouterLink}>
            <CardBody>
              <Image 
                src='/owned-prop.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>Owned properties</b></Text>
              <Text>View rented our purchased properties.</Text>
            </CardBody>
          </Card>
        </Flex>
        {/* <Flex gap={3} wrap={{base: 'nowrap', md: 'wrap', lg: 'nowrap'}} direction={{base: 'column', md: 'row'}}>
          <Card w={{base: 'full', md: '42%', lg: '33%'}} boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} borderRadius={'10px'} as={RouterLink}>
            <CardBody>
              <Image 
                src='/id.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>My profile</b></Text>
              <Text>Manage your personal details.</Text>
            </CardBody>
          </Card>
          <Card w={{base: 'full', md: '42%', lg: '33%'}} boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} borderRadius={'10px'} as={RouterLink}>
            <CardBody>
              <Image 
                src='/settings.png'
                w={'64px'}
                // objectFit={'cover'}
              />
              <Text py={4} color={'gray'}><b>Settings</b></Text>
              <Text>Manage your login details, notifications and privacy settings.</Text>
            </CardBody>
          </Card>
        </Flex> */}
      </Container>
    </Box>
  )
}

export default Profile