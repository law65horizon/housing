import { Card, CardBody, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const DashBoard = () => {
  return (
    <>
     <Container maxW={'5xl'} py={5}>
      <Flex gap={3} flexWrap={'wrap'}>
        <Card w={{base: 'full', md: '42%', lg: '30%'}} 
          boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
          borderRadius={'10px'} as={RouterLink} to={'createpost'}
        >
          <CardBody>
            <Image 
              src='/create.png'
              w={'64px'}
                // objectFit={'cover'}
            />
            <Text pt={4} color={'gray'}><b>Add property</b></Text>
          </CardBody>
        </Card>

        {/* users  */}
        <Card w={{base: 'full', md: '42%', lg: '30%'}} 
          boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
          borderRadius={'10px'} as={RouterLink} to={'properties'}
        >
          <CardBody>
            <Image 
              src='/edit.png'
              w={'64px'}
                // objectFit={'cove9r'}
            />
            <Text pt={4} color={'gray'}><b>View and edit properties</b></Text>
          </CardBody>
        </Card>
        <Card w={{base: 'full', md: '42%', lg: '30%'}} 
          boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} 
          borderRadius={'10px'} as={RouterLink} to={'users'}
        >
          <CardBody>
            <Image 
              src='/multiple-users.png'
              w={'64px'}
                // objectFit={'cove9r'}
            />
            <Text pt={4} color={'gray'}><b>Manage Users</b></Text>
          </CardBody>
        </Card>
      </Flex>
     </Container>
    </>
  )
}

export default DashBoard