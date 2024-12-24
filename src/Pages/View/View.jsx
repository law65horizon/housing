import { AspectRatio, Avatar, Box, Button, Card, CardBody, Center, Container, Divider, Flex, Heading, Image, Select, Skeleton, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
// import Explore from '../../Components/Explore/Explore'
import { GiFlame } from 'react-icons/gi'
import { BsWhatsapp } from 'react-icons/bs'
import { PiBathtubLight, PiPhone } from 'react-icons/pi'
import NavBarFilter from '../../Components/NavBar/NavBarFilter/NavBarFilter'
import { LiaBedSolid } from 'react-icons/lia'
import { FaStar } from 'react-icons/fa6'
import { CiLocationOn, CiStar } from 'react-icons/ci'
import { RxDimensions } from 'react-icons/rx'
import { IoCarSportOutline, IoLocationSharp } from 'react-icons/io5'
// import useGetPosts from '../../hooks/useGetPosts'
import Item from '../../Components/Property/Property'
import useGetPostsByParam from '../../hooks/useGetPostsByParam'
import useSearchStore from '../../store/searchStore'
import Offline from '../../Components/ErrorComp/Offline'

const View = () => {
    let {uid} = useParams()
    const location = useLocation()
    const [isLargerThan350] = useMediaQuery('(min-width: 350px)')
    const search = location?.search?.substring(1)
    const {searched, setSearched} = useSearchStore()
    const val_param = (id) => {
      if(id === 'search') {
        for (let i = 0; i < search.split('*').length; i++) {
          if(search.split('*')[i].split('-')[0] === 'search') {
            return true
          }
        }
        return false
      }
      if(id === 'type') {
        for (let i = 0; i < search.split('*').length; i++) {
          if(search.split('*')[i].split('-')[0] === 'type') {
            return true
          }
        }
        return false
      }
      if(id === 'featured') {
        for(let i = 0; i < search.split('*').length; i++) {
          if(search.split('*')[i].split('-')[0] === 'featured') {
            return true
          }
        }
      }
    }
    const des_param = (id) => {
      if(id === 'search') {
        // search.split('*').forEach((param) => {
        for (let i = 0; i < search.split('*').length; i++) {
          // console.log(search.split('*')[i].split('-')[0])
          if(search.split('*')[i].split('-')[0] === 'search') {
            // console.log('split')
            // setSearchdata({...searchdata, searched: param.split('-')[1]})
            const result = search.split('*')[i].split('-')[1].split('+')
            // console.log(result)
            return result
          }
        }
      }
      if(id === 'type') {
        for (let i = 0; i < search.split('*').length; i++) {
          if(search.split('*')[i].split('-')[0] === 'type') {
            const result = search.split('*')[i].split('-')[1]
            return result
          }
        }
      }
      if(id === 'featured') {
        for (let i = 0; i < search.split('*').length; i++) {
          if(search.split('*')[i].split('-')[0] === 'featured') {
            const result = search.split('*')[i].split('-')[1] === 'true'? true: false
            console.log('result')
            return result
          }
        }
      }
    }
    const [searchdata, setSearchdata] = useState({
      sale_type: uid,
      // searched: location.search ? location?.search?.substring(1).split('+'): ''
      searched: location.search && val_param('search') ? des_param('search'): '',
      type: location.search && val_param('type') ? des_param('type'): '',
      isfeatured: location.search && val_param('featured') ? des_param('featured'): '',
    })

    useEffect(() => {
      setSearchdata({
        sale_type: uid,
      // searched: location.search ? location?.search?.substring(1).split('+'): ''
      searched: location.search && val_param('search') ? des_param('search'): '',
      type: location.search && val_param('type') ? des_param('type'): '',
      isfeatured: location.search && val_param('featured') ? des_param('featured'): '',
      })
    }, [location])
    console.log(searchdata)
    let header_txt = uid.replace('_', ' ')
    let cta_txt = ''
    if (uid === 'buy') {
      header_txt = 'Properties for sale'
      cta_txt =  `The average price of houses for sale is ₦7,000,000 The most expensive house costs ₦50,000,000. 
        while the cheapest costs ₦130,000. We have a total of 6,350 House for rent in Nigeria updated on 09 Aug 2024. 
        Among these properties are houses, lands, shops, apartments, flats and commercial spaces . Every Real Estate 
        in Nigeria posted on this site is verified by real estate agents . We also have cheap houses for rent and cheap 
        houses for sale . Refine your property search by price, number of beds and type of property.`
    }else if (uid === 'sold') {
      header_txt = 'Sold Properties'
      cta_txt =  `The average price of houses for rent is ₦7,000,000 The most expensive house costs ₦50,000,000. 
        while the cheapest costs ₦130,000. We have a total of 6,350 House for rent in Nigeria updated on 09 Aug 2024. 
        Among these properties are houses, lands, shops, apartments, flats and commercial spaces . Every Real Estate 
        in Nigeria posted on this site is verified by real estate agents . We also have cheap houses for rent and cheap 
        houses for sale . Refine your property search by price, number of beds and type of property.`
    }else if (uid === 'rent') {
      header_txt = 'Rent Properties'
      cta_txt =  `The average price of houses for rent is ₦7,000,000 The most expensive house costs ₦50,000,000. 
        while the cheapest costs ₦130,000. We have a total of 6,350 House for rent in Nigeria updated on 09 Aug 2024. 
        Among these properties are houses, lands, shops, apartments, flats and commercial spaces . Every Real Estate 
        in Nigeria posted on this site is verified by real estate agents . We also have cheap houses for rent and cheap 
        houses for sale . Refine your property search by price, number of beds and type of property.`
    }else if (uid === 'any') {
      header_txt = 'Properties'
    }
    // const {posts, isLoading} = useGetPosts(searchdata.sale_type)
    const {posts, isLoading} = useGetPostsByParam(searchdata)
    if(!isLoading && posts.length === 0) return <Offline />
  return (<Box bg={'white'} h={'full'}>
    <NavBarFilter searchdata={searchdata} />
    {/* <Container maxW={'6xl'} > */}
    <Container maxW={'6xl'} pt={{base: '154px', md:'142px', lg: '104px'}}>
      <Box>
        <Heading className='main_text_color' textTransform={'capitalize'}> {header_txt}</Heading>
        <Flex>
          <Box w={{base: 'full', lg: '70%'}}>
            <Text py={isLargerThan350? '5': 2} fontSize={'small'}>
              {cta_txt}
            </Text>

            {/* search results */}
            <Box w={'full'}>
              <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'} gap={isLargerThan350 ? '0': '2'} flexDirection={isLargerThan350 ? 'row': 'column'}>
                <Text w={'full'} fontSize={'small'}>Result 1 - 50 of <span className='main_text_color' style={{fontWeight: '500'}}>6502</span></Text>
                <Box display={'flex'} w={'full'} justifyContent={isLargerThan350 ? 'center': 'start'} alignItems={'center'} gap={3}>
                  <Text className='main_text_color' fontWeight={600}>Sort:</Text>
                  <Select bg={'ButtonFace'} w={isLargerThan350? 'max-content': 'full'} value={searchdata.sale_type} fontSize={'small'} placeholder='Select' 
                    onChange={(e) => setSearchdata({...searchdata, sale_type: e.target.value})}
                  >
                    <option value='rent'>Rent</option>
                    <option value='buy'>Buy</option>
                    <option value='sold'>Sold</option>
                  </Select>
                </Box>
              </Flex>

              <Box py={5} display={'flex'} flexDir={'column'} gap={5}>
                {isLoading && (<>
                  {[0,1,2,3].map((property) => (
                    <Skeleton key={property} w={{base: 'full', md: '80%'}}>
                      <Box h={'400px'}>contents wrapped</Box>
                    </Skeleton>
                  ))}
                </>)}
                {!isLoading && (<>
                  {posts?.map((property, index) => (
                    <React.Fragment key={index}>
                      <Item property={property} id={property.counter}/>
                    </React.Fragment>
                  ))}
                </>)}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  </Box>)
}

export default View
