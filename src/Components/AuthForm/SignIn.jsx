import { AbsoluteCenter, Alert, AlertIcon, Box, Button, Link, Divider, Heading, Input, InputGroup, InputRightElement, Text, VStack, useDisclosure, Modal, ModalContent, ModalOverlay, ModalBody } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { auth } from '../../FireBase/FireBase'
import useShowToast from '../../hooks/useShowToast'

const SignIn = ({setIsLogin}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showPassword, setShowPassword] = useState(false)
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })  
  const {error, loading, login} = useLogin()
  const {sending, passwordReset} = usePasswordReset()
  return (<>
    <Box>
      <Heading color={'black'}>Sign in to save properties and access more insights and features</Heading>
      <Text py={2} className={'main_text_color'}>No account? <Link style={{textDecoration: 'underline'}} onClick={() => (setIsLogin(false))}><b>Register</b></Link></Text>
      <VStack gap={3}>
        <Input 
          w={'full'}
          placeholder='Email address'
          _placeholder={{fontWeight: '600'}}
          type='email'
          name='email'
          value={inputs.email}
          onChange={(e) => setInputs({...inputs, email: e.target.value})}
        />
        <InputGroup>
          <Input
            placeholder="Password"
            fontSize={14}        
            type={showPassword ? 'text' : 'password'}
            _placeholder={{fontWeight: '600'}}
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
            <InputRightElement h={'full'}>
              <Button variant={'ghost'} size={'sm'} my={3} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash/>}
              </Button>
            </InputRightElement>
        </InputGroup>
        <Box position='relative' w={'full'} px={10} py={5}>
          <Divider />
          <AbsoluteCenter bg='white' px='4'>
            <Link color='gray' onClick={onOpen}>Forgot Password</Link>
          </AbsoluteCenter>
        </Box>
        {error && (
          <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>
            {error.message}
          </Alert>
        )}
        <Button colorScheme='blue' w={'full'} py={4} isLoading={loading} onClick={() => login(inputs)} > Login</Button>
      </VStack>
    </Box>

    <Modal onClose={onClose} isOpen={isOpen} isCentered={true}>
      <ModalOverlay />
      <ModalContent maxW={'500px'} p={6}>
        <ModalBody>
          <VStack gap={4} w={'full'}>
            <Heading textAlign={'center'}>Recover your password</Heading>
            <Text>You can request a password reset below. We will send a security code to the email address, please make sure it is correct.</Text>
            <Input value={inputs.email} name='email' type='email' placeholder='Enter email' onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
            <Button colorScheme='blue' w={'full'} isLoading={sending} onClick={() => {
              passwordReset(inputs.email)
              onClose()
            }}>Send Reset Link</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>)
}

export default SignIn

function usePasswordReset() {
  const [isLoading, setIsLoading] = useState()
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
  const showToast = useShowToast()

  const passwordReset = async(email) => {
    if(!email) {
      showToast('Error', 'Input email address')
    }
    if(!navigator.onLine) {
      showToast('Error', 'Client is offline', 'error')
      return
    }
    try {
      await sendPasswordResetEmail(email)
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return {sending, passwordReset}
} 