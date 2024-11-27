import React, { useState } from 'react'
import DynamicLoad from '../DynamicLoad/DynamicLoad'
import { Box, Button, Card, CardBody, Flex, Grid, GridItem, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const ExploreAdv = () => {
  const [activeElement, setActiveElement] = useState('real_estates')
  const active_element = (section) => {
    // const components = document.getElementsByClassName('load-child')
    // const component =
    const parentEle = document.getElementById('exploreAdv')
    const buttons = parentEle.querySelectorAll('.button')
    buttons.forEach((button) => button.classList.remove('active_button'))
    const active_button = parentEle.querySelector(`button.${section}`)
    active_button.classList.add('active_button')

    setActiveElement(section) 
    // this.isActive = true
  }
  return (
    <Box py={4} mb={'50px'} id='exploreAdv'>
        <Flex gap={2} overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
          scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}}  whiteSpace={'nowrap'}
        > 
            <Button minW={'120px'} onClick={() => {active_element('real_estates')}} className='button active_button real_estates' bg={'transparent'} w={'50%'}>
                <Text px={4} py={2}>Real estate</Text>
            </Button>
            <Button minW={'120px'} onClick={() => {active_element('new_homes')}} className='button new_homes' bg={'transparent'} w={'50%'} >
                <Text px={4} py={2}> New Homes</Text>
            </Button>
            <Button minW={'120px'} onClick={() => {active_element('popular_areas')}} className='button popular_areas' bg={'transparent'} w={'50%'}>
                <Text px={4} py={2}>Popular areas</Text>
            </Button>
            <Button minW={'120px'} onClick={() => {active_element('popular_searches')}} className='button popular_searches' bg={'transparent'} w={'50%'} >
                <Text px={4} py={2}>popular searches</Text>
            </Button>
        </Flex>
        <DynamicLoad activeElement={activeElement}>
          <Box id='real_estates'>
            <Text py={4}>Real Estates</Text>
            <Grid color={'gray'} gridTemplateColumns={'repeat(auto-fit, minmax(max(25% + 1px, 20rem), 1fr))'} rowGap={'0.5rem'}>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                {/* <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem> */}
            </Grid>
          </Box>

          <Box id='new_homes'>
            <Text py={4}>New Homes</Text>
            <Grid color={'gray'} gridTemplateColumns={'repeat(auto-fit, minmax(max(25% + 1px, 20rem), 1fr))'} rowGap={'0.5rem'}>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                {/* <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem> */}
            </Grid>
          </Box>
          <Box id='popular_areas'>
            <Text py={4}>Popular areas</Text>
            <Grid color={'gray'} gridTemplateColumns={'repeat(auto-fit, minmax(max(25% + 1px, 20rem), 1fr))'} rowGap={'0.5rem'}>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                {/* <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem> */}
            </Grid>
          </Box>
          <Box id='popular_searches'>
            <Text py={4}>Popular searches</Text>
            <Grid color={'gray'} gridTemplateColumns={'repeat(auto-fit, minmax(max(25% + 1px, 20rem), 1fr))'} rowGap={'0.5rem'}>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
                <GridItem>
                    <Link textDecoration={'underline'} as={RouterLink} >Real Estate NSW</Link>
                </GridItem>
            </Grid>
          </Box>
        </DynamicLoad>
    </Box>
    )
}

export default ExploreAdv