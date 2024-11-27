import { Box, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const IndustrialCleaning = () => {
  return (
    <Box pb={12}>
        <Box className='main_bg' color={'white'} py={4}>
            <Container maxW={'8xl'}>
                <Heading>Industrial Cleaning and Fumigation</Heading>
            </Container>
        </Box>
        <Container maxW={'7xl'} mt={3} display={'flex'} flexDir={'column'} gap={2}>
            <Box>
                <Heading my={3}>Your Path to a Rewarding Career</Heading>
                <Text className='paragraph'>
                   At Housing Solutions Hub, we recognize the critical role that industrial cleaning and fumigation play in maintaining safe and 
                   healthy environments. We are dedicated to connecting skilled professionals with top employers in these essential sectors.
                </Text>
            </Box>
            <Box>
                <Heading my={3}>Why Work in Industrial Cleaning and Fumigation?</Heading>
                <UnorderedList display={'flex'} pl={3} flexDir={'column'} gap={1}>
                    <ListItem><b>Job Stability:</b></ListItem> 
                        <Text pb={2} className='paragraph'>The demand for cleaning and fumigation services continues to grow across various industries, ensuring a stable career path.</Text>
                    <ListItem><b>Impactful Work:</b></ListItem> 
                        <Text pb={2} className='paragraph'>Play a vital role in safeguarding public health and maintaining compliance with safety regulations.</Text>
                    <ListItem><b>Diverse Opportunities:</b></ListItem> 
                        <Text pb={2} className='paragraph'>Whether you’re interested in hands-on cleaning, management, or technical roles, we have a range of opportunities to suit your skills and aspirations.</Text>
                </UnorderedList>
            </Box>
            <Box>
                <Heading my={3}>Current Job Openings</Heading>
                <UnorderedList pl={3} display={'flex'} flexDir={'column'} gap={1}>
                    <ListItem><b>Industrial Cleaners</b></ListItem> 
                    <ListItem><b>Fumigation Technicians</b></ListItem> 
                    <ListItem><b>Safety Coordinators</b></ListItem> 
                </UnorderedList>
            </Box>
            <Box>
                <Heading my={3}>Join Our Team</Heading>
                <Text className='paragraph'>
                    If you’re passionate about creating cleaner, safer environments, we invite you to apply. We offer competitive salaries, comprehensive training, and opportunities for advancement. 
                </Text>
            </Box>
            <Box>
                <Heading my={3}>How to Apply</Heading>
                <Text className='paragraph'>
                    We work closely with businesses in need of skilled cleaning and fumigation professionals. 
                    Our recruitment process ensures that you find the right fit for your team, tailored to meet your specific requirements.
                    For more information about employment opportunities or our recruitment services, please contact us through the form below or call <a style={{color:'blue'}} href='tel:+2348142355996'>+2348142355996</a>.
                </Text>
            </Box>
        </Container>
    </Box>
  )
}

export default IndustrialCleaning