import { AbsoluteCenter, Box, Divider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsHouse } from 'react-icons/bs'
import SignUp from './SignUp'
import SignIn from './SignIn'
import GoogleAuth from './GoogleAuth'

const AuthForm = ({param}) => {
    function get_isLogin(param) {
        if(param === 'sign_in') {
            return true
        }else if(param === 'sign_up') {
            return false
        } else {
            return true
        }
    }
    const result = param? get_isLogin(param) : true
    const [isLogin, setIsLogin] = useState(result)
    return (
    <Box>
        <VStack spacing={4} w={'full'}>
            <Box>
                { isLogin? <SignIn setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin}/> }
            </Box>
            <Box position='relative' padding='10' w={'full'}>
                <Divider bg={'gray'} h={'1px'}/>
                <AbsoluteCenter bg='white' px='4'>
                    or continue with Google
                </AbsoluteCenter>
            </Box>
            <GoogleAuth prefix={isLogin? 'Log in' : 'Sign up'}/>
        </VStack>
    </Box>
  )
}

export default AuthForm