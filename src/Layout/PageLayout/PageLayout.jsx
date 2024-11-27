import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
  const {pathname} = useLocation()
  const [isLargerThan800] = useMediaQuery('(min-width: 727px)')
  return (<>
    {/* <header style={{position: 'fixed',left: 0, width: '100%', top: '0',zIndex: 1000, backgroundColor: 'white'}} >
      <NavBar />
    </header>
    <main>
      <Flex h={'100vh'} flexDir={'column'} mt={'56px'}>
         <Box> {children} </Box>
      </Flex>
    </main> */}
    <header style={{position: 'fixed',left: 0, width: '100%', top: '0',zIndex: 1000, backgroundColor: 'white'}} >
      <NavBar />
    </header>
    <Flex h={'100vh'} flexDir={'column'} mt={isLargerThan800? '96.86px': '56px'}>
      <main style={{flex: '1'}}>
         <Box h={'full'}> {children} </Box>
      </main>
      <footer >
        <Footer />
      </footer>
    </Flex>
  </>)
}

export default PageLayout