import { Box, Button, Divider, Flex, Input, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useSetPreferences from '../../hooks/useSetPreferences'
import useAuthStore from '../../store/authStore'
import useShowToast from '../../hooks/useShowToast'

const EditProfile = ({profile}) => {
    const [startEdit, setStartEdit] = useState(false)
    // const [isLoading, setisLoading] = useState(false)
    const [startEditUs, setstartEditUs] = useState(false)
    const [startEditPn, setstartEditPn] = useState(false)
    const showToast = useShowToast()
    const {isLoading, setPreferences} = useSetPreferences(profile.uid)
    const [inputs, setInputs] = useState({
        username: '',
        firstname: '' ,
    })
    useEffect(() => {
        setInputs(profile)
    }, [])

    console.log(inputs)

    const handleChange = (queries) => {
        if(!navigator.onLine) {
            showToast('Error', 'Client is offline', 'error')
            return
        }
        setPreferences(queries)
        // setReload(true)
        setstartEditPn(false)
        setstartEditUs(false)
        setStartEdit(false)
    }
    // console.log(startEdit, startEditUs)
    // console.log(inputs)

  return (<>
    <UnorderedList listStyleType={'none'} gap={2}>
        <ListItem pb={5} w={'full'}>
            <Text textAlign={'end'} fontWeight={'400'}><b>UID: {profile?.uid} </b></Text>
        </ListItem>
        <ListItem>
            <Text fontWeight={500}>Name</Text>
            {startEdit ? (
                <Flex justifyContent={'space-between'} gap={2} direction={{base: 'column', md: 'row'}} fontWeight={'unset'} px={1} alignItems={'center'}>
                    <Input mt={'5px'} placeholder='Agent' fontWeight={600} 
                      value={inputs.firstname} onChange={(e) => setInputs({...inputs, firstname: e.target.value})}
                    />
                    <Flex gap={2} w={'full'}>
                        <Button onClick={() => setStartEdit(false)}>Cancel</Button>
                        <Button onClick={() => handleChange({firstname: inputs.firstname})} isLoading={isLoading}>Update</Button>
                    </Flex>
                </Flex> 
            ) : (
                <Flex justifyContent={'space-between'}fontWeight={'unset'} px={1} alignItems={'center'}>
                    <Text> {inputs?.firstname} </Text>
                    <Button onClick={() => setStartEdit(true)}>Edit</Button>
                </Flex>
            )
            }
        </ListItem>
        <Divider py={2} h={'2px'}/>
        <ListItem>
            <Text fontWeight={500}>Last Name</Text>
            {startEditUs ? (
                <Flex justifyContent={'space-between'} gap={2} direction={{base: 'column', md: 'row'}} fontWeight={'unset'} px={1} alignItems={'center'}>
                    <Input mt={'5px'} placeholder='Agent' fontWeight={600} 
                      value={inputs.lastname} onChange={(e) => setInputs({...inputs, lastname: e.target.value})}
                    />
                    <Flex gap={2} w={'full'}>
                        <Button onClick={() => setstartEditUs(false)}>Cancel</Button>
                        <Button onClick={() => handleChange({lastname: inputs.lastname})} isLoading={isLoading}>Update</Button>
                    </Flex>
                </Flex> 
            ) : (
                <Flex justifyContent={'space-between'}fontWeight={'unset'} px={1} alignItems={'center'}>
                    <Text> {inputs?.lastname} </Text>
                    <Button onClick={() => setstartEditUs(true)}>Edit</Button>
                </Flex>
            )
            }
        </ListItem>
        <Divider py={2} h={'2px'}/>
        <ListItem>
            <Text fontWeight={500}>Phone Number</Text>
            {startEditPn ? (
                <Flex justifyContent={'space-between'} gap={2} direction={{base: 'column', md: 'row'}} fontWeight={'unset'} px={1} alignItems={'center'}>
                    <Input mt={'5px'} placeholder='Phone Number' fontWeight={600} pattern='[0-9]{10}'
                      value={inputs.phone_no} type='tel' onChange={(e) => setInputs({...inputs, phone_no: e.target.value})}
                    />
                    <Flex gap={2} w={'full'}>
                        <Button onClick={() => setstartEditPn(false)}>Cancel</Button>
                        <Button onClick={() => handleChange({phone_no: inputs.phone_no})} isLoading={isLoading}>Update</Button>
                    </Flex>
                </Flex> 
            ) : (
                <Flex justifyContent={'space-between'}fontWeight={'unset'} px={1} alignItems={'center'}>
                    <Text> {inputs?.phone_no || 'No Phone Number'} </Text>
                    <Button onClick={() => setstartEditPn(true)}>Edit</Button>
                </Flex>
            )
            }
        </ListItem>
    </UnorderedList>
  </>)
    // return(<>
    //   <Box w={'full'}>
    //             <label htmlFor='agent'>Agent</label>
                // <Input mt={'5px'} placeholder='Agent' fontWeight={600} 
                //   value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}
                // />
    //           </Box>
    // </>)
}

export default EditProfile