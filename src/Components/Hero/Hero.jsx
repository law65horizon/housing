import { AlertIcon, Box, Button, Divider, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Text, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiSearch, BiSearchAlt } from 'react-icons/bi'
import DynamicLoad from '../DynamicLoad/DynamicLoad'
import useSearchParam from '../../hooks/useSearchParam'
import { CiLocationOn } from 'react-icons/ci'
import { MdAddCircleOutline, MdCancel } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import useSearchStore from '../../store/searchStore'
import { IoMdArrowBack } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

export const Hero = () => {
  const [activeElement, setActiveElement] = useState('buy')
  const [searchparameters, setSearchParameters] = useState({
    sale_type: 'any',
    search: '',
    searched: []
  })
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  const navigate = useNavigate()
  const {setSearched} = useSearchStore()
  const {searchParam, searches} = useSearchParam()
  const [isSearching, setIsSearching] = useState(false)
  const active_element = (section) => {
    if(activeElement === section) {
      setActiveElement('')
      const parentEle = document.getElementById('explore')
      const buttons = parentEle.querySelectorAll('.button')
      buttons.forEach((button) => button.classList.remove('active_button1'))
      // const active_button = parentEle.querySelector(`.button.${section}`)
      // active_button.classList.add('active_button1')
      setSearchParameters({...searchparameters, sale_type: 'any'})
    }else {
      setActiveElement(section)
      const parentEle = document.getElementById('explore')
      const buttons = parentEle.querySelectorAll('.button')
      buttons.forEach((button) => button.classList.remove('active_button1'))
      const active_button = parentEle.querySelector(`.button.${section}`)
      active_button.classList.add('active_button1')
      setSearchParameters({...searchparameters, sale_type: section})
    }
    // this.isActive = true
  }


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
    // function getLocalStorageSize() {
    //   let total = 0;
      
    //   for (let key in localStorage) {
    //     if (localStorage.hasOwnProperty(key)) {
    //       // Calculate the size of the key and its corresponding value
    //       total += key.length + localStorage.getItem(key).length;
    //     }
    //   }
      
    //   // Return the size in kilobytes
    //   console.log(total)
    //   return (total / 1024).toFixed(2) + ' KB';
    // }
    
    // console.log('LocalStorage size: ' + getLocalStorageSize());    
  }

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
  const handleSearch = () => {
    // sessionStorage.setItem('search', JSON.stringify(searchparameters))
    // handleLocalStorage(searchparameters)
    console.log(searchparameters)
    // console.log(`/${searchparameters.sale_type}/${searchparameters?.searched.map((search) => search.join('+'))}`)
    // navigate(`/${searchparameters.sale_type}?${searchparameters?.searched.map((search) => search.join('+'))}`)
    navigate(`/${searchparameters.sale_type}?${searchparameters?.searched.length > 0 ?'search-' + searchparameters?.searched.map((search) => search.join('+')) : ''}`)
  }
  // console.log(searchparameters)


  // return (
  //   <Flex
  //     id='hero'
  //     position={'relative'}
  //     flexDir={'column'}
  //     alignItems={'center'}
  //     justifyContent={{sm: 'flex-start', lg:'end'}}
  //     textAlign={'center'}
  //     verticalAlign={'baseline'}
  //     minH={{base: '240px', lg: '300px'}}
  //     zIndex={1}
  //     borderRadius={'4px'}
  //     >
  //       <Image src='/banner.png' position={'absolute'} 
  //         top={0} zIndex={0} left={0} w={'100%'} h={'100%'} objectFit={'cover'} 
  //         verticalAlign={'middle'} objectPosition={'center center'}
  //         borderRadius={'8px'}
  //       />
  //       <VStack w={'90%'} color={'white'} fontWeight={600} zIndex={1} gap={3} mt={4} transform={{lg: 'translateY(70px)'}}>
  //         <Heading zIndex={1} color={'white'} py={3} fontSize={'clamp(20px, 2vw, 30px)'}>Properties to call home</Heading>
  //         {/* <Box bg={'rgb(11 17 52 / 65%)'} w={'full'} p={3} borderRadius={'5px'}> */}
  //         <Box bg={'rgb(11 17 52 / 65%)'} w={'full'} >
  //         <Flex alignItems={'center'} id='explore' px={3} py={2} w={'full'}>
  //           <Box cursor={'pointer'} onClick={() => {active_element('buy')}} 
  //             className='button buy'
  //             borderBottom={'2px solid white'} w={'50%'} py={2}
  //           >
  //             <Text>Buy</Text>
  //           </Box>
  //           <Box cursor={'pointer'} onClick={() => {active_element('rent')}} className='button rent' 
  //             borderBottom={'2px solid white'} w={'50%'} py={2}
  //           >
  //             <Text>Rent</Text>
  //           </Box>
  //           <Box cursor={'pointer'} onClick={() => {active_element('sold')}} className='button sold'
  //            borderBottom={'2px solid white'} w={'50%'} py={2}
  //           >
  //             <Text>Sold</Text>
  //           </Box>
  //           <Box cursor={'pointer'} onClick={() => {active_element('address')}} className='button address'
  //             borderBottom={'2px solid white'} w={'50%'} py={2}
  //           >
  //             <Text>Address</Text>
  //           </Box>
  //           <Box cursor={'pointer'} onClick={() => {active_element('agent')}} className='button agent'
  //            borderBottom={'2px solid white'} w={'50%'} py={2}
  //           >
  //             <Text>Agent</Text>
  //           </Box>
  //         </Flex>
  //         <Box display={'flex'} gap={2} px={3} alignItems={'center'}>
  //           {searchparameters.searched.map((search) => (
  //             <Box border={'1px solid white'} gap={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={3} py={2} borderRadius={'20px'}>
  //               <Text fontSize={'clamp(8px, 2vw, 13px)'}> {search.map((sx) => sx + ' ')} </Text>
  //               <Box cursor={'pointer'} onClick={() => {setSearchParameters({...searchparameters, searched: searchparameters.searched.filter((searches) => searches !== search)})}}>
  //                 <MdCancel />
  //               </Box>
  //             </Box>
  //           ))}
  //         </Box>
  //         <Box bg={'transparent'} px={3} py={2} gap={2} display={'flex'} w={'full'} justifyContent={'center'} alignItems={'center'}>
  //           <InputGroup>
  //             <InputLeftElement>
  //               <BiSearch />
  //             </InputLeftElement>
  //             {activeElement === 'address' ? (
  //               <Input outline={'none'} border={'2px solid white'} placeholder='Search Address' 
  //                 _placeholder={{fontWeight: '600', fontSize : 'clamp(13px, 2vw, 18px)'}} value={searchparameters.search}
  //                 onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})}
  //               />
  //              ): (
  //               <Input outline={'none'} border={'2px solid white'} placeholder='Search suburb, postcode, or state' 
  //                 _placeholder={{fontWeight: '600', fontSize : 'clamp(14px, 2vw, 20px)'}} value={searchparameters.search}
  //                 onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})}
  //               />
  //              )
  //             }
  //           </InputGroup>
  //           <Button bg={'rgb(26 62 52)'} display={{base: 'none', sm: 'flex'}} onClick={(handleSearch)} p={2} px={4} color={'white'} borderRadius={'5px'}>
  //             Search
  //           </Button>
  //         </Box>
  //         <Box position={'relative'} w={'full'}>
  //         {isSearching &&
  //          <Box pt={3} w={'full'} m={0} p={3} bg={'rgb(11 17 52 / 65%)'} position={'absolute'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
  //           <Divider h={'1px'} my={'10px'} w={'full'} bg={'white'} />
  //           <Box w={'full'}>
  //             {searches
  //              ? (
  //               <Box w={'full'} display={'flex'} flexDir={'column'} gap={2}>
  //                 {searches.map((location) => (
  //                   <Flex w={'full'} key={location.counter} justifyContent={'space-between'} cursor={'pointer'} p={2} borderRadius={'5px'} 
  //                     _hover={{bg: 'rgba(0, 255, 255, 0.4)'}} alignItems={'center'}
  //                     onClick={() => setSearchParameters({...searchparameters, searched: [...searchparameters.searched, location.address]})}
  //                   >
  //                     <Flex alignItems={'center'} w={'full'} gap={4}>
  //                       <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} bg={'blacks'}>
  //                         <CiLocationOn size={24} />
  //                       </Box>
  //                       <Box w={'full'}>
  //                         <Text w={'full'} textAlign={'start'} textTransform={'capitalize'}> {location.address.map(((field) => (field + ' ')))}</Text>
  //                       </Box>
  //                     </Flex>
  //                     <MdAddCircleOutline size={24} />
  //                   </Flex>
  //                 ))}
  //               </Box>
  //              ) :(
  //               <Box></Box>
  //              )
  //             }
  //           </Box>
  //          </Box>
  //         }
  //         </Box>
  //         </Box>
  //       </VStack>
  //     </Flex>
  // )

  return (<>
    <Flex
      id='hero'
      position={'relative'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={{sm: 'flex-start', lg:'end'}}
      textAlign={'center'}
      verticalAlign={'baseline'}
      minH={{base: '240px', lg: '300px'}}
      zIndex={1}
      borderRadius={'4px'}
      >
        <Image src='/banner.png' position={'absolute'} 
          top={0} zIndex={0} left={0} w={'100%'} h={'100%'} objectFit={'cover'} 
          verticalAlign={'middle'} objectPosition={'center center'}
          borderRadius={'8px'}
        />
        <VStack w={'90%'} color={'white'} fontWeight={600} zIndex={1} gap={3} mt={4} transform={{lg: 'translateY(70px)'}}>
          <Heading zIndex={1} color={'white'} py={3} fontSize={'clamp(20px, 2vw, 30px)'}>Properties to call home</Heading>
          {/* <Box bg={'rgb(11 17 52 / 65%)'} w={'full'} p={3} borderRadius={'5px'}> */}
          <Box bg={'rgb(11 17 52 / 65%)'} w={'full'} >
          <Flex alignItems={'center'} id='explore' px={3} py={2} w={'full'}>
            <Box cursor={'pointer'} onClick={() => {active_element('buy')}} 
              className='button buy'
              borderBottom={'2px solid white'} w={'50%'} py={2}
            >
              <Text>Buy</Text>
            </Box>
            <Box cursor={'pointer'} onClick={() => {active_element('rent')}} className='button rent' 
              borderBottom={'2px solid white'} w={'50%'} py={2}
            >
              <Text>Rent</Text>
            </Box>
            <Box cursor={'pointer'} onClick={() => {active_element('sold')}} className='button sold'
             borderBottom={'2px solid white'} w={'50%'} py={2}
            >
              <Text>Sold</Text>
            </Box>
            <Box cursor={'pointer'} onClick={() => {active_element('address')}} className='button address'
              borderBottom={'2px solid white'} w={'50%'} py={2}
            >
              <Text>Address</Text>
            </Box>
            <Box cursor={'pointer'} onClick={() => {active_element('agent')}} className='button agent'
             borderBottom={'2px solid white'} w={'50%'} py={2}
            >
              <Text>Agent</Text>
            </Box>
          </Flex>
          <Box display={'flex'} gap={2} px={3} alignItems={'center'}>
            {searchparameters.searched.map((search, index) => (
              <Box border={'1px solid white'} key={index} gap={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={3} py={2} borderRadius={'20px'}>
                <Text fontSize={'clamp(8px, 2vw, 13px)'}> {search.map((sx) => sx + ' ')} </Text>
                <Box cursor={'pointer'} onClick={() => {setSearchParameters({...searchparameters, searched: searchparameters.searched.filter((searches) => searches !== search)})}}>
                  <MdCancel />
                </Box>
              </Box>
            ))}
          </Box>
          <Box bg={'transparent'} px={3} py={2} gap={2} display={'flex'} w={'full'} justifyContent={'center'} alignItems={'center'}>
            <InputGroup>
              <InputLeftElement>
                <BiSearch />
              </InputLeftElement>
              {isLargerThan480 ? (
                <Input outline={'none'} border={'2px solid white'} 
                  placeholder={activeElement !== 'address' ? 'Search suburb, postcode, or state': 'Search address'}
                  _placeholder={{fontWeight: '600', fontSize : 'clamp(14px, 2vw, 20px)'}} value={searchparameters.search}
                  onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})}
                />
               ): (
                <Input outline={'none'} border={'2px solid white'} placeholder='Search surweburb, postcode, or state' 
                  _placeholder={{fontWeight: '600', fontSize : 'clamp(14px, 2vw, 20px)'}} value={searchparameters.search} cursor={'pointer'}
                  onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})} isReadOnly={true} onClick={onOpen}
                />
               )
              }
            </InputGroup>
            <Button bg={'rgb(26 62 52)'} display={{base: 'none', sm: 'flex'}} onClick={(handleSearch)} p={2} px={4} color={'white'} borderRadius={'5px'}>
              Search
            </Button>
          </Box>
          <Box position={'relative'} w={'full'}>
          {isSearching &&
           <Box pt={3} w={'full'} m={0} p={3} bg={'rgb(11 17 52 / 65%)'} position={'absolute'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
            <Divider h={'1px'} my={'10px'} w={'full'} bg={'white'} />
            <Box w={'full'}>
              {searches
               ? (
                <Box w={'full'} display={'flex'} flexDir={'column'} gap={2}>
                  {searches.map((location, index) => (
                    <Flex w={'full'} key={index} justifyContent={'space-between'} cursor={'pointer'} p={2} borderRadius={'5px'} 
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
        </VStack>
    </Flex>

    {!isLargerThan480 && (
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent minW={'full'} h={'100vh'} bg={'white'} m={0}>
        <ModalHeader>
          <Box display={'flex'} flexDir={'row'} alignItems={'center'} gap={1}>
            <Button p={0} m={0} bg={'transparent'} _hover={{bg: 'transparent'}} onClick={onClose}>
              <IoMdArrowBack size={24}/>
            </Button>
            <Input outline={'none'} border={'2px solid white'} w={'full'}
              placeholder={activeElement !== 'address' ? 'Search suburb, postcode, or state': 'Search address'}
              _placeholder={{fontWeight: '600', fontSize : 'clamp(14px, 2vw, 20px)'}} value={searchparameters.search}
              onChange={(e) => setSearchParameters({...searchparameters, search: e.target.value})}
            />
            <Button className='main_bg' onClick={(handleSearch)} p={2} px={4} 
              color={'white'} borderRadius={'5px'}
            >
              <IoSearch size={24} />
            </Button>
          </Box>
        </ModalHeader>
        <ModalBody>
        <Box position={'relative'} w={'full'}>
          {isSearching &&
           <Box pt={3} w={'full'} m={0} p={3}  display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
            <Divider h={'1px'} my={'10px'} w={'full'} bg={'white'} />
              <Box w={'full'}>
                {searches
                 ? (
                  <Box w={'full'} display={'flex'} flexDir={'column'} gap={2}>
                    {searches.map((location, index) => (
                      <Flex w={'full'} key={index} justifyContent={'space-between'} cursor={'pointer'} p={2} borderRadius={'5px'} 
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
        </ModalBody>
      </ModalContent>
    </Modal>
    )}
  </>)
}
