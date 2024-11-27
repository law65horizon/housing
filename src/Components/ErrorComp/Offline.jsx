import { Divider, Text, Box, Heading, Container, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const Offline = () => {
  return (
    <Box>
        <Divider />
        <Container maxW={'5xl'}>
            <Box display={'flex'} pt={5} w={'full'} justifyContent={'center'} flexDir={'column'}>
                <Heading my={5} color={'black.100'}>Oh no,</Heading>
                <Text fontWeight={'unset'} mb={10}>There seems to be an issue with your request. Please check and try again. -
                  in the meantime, perhaps head back to our <Link color={'blue.500'} as={RouterLink} to={'/'}>hompage</Link> through our large collection of property listings.
                </Text>
            </Box>
        </Container>
        <Divider />
    </Box>
  )
}

export default Offline