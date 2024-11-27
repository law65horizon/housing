import { Box, Button, Container, Divider, Flex, Heading, Input, Link, Modal, ModalBody, ModalContent, ModalOverlay, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import DynamicLoad from '../../Components/DynamicLoad/DynamicLoad'
import { CiMail } from 'react-icons/ci'
import { FaCircleCheck, FaRegCircle } from 'react-icons/fa6'
import useAuthStore from '../../store/authStore'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import useShowToast from '../../hooks/useShowToast'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, firestore } from '../../FireBase/FireBase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { BiPhone } from 'react-icons/bi'
import useChangeEmail from '../../hooks/useChangeEmail'

const ProfileSettings = () => {
    const [user, loading, error] = useAuthState(auth)
  const [activeElement, setActiveElement] = useState('account')
  const userdata = useAuthStore(state => state.user)
  const {changeEmail, updating} = useChangeEmail()
  const [email, setEmail] = useState('')
  const {userProfile, isLoading, setReload} = useGetUserProfileById(userdata?.uid)
  const [hd, sethd] = useState(false)
  const showToast = useShowToast()
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {setPreferences} = useSetPreferences(userdata?.uid)

  const active_element = (section) => {
    setActiveElement(section)
    const parentEle = document.getElementById('explore') 
    const buttons = parentEle.querySelectorAll('.button')
    buttons.forEach((button) => button.classList.remove('active_button1'))
    const active_button = parentEle.querySelector(`button.${section}`)
    active_button.classList.add('active_button1')
    // this.isActive = true
  }
  const handleChange = (preferences) => {
    if(!navigator.onLine) {
        showToast('Error', 'Client is offline', 'error')
        return
    }
    const val = [...Object.keys(preferences)][0]
    userdata.preferences[val] = preferences[val]
    setPreferences(userdata)
    // console.log('userdata')
    localStorage.setItem('user-info', JSON.stringify(userdata))
    // console.log(preferences[val])
  }
  const jsee = auth.currentUser
//   console.log(jsee)
//   console.log(userProfile[0]?.email)
  if(!loading && !user) return (<>
    <Navigate to={'/auth/sign_in'} />
    {/* // <Navigate to={'/auth/sign_in'} /> */}
 </> )
  return (<>
    {loading ? (
        <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
            <Spinner size='xl' />
       </Flex>
    ) : (
      <Box bg={'ButtonFace'} h={'100%'}>
        <Divider h={'3px'} bg={'black'}/>
        <Container maxW={'5xl'} py={4}>
            <Heading py={4}>Settings</Heading>
            <Flex justifyContent={'space-around'} id='explore' pb={3}>
                <Button minW={'100px'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0} onClick={() => {active_element('account')}} 
                    className='button active_button1 account' bg={'transparent'}
                >
                    <Text px={4} py={2}>Account</Text>
                </Button>
                <Button minW={'100px'} borderBottom={'1px solid gray'} w={'full'} borderRadius={0} onClick={() => {active_element('preferences')}} 
                    className='button preferences' bg={'transparent'}
                >
                    <Text px={4} py={2}>Preferences</Text>
                </Button>
            </Flex>
            <DynamicLoad activeElement={activeElement}>
                <Box id='account' pt={5}>
                    <Box>
                        <label style={{fontSize: 18}}>Email</label>
                        <Flex pt={2} justifyContent={'space-between'}>
                            <Flex gap={2}>
                                <CiMail size={24} />
                                <Text> {userProfile[0]?.email} </Text>
                            </Flex>
                            <Box><Link fontWeight={700} onClick={onOpen} fontSize={20} color={'blue.500'}>Change Email</Link></Box>
                        </Flex>
                    </Box>
                </Box>
                <Box id='preferences' pt={5}>
                    <Flex py={3} gap={6} flexDirection={'column'}>
                        <Flex justifyContent={'space-between'} gap={3} alignItems={'center'}>
                            <Text>Email subscription</Text>
                            <Box cursor={'pointer'} bg={userdata?.preferences?.email_subscription === true? 'black': 'white'}
                             onClick={() => handleChange({email_subscription: !userdata.preferences.email_subscription})} border={'1px solid black'} minW={'60px'} display={'flex'}
                              justifyContent={userdata?.preferences.email_subscription? 'end':'unset'} borderRadius={'20px'} 
                            > 
                                {userdata?.preferences.email_subscription === true ? (
                                    <FaCircleCheck color='white' size={30} />
                                ): (
                                    // <FaRegCircle size={30} />
                                    <Box w={'30px'} h={'30px'} borderRadius={'50%'} border={'2px solid black'}></Box>
                                )}
                            </Box>
                        </Flex>
                        <Text p={2}>
                            We use your latest property searches to suggest relevant properties 
                            on our website and app. Turning this off means you’ll no longer see those suggestions.
                        </Text>
                        <Divider bg={'gray'} h={'1px'} w={'full'}/>
                        <Flex justifyContent={'space-between'} gap={3} alignItems={'center'}>
                            <Text>Suggest Properties</Text>
                            <Box cursor={'pointer'} bg={userdata?.preferences.suggested_properties? 'black': 'white'} 
                               onClick={() => handleChange({suggested_properties: !userdata?.preferences.suggested_properties})} border={'1px solid black'} minW={'60px'} display={'flex'} 
                               justifyContent={userdata?.preferences.suggested_properties? 'end':'unset'} borderRadius={'20px'}
                            > 
                                {userdata?.preferences.suggested_properties ? (
                                    <FaCircleCheck color='white' size={30} />
                                ): (
                                    // <FaRegCircle size={30} />
                                    <Box w={'30px'} h={'30px'} borderRadius={'50%'} border={'2px solid black'}></Box>
                                )}
                            </Box>
                        </Flex>
                        <Text p={2}>
                            We use your latest property searches to suggest relevant properties 
                            on our website and app. Turning this off means you’ll no longer see those suggestions.
                        </Text>
                        <Divider bg={'gray'} h={'1px'} w={'full'}/>
                        <Flex justifyContent={'space-between'} gap={3} alignItems={'center'}>
                            <Text>Personalized ads</Text>
                            <Box cursor={'pointer'} bg={userdata?.preferences.personalized_ads? 'black': 'white'} 
                              onClick={() => handleChange({personalized_ads: !userdata?.preferences.personalized_ads})} border={'1px solid black'} minW={'60px'} display={'flex'} 
                              justifyContent={userdata?.preferences.personalized_ads? 'end':'unset'} borderRadius={'20px'}
                            > 
                                {userdata?.preferences.personalized_ads ? (
                                    <FaCircleCheck color='white' size={30} />
                                ): (
                                    // <FaRegCircle size={30} />
                                    <Box w={'30px'} h={'30px'} borderRadius={'50%'} border={'2px solid black'}></Box>
                                )}
                            </Box>
                        </Flex>
                        <Text p={2}>
                            We use your latest property searches to suggest relevant properties 
                            on our website and app. Turning this off means you’ll no longer see those suggestions.
                        </Text>
                    </Flex>
                </Box>
            </DynamicLoad>
        </Container>
        <Modal onClose={onClose} isOpen={isOpen} isCentered={true}>
            <ModalOverlay />
            <ModalContent maxW={'500px'} p={6}>
                <ModalBody>
                    <VStack gap={4} w={'full'}>
                        <Heading textAlign={'center'}>Email Update</Heading>
                        <Input value={email} name='email' type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
                        <Button colorScheme='blue' w={'full'} isLoading={updating} onClick={() => {
                          changeEmail(email)
                        //   onClose()
                        }}>
                          Update Email
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
      </Box>
    )
    }
  </>)
}

function useSetPreferences(id) {
    const [isLoading, setIsLoading] = useState(false)
    const showToast = useShowToast()

    // const queries = [
    //     {saved_searches: [{xd: 'mdo'}]}
    // ]
    // const conditions = queries.map((query) => [])

    const setPreferences = async(preferences) => {
        if(isLoading) return
        setIsLoading(true)
        try {
            const docRef = doc(firestore, 'users', id)
            // const docSnap = await getDoc(docRef)
            // console.log(docRef)
            await updateDoc(docRef, {...preferences})
            showToast('Success', 'Update Successfull', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
            // console.log(error)
        }finally {
            setIsLoading(false)
        }
    }

  return { isLoading, setPreferences }
}
export default ProfileSettings