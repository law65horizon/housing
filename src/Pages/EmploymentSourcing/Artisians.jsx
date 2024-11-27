import { Box, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Artisians = () => {
  return (
    <Box pb={12}>
        <Box className='main_bg' color={'white'} py={4}>
        <Container maxW={'8xl'}>
                <Heading>Artisians/Skills Hiring Hub</Heading>
            </Container>
        </Box>
        <Container maxW={'7xl'} mt={3} display={'flex'} flexDir={'column'} gap={2}>
            <Box>
                <Heading my={3}>Join Our Network of Skilled Artisians</Heading>
                <Text className='paragraph'>
                    At Housing Solutions Hub, we understand that the foundation of exceptional real estate services lies in the skilled
                    artisans who bring our properties to life. Our Artisans Hiring Hub is dedicated to sourcing and nurturing top-tier
                    talent in the construction, renovation, and maintenance sectors. Whether you’re a seasoned professional or an emerging
                    talent, we offer a platform for skilled artisans to connect with exciting career opportunities within our dynamic team.
                </Text>
            </Box>
            <Box>
                <Heading my={3}>Who We Are</Heading>
                <Text className='paragraph'>
                    As a leading player in the real estate industry, Housing Solutions Hub prides itself on delivering
                    high-quality properties that meet the diverse needs of our clients. Our commitment to excellence extends
                    beyond property development to include the talented individuals who contribute to our projects. We are
                    seeking artisans who are passionate about their craft and dedicated to achieving outstanding results.
                </Text>
            </Box>
            <Box>
                <Heading my={3}>Opportunities Available</Heading>
                <Text>We are constantly looking to expand our network of skilled artisans in various trades, including:</Text>
                <UnorderedList pl={3} display={'flex'} flexDir={'column'} gap={1}>
                    <ListItem><b>Carpenters:</b></ListItem> 
                        <Text pb={2}>Join our team to create custom woodwork and framing that enhances the aesthetic appeal and structural integrity of our properties.</Text>
                    <ListItem><b>Electricians:</b></ListItem> 
                        <Text pb={2}>We seek certified electricians who can ensure the safety and efficiency of our electrical systems, delivering reliable service that meets regulatory standards.</Text>
                    <ListItem><b>Plumbers:</b></ListItem> 
                        <Text pb={2}>Our plumbing professionals play a vital role in maintaining and installing systems that ensure comfort and functionality within our properties.</Text>
                    <ListItem><b>Painters and Finishers:</b></ListItem> 
                        <Text pb={2}>We value artisans who can bring spaces to life with their artistic touch and meticulous attention to detail, providing the finishing touches that make a house a home.</Text>
                    <ListItem><b>Masons:</b></ListItem> 
                        <Text pb={2}>Skilled masons are essential to our projects, providing the craftsmanship required for durable and aesthetically pleasing structures.</Text>
                </UnorderedList>
            </Box>
            <Box>
                <Heading my={3}>Why Join Us?</Heading>
                <Text>We are constantly looking to expand our network of skilled artisans in various trades, including:</Text>
                <UnorderedList pl={3} display={'flex'} flexDir={'column'} gap={1}>
                <ListItem><b>Career Growth:</b></ListItem>
                <Text pb={2}> We believe in investing in our team members. We provide opportunities for professional development, including training programs and workshops to enhance your skills and advance your career.</Text>
                <ListItem><b>Collaborative Environment:</b></ListItem>
                <Text pb={2}> At Housing Solutions Hub, you will work alongside a diverse team of professionals who are committed to excellence. We foster a collaborative environment where ideas are shared, and every contribution is valued.</Text>
                <ListItem><b>Competitive Compensation:</b></ListItem>
                <Text pb={2}> We offer competitive wages and benefits packages designed to reward hard work and dedication. Your skills and expertise deserve recognition.</Text>
                <ListItem><b>Impactful Work:</b></ListItem>
                <Text pb={2}> As an artisan in our team, you will have the chance to work on meaningful projects that shape the communities we serve. Your craftsmanship will leave a lasting impact.</Text>
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
                    For any inquiries regarding the application process or available positions, please contact our HR team at [HR Email Address] or call us at [HR Phone Number].  <a style={{color:'blue'}} href='tel:+2348142355996'>+2348142355996</a>.
                </Text>
            </Box>
        </Container>
    </Box>
  )
}

export default Artisians