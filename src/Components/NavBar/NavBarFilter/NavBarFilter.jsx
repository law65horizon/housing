import { Box, Button, Divider, Flex, Image, Input, InputGroup, InputLeftElement, Select, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import useSearchStore from '../../../store/searchStore'
import useGetPostsByParam from '../../../hooks/useGetPostsByParam'
import usePostStore from '../../../store/postStore'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from '../../../FireBase/FireBase'
import useShowToast from '../../../hooks/useShowToast'
import useSearchParam from '../../../hooks/useSearchParam'
import { CiLocationOn } from 'react-icons/ci'
import { MdAddCircleOutline, MdCancel } from 'react-icons/md'
import FilterSearch from '../../FilterSearch/FilterSearch'
import { useLocation } from 'react-router-dom'

const NavBarFilter = ({searchdata}) => {
  const location = useLocation()
  const {isOpen, onClose, onOpen} = useDisclosure()
  const [isLargerThan800] = useMediaQuery('(min-width: 727px)')
  const [searchparameters, setSearchParameters] = useState({
    type: '',
    search: '',
    searched: [],
    min_price: '',
    max_price: '',
    bedrooms: '',
    bathrooms: '',
    sale_type: '',
  })
  const [isSearching, setIsSearching] = useState(false)
  const {searched, setSearched} = useSearchStore()
  const {searchParam, searches} = useSearchParam()
  const showToast = useShowToast()
  const {setPosts} = usePostStore()
  // console.log(searchparameters)

  useEffect(() => {
    if(searchparameters.search) {
      setIsSearching(true)
    }else {
      setIsSearching(false)
    }
    if (isSearching) {
      searchParam(searchparameters)
    }
  }, [searchparameters.search])

  const handleLocalStorage = (param) => {
    const userdata = JSON.parse(localStorage.getItem('searches'))
    // console.log(userdata)
    console.log(param)
    if(userdata) {
      if(userdata.searched.length >= 4) {
        userdata.searched.pop()
        userdata.searched.unshift(param)
        localStorage.setItem('searches', JSON.stringify(userdata))
      } else {
        userdata.searched.unshift(param)
        console.log(userdata)
        localStorage.setItem('searches', JSON.stringify(userdata))
      }
    }else {
      localStorage.setItem('searches', JSON.stringify({searched: [param]}))
    }    
  }

  const handleSearch = async() => {
    console.log('soio')
    if(!navigator.onLine) {
      showToast('Error', 'Client is Offline', 'error')
      return
    }
    setSearched(searchparameters)
    try {
      let q = query(collection(firestore, 'posts'), )
      if(searchparameters.searched.length !== 0) {
        console.log('searched')
        q = query(q, where('address', 'array-contains-any', searchparameters.searched[0]));
      }
      if(searchparameters.min_price) {
        console.log('min price', parseInt(searchparameters.min_price, 10))
        q = query(q,  where('price', '>=', parseInt(searchparameters.min_price, 10)));
      }
      if(searchparameters.max_price) {
        console.log('max price')
        q = query(q, where('price', '<=', parseInt(searchparameters.max_price, 10)));
      }
      if(searchparameters.type) {
        console.log('type')
        q = query(q, where('type', '==', searchparameters.type));
      }
      if(searchparameters.sale_type) {
        console.log('sale_type')
        q = query(q, where('sale_type', '==', searchparameters.sale_type));
      }
      const querySnapShot = await getDocs(q)
      const posts = []
      querySnapShot.forEach((doc) => {
          posts.push({...doc.data(), id:doc.id})
      })
      posts.sort((a,b) => b.createdAt - a.createdAt)
      setSearched([])
      setPosts(posts)
      handleLocalStorage(searchparameters)
    } catch (error) {
      showToast('Error', error.message,'error')
      console.log(error)
      setPosts([])
    }
    // console.log(searched)
    // handleLocalStorage(searchparameters)
  }
  // if(searchparameters.searched.length !== 0) {
  //   console.log('doso')
  // }else {
  //   console.log('wrong')
  // }
  // console.log(location.pathname.split('/')[1])
  // console.log(searchparameters)
  return (
    <Box w={'full'} bg={'white'} boxShadow={'0 10px 15px -5px rgba(11, 17, 52, .2)'} p={3} position={'fixed'} 
     left={0} top={isLargerThan800? '96.86px': '48px'} zIndex={100} 
    //  left={0} top={{base: '56px', sm:'96.86px'}} zIndex={100} 
    >
        <Box position={'relative'} w={'full'}>
          <Box position={'absolute'} w={'full'} p={3} >
            {isOpen && 
              <FilterSearch isOpen={isOpen} onClose={onClose} handleSearch={handleSearch} searchparameters={searchparameters} setSearchParameters={setSearchParameters} 
            />}
          </Box>
        </Box>
        <Box display={'flex'} gap={2} px={3} alignItems={'center'}>
            {searchparameters?.searched?.map((search, index) => (
              <Box border={'1px solid white'} key={index} gap={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={3} py={2} borderRadius={'20px'}>
                <Text fontSize={'clamp(8px, 2vw, 13px)'}> {search.map((sx) => sx + ' ')} </Text>
                <Box cursor={'pointer'} onClick={() => {setSearchParameters({...searchparameters, searched: searchparameters.searched.filter((searches) => searches !== search)})}}>
                  <MdCancel />
                </Box>
              </Box>
            ))}
        </Box>
        <Box display={{base: 'none', lg: 'block'}}>
          {/* lg width */}
            <Flex gap={3} w={'full'} fontSize={'small'}>
              <Select bg={'ButtonFace'} w={'max-content'} value={searchparameters.sale_type} fontSize={'small'} placeholder='Any' 
                onChange={(e) => setSearchParameters({...searchparameters, sale_type: e.target.value})}
              >
                <option value='rent'>Rent</option>
                <option value='buy'>Buy</option>
                <option value='sold'>Sold</option>
              </Select>
              <Box bg={'ButtonFace'} display={'flex'} flexDir={'column'} w={{lg: '40%'}} px={2} borderRadius={'5px'} justifyContent={'center'} alignItems={'center'}>
                {/* <BiSearch />
                <Input outline={'none'} border={'none'} placeholder='Search suburb, postcode, or state'/> */}
                <InputGroup w={'full'}>
                  <InputLeftElement>
                    <BiSearch />
                  </InputLeftElement>
                <Input w={'full'} outline={'none'} border={'none'} placeholder='Search suburb, postcode, or state'
                  value={searchparameters.search} onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})}
                />
                </InputGroup>
                <Box position={'relative'} w={'full'}>
          {isSearching &&
           <Box pt={3} w={'full'} bg={'white'} m={0} p={3} position={'absolute'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
            <Divider h={'1px'} my={'10px'} w={'full'} bg={'white'} />
            <Box w={'full'}>
              {searches
               ? (
                <Box w={'full'} display={'flex'} flexDir={'column'} gap={2}>
                  {searches.map((location) => (
                    <Flex w={'full'} key={location.counter} justifyContent={'space-between'} cursor={'pointer'} p={2} borderRadius={'5px'} 
                      _hover={{bg: 'rgba(0, 255, 255, 0.4)'}} alignItems={'center'}
                      onClick={() => setSearchParameters({...searchparameters, searched: [...searchparameters.searched, location.address]})}
                    >
                      <Flex alignItems={'center'} w={'full'} gap={4}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} bg={'blacks'}>
                          <CiLocationOn size={24} />
                        </Box>
                        <Box w={'full'}>
                          <Text w={'full'} textAlign={'start'} textTransform={'capitalize'}> {location.address.map(((field) => (field + ' ')))}</Text>
                        </Box>
                      </Flex>
                      <MdAddCircleOutline size={24} />
                    </Flex>
                  ))}
                </Box>
               ) :(
                <Box></Box>
               )
              }
            </Box>
           </Box>
          }
                </Box>
              </Box>
              <Select bg={'ButtonFace'} value={searchparameters.type} w={'max-content'} fontSize={'small'} placeholder='Any'
                onChange={(e) => setSearchParameters({...searchparameters, type: e.target.value})}
              >
                <option value='homes'>Homes</option>
                <option value='office'>Office</option>
                <option value='land'>Land</option>
                <option value='warehouses'>WareHouses</option>
              </Select>
              <Input placeholder='Min. price' w={'150px'}
                value={searchparameters.min_price} onChange={(e) => setSearchParameters({...searchparameters, min_price: e.target.value})}
              />
              <Input placeholder='Max. price' w={'150px'}
                value={searchparameters.max_price} onChange={(e) => setSearchParameters({...searchparameters, max_price: e.target.value})}
              />
              <Input placeholder='Bedrooms' w={'150px'} />
              {/* <Button display={'flex'} w={'150px'} justifyContent={'center'} alignItems={'center'} gap={1} onClick={onOpen}>
                <Image
                  src='/filter.png'
                  objectFit={'cover'}
                  objectPosition={'center center'}
                />
                <Text>Filter</Text>
              </Button> */}
              <Box bg={'ButtonFace'} display={'flex'} px={4} borderRadius={'5px'} justifyContent={'center'} alignItems={'center'}>
                <Button onClick={handleSearch}>
                  Search
                </Button>
              </Box>
            </Flex>
        </Box>

        {/* base & md width */}
        <Box display={{base: 'block', lg: 'none'}}>
            <Flex gap={3} w={'full'} fontSize={'small'} pb={2}>
              {/* <Select bg={'ButtonFace'} w={'max-content'} fontSize={'small'} placeholder='Rent'>
                <option value='option1'>Buy</option>
                <option value='option2'>Sold</option>
                <option value='option3'>Rent 3</option>
              </Select> */}
              <Box bg={'ButtonFace'} display={'flex'} flexDir={'column'} w={{base: 'full', sm: '80%'}} px={2} borderRadius={'5px'} justifyContent={'center'} alignItems={'center'}>
                {/* <BiSearch />
                <Input outline={'none'} border={'none'} placeholder='Search suburb, postcode, or state'/> */}
                <InputGroup>
                  <InputLeftElement>
                    <BiSearch />
                  </InputLeftElement>
                <Input outline={'none'} border={'none'} placeholder='Search suburb, postcode, or state'
                  value={searchparameters.search} onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})}
                />
                </InputGroup>
                <Box position={'relative'} w={'full'}>
          {isSearching &&
           <Box pt={3} w={'full'} m={0} p={3} bg={'white'} position={'absolute'} display={'flex'} flexDir={'column'}
            justifyContent={'center'} alignItems={'center'} zIndex={999}
           >
            <Divider h={'1px'} my={'10px'} w={'full'} bg={'white'} />
            <Box w={'full'}>
              {searches
               ? (
                <Box w={'full'} display={'flex'} flexDir={'column'} gap={2}>
                  {searches.map((location) => (
                    <Flex w={'full'} key={location.counter} justifyContent={'space-between'} cursor={'pointer'} p={2} borderRadius={'5px'} 
                      _hover={{bg: 'rgba(0, 255, 255, 0.4)'}} alignItems={'center'}
                      onClick={() => setSearchParameters({...searchparameters, searched: [...searchparameters.searched, location.address]})}
                    >
                      <Flex alignItems={'center'} w={'full'} gap={4}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} bg={'blacks'}>
                          <CiLocationOn size={24} />
                        </Box>
                        <Box w={'full'}>
                          <Text w={'full'} textAlign={'start'} textTransform={'capitalize'}> {location.address.map(((field) => (field + ' ')))}</Text>
                        </Box>
                      </Flex>
                      <MdAddCircleOutline size={24} />
                    </Flex>
                  ))}
                </Box>
               ) :(
                <Box></Box>
               )
              }
            </Box>
           </Box>
          }
                </Box>
              </Box>
              <Box bg={'ButtonFace'} display={{base: 'none', sm: 'flex'}} w={'20%'} px={4} borderRadius={'5px'} justifyContent={'center'} alignItems={'center'}>
                <Button onClick={handleSearch}>
                  Search
                </Button>
              </Box>
            </Flex>
            <Flex gap={3} w={'full'} flexDir={{base: 'column', sm: 'row'}} fontSize={'small'}>
              <Flex gap={3} w={{base: 'full', sm: '50%'}} display={{base: 'none', sm: 'flex'}}>
                <Select bg={'ButtonFace'} value={searchparameters.type || 'homes'} w={'50%'} fontSize={'small'} placeholder='Select'
                  onChange={(e) => setSearchParameters({...searchparameters, type: e.target.value})}
                >
                  <option value='homes'>Homes</option>
                  <option value='office'>Office</option>
                  <option value='land'>Land</option>
                  <option value='warehouses'>WareHouses</option>
                </Select>
                <InputGroup w={{base: '50%', sm: '50%'}}>
                  <InputLeftElement>
                  ₦
                  </InputLeftElement>
                  <Input bg={'ButtonFace'} fontSize={'small'} placeholder='Min. price' type='number' 
                    value={searchparameters.min_price} onChange={(e) => setSearchParameters({...searchparameters, min_price: e.target.value})}
                  />
                </InputGroup>
              </Flex>
              <Flex gap={3} w={{base: 'full', sm: '50%'}}>
                <InputGroup w={{base: '50%', sm: '50%'}} display={{base: 'none', sm: 'flex'}}>
                  <InputLeftElement>
                  ₦
                  </InputLeftElement>
                  <Input bg={'ButtonFace'} fontSize={'small'} placeholder='Max. price' type='number' 
                    value={searchparameters.max_price} onChange={(e) => setSearchParameters({...searchparameters, max_price: e.target.value})}
                  />
                </InputGroup>
                {/* <Input bg={'ButtonFace'} w={{base: '50%', sm: '50%'}} fontSize={'small'} placeholder='Bedrooms' type='number' 
                  value={searchparameters.bedrooms} onChange={(e) => setSearchParameters({...searchparameters, bedrooms: e.target.value})}
                /> */}
                <Select bg={'ButtonFace'} value={searchparameters.type || 'homes'} w={'50%'} fontSize={'small'} placeholder='Select'
                  onChange={(e) => setSearchParameters({...searchparameters, type: e.target.value})} display={{base: 'flex', sm: 'none'}}
                >
                  <option value='homes'>Homes</option>
                  <option value='office'>Office</option>
                  <option value='land'>Land</option>
                  <option value='warehouses'>WareHouses</option>
                </Select>
                <Button display={'flex'} w={'50%'} justifyContent={'center'} alignItems={'center'} gap={1} onClick={onOpen}>
                  <Image
                    src='/filter.png'
                    objectFit={'cover'}
                    objectPosition={'center center'}
                  />
                  <Text>Filter</Text>
                </Button>
                <Box bg={'ButtonFace'} display={{base: 'flex', sm: 'none'}} w={'20%'} px={4} borderRadius={'5px'} justifyContent={'center'} alignItems={'center'}>
                  <Button onClick={handleSearch}>
                    Search
                  </Button>
                </Box>
              </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default NavBarFilter