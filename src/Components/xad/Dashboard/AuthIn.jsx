import { AbsoluteCenter, Alert, AlertIcon, Box, Button, Divider, Flex, FormControl, Heading, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import useSignUpWithEmailAndPassword from '../../../hooks/useSignUpWithEmailAndPassword';
// import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

const AuthIn = ({setIsLogin}) => {
	const [inputs, setInputs] = useState({
		firstname: '',
        lastname: '',
        email: '',
        phone_no: '',
    // username: '',
        password: '',
    // confirm_password: '',
        email_subscription: false
	});
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, signup } = useSignUpWithEmailAndPassword();

    return (
        <Box>
            <Heading color={'black'}>Sign up to save properties and access more insights and features</Heading>
            <Text py={2} className={'main_text_color'}>Have an account? <Link style={{textDecoration: 'underline'}} onClick={() => setIsLogin(true) }><b>Sign in</b></Link></Text>
            <Box>
                <VStack gap={3}>
                    <Flex w={'full'} gap={3}>
                        <Input 
                            _placeholder={{fontWeight: '600'}}
                             w={'50%'} 
                            placeholder='First Name' type='text'
                            value={inputs.firstname} onChange={(e) => setInputs({...inputs, firstname: e.target.value})}
                        />
                        <Input 
                            _placeholder={{fontWeight: '600'}}
                            w={'50%'} placeholder='Last Name' 
                            type='text'
                            value={inputs.lastname} onChange={(e) => setInputs({...inputs, lastname: e.target.value})}
                        />
                    </Flex>
                    <Input 
                        _placeholder={{fontWeight: '600'}}
                        w={'full'} placeholder='Email Address' 
                        type='email' name='email'
                        value={inputs.email} onChange={(e) => setInputs({...inputs, email: e.target.value})}
                    />
                    <Input 
                        _placeholder={{fontWeight: '600'}}
                        w={'full'} placeholder='Phone number'
                        type='number' name='phone_no'
                        value={inputs.phone_no} onChange={(e) => setInputs({...inputs, phone_no: e.target.value})}
                    />
                    {/* <Flex w={'full'} justifyContent={'space-around'}>
                        <Button colorScheme='blue'>
                            Agent
                        </Button>
                        <Button colorScheme='blue'>
                            LandLord
                        </Button>
                        <Button colorScheme='blue'>
                            User
                        </Button>
                    </Flex> */}
                    <InputGroup>
                        <Input
                            placeholder="Password"
                            fontSize={14}
                            _placeholder={{fontWeight: '600'}}        
                            type={showPassword ? 'text' : 'password'}
                            value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
                            // value={inputs.password}
                            // size={'sm'}
                        />
                        <InputRightElement h={'full'}>
                            <Button variant={'ghost'} size={'sm'} my={3} onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <FaRegEye /> : <FaRegEyeSlash/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input
                            placeholder="Confirm Password"
                            fontSize={14}
                            _placeholder={{fontWeight: '600'}}        
                            type={showPassword ? 'text' : 'password'}
                            // value={inputs.confirm_password} onChange={(e) => setInputs({...inputs, confirm_password: e.target.value})}
                            // value={inputs.password}
                            // size={'sm'}
                        />
                        <InputRightElement h={'full'}>
                            <Button variant={'ghost'} size={'sm'} my={3} onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <FaRegEye /> : <FaRegEyeSlash/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box w={'full'}>
                        <Text className='main_text_color' textAlign={'start'}>
                            <b>Email preferences</b>
                        </Text>
                        <Text>
                            I agree to regular updates of property listings, real estate insights and new
                             projects development from PropertyPro and our partners
                        </Text>
                        <Flex py={3} gap={3}>
                            <Button colorScheme='teal' className='subscribe' variant='outline' onClick={() => setInputs({...inputs, email_subscription: false})}>
                                No thanks
                            </Button>
                            <Button colorScheme='teal' className='subscribe' variant='outline' onClick={() => setInputs({...inputs, email_subscription: true})}>
                                Yes, please
                            </Button>
                        </Flex>
                        <Text className='main_text_color'><b>You can update your preferences anytime</b></Text>
                    </Box>
                    {error && (
                        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                            <AlertIcon fontSize={12}/>
                            {error.message}
                            </Alert>
                    )}
                    <Button colorScheme='blue' w={'full'} py={4}
                      isLoading={loading} onClick={() => signup(inputs)}
                    >
                        Register
                    </Button>
                </VStack>
            </Box>
        </Box>
      )
};

export default AuthIn;