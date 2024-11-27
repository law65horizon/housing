import { Box, Button, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BiShield } from 'react-icons/bi'

const VerifiedListing = () => {
  return (
    <Box w={{base: 'full', sm: '80%', md: '550px'}} py={3}>
        <Flex boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} borderRadius={'10px'} gap={4} p={3}>
            <Flex gap={2} justifyContent={'center'} alignItems={'center'}>
                <BiShield size={'70'}/>
                <Box h={'full'}>
                    <Text className='main_text_color' fontSize={24}>Property is verified as real</Text>
                    <Text>If reported as fake, we'll investigate to confirm if
                    this listing isn't real.</Text>
                </Box>
            </Flex>
            <Button colorScheme='green' variant={'outline'}>Report</Button>
        </Flex>
    </Box>
  )
}

export default VerifiedListing