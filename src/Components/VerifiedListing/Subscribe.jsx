import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Box boxShadow={'0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'} py={3} borderRadius={'10px'} w={{base: 'full', sm: '80%', md: '550px'}} >
        <Flex gap={4} justifyContent={'space-between'} alignItems={'center'}  p={4}>
           <Text lineHeight={8} fontSize={20} className='main_text_color'>
                <b>Receive alerts for<br/> new listings</b>
           </Text>
           <Button variant={'outline'} colorScheme='green'>
               Subscribe
           </Button>
        </Flex>
    </Box>
  )
}

export default Subscribe