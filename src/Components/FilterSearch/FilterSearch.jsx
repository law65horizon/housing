import { Box, Button, Divider, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const FilterSearch = ({isOpen, onClose, handleSearch, searchparameters, setSearchParameters}) => {
    const location = useLocation()
    const [activeElement, setActiveElement] = useState(searchparameters.sale_type)
    const initial_params = {
        type: '',
        search: '',
        searched: [],
        min_price: '',
        max_price: '',
        bedrooms: '',
        bathrooms: '',
        sale_type: '',
      }
    // const {isOpen, onClose, onOpen} = useDisclosure()
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
    }

  return (
    <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={'4xl'} pb={4}>
                <ModalHeader>Filters</ModalHeader>
                <ModalCloseButton />
                <ModalBody py={2} w={'full'} h={'full'}>
                    {/* {!location.pathname === '/' && (
                        <Box>
                            
                        </Box>
                    )} */}
                    <Divider />
                    <Flex alignItems={'center'} justifyContent={'space-evenly'} textAlign={'center'} id='explore' px={3} w={'full'}>
                        <Box cursor={'pointer'} onClick={() => {active_element('buy')}} 
                          className='button buy'
                          borderBottom={'2px solid white'} w={'50%'} py={2}
                        >
                            <Text>Buy</Text>
                        </Box>
                        <Box cursor={'pointer'} onClick={() => {active_element('rent')}} 
                          className='button rent'
                          borderBottom={'2px solid white'} w={'50%'} py={2}
                        >
                            <Text>Rent</Text>
                        </Box>
                        <Box cursor={'pointer'} onClick={() => {active_element('sold')}} 
                          className='button sold'
                          borderBottom={'2px solid white'} w={'50%'} py={2}
                        >
                            <Text>Sold</Text>
                        </Box>
                    </Flex>
                    <Divider />
                    <Box >
                        <Flex w={'full'} pt={5} gap={2} fontSize={20}>
                            <Select bg={'ButtonFace'} w={'50%'} value={searchparameters.sale_type} fontSize={'small'} placeholder='Any' 
                              onChange={(e) => setSearchParameters({...searchparameters, sale_type: e.target.value})}
                            >
                                <option value='rent'>Rent</option>
                                <option value='buy'>Buy</option>
                                <option value='sold'>Sold</option>
                            </Select>
                            <Select bg={'ButtonFace'} value={searchparameters.type} w={'50%'} fontSize={'small'} placeholder='Any'
                              onChange={(e) => setSearchParameters({...searchparameters, type: e.target.value})}
                            >
                                <option value='homes'>Homes</option>
                                <option value='office'>Office</option>
                                <option value='land'>Land</option>
                                <option value='warehouses'>WareHouses</option>
                            </Select>
                        </Flex>
                    </Box>
                    <Divider my={8} />
                    <Box>
                        <Text fontSize={20} py={5}>Price</Text>
                        <Flex w={'full'} gap={2}>
                            <Box w={{base: 'full', md: '50%'}}>
                                <label>Min. Price</label>
                                <Input placeholder='Min. price' value={searchparameters.min_price}
                                  onChange={(e) => setSearchParameters({...searchparameters, min_price: e.target.value})}
                                />
                            </Box>
                            <Box w={{base: 'full', md: '50%'}}>
                                <label>Max. Price</label>
                                <Input placeholder='Max. price' value={searchparameters.max_price}
                                  onChange={(e) => setSearchParameters({...searchparameters, max_price: e.target.value})}
                                />
                            </Box>
                        </Flex>
                    </Box>
                    <Divider my={8}/>
                    <Box >
                        <Flex w={'full'} gap={2} fontSize={20}>
                            <Box w={{base: 'full', md: '50%'}}>
                                <Text pb={2}>Bedrooms</Text>
                                <Input placeholder='Bedrooms' value={searchparameters.bedrooms}
                                  onChange={(e) => setSearchParameters({...searchparameters, bedrooms: e.target.value})}
                                />
                            </Box>
                            <Box w={{base: 'full', md: '50%'}}>
                                <Text pb={2}>Bathrooms</Text>
                                <Input placeholder='Max. price' value={searchparameters.bathrooms}
                                  onChange={(e) => setSearchParameters({...searchparameters, bathrooms: e.target.value})}
                                />
                            </Box>
                        </Flex>
                    </Box>
                    <Box display={'flex'} pt={5} alignItems={'center'} justifyContent={'space-between'}>
                        <Button onClick={() => setSearchParameters(initial_params)}>Reset</Button>
                        <Button onClick={() => {
                          handleSearch()
                          onClose()
                        }}>Search</Button>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default FilterSearch