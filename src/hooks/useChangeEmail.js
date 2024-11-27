import React from 'react'
import useShowToast from './useShowToast'
import { auth } from '../FireBase/FireBase'
import { useUpdateEmail } from 'react-firebase-hooks/auth'
import { sendEmailVerification, updateEmail } from 'firebase/auth'

const useChangeEmail = () => {
  // const [updateEmail, updating, error] = useUpdateEmail(auth)
  const updating = false
  const showToast = useShowToast()
  const changeEmail = async(email) => {
    const user = auth.currentUser
    console.log(email)
    if(!user.emailVerified) {
      showToast('Error', 'emaioldo', 'error')
    } else {
      // try {
      //   await updateEmail(user, 'charlespierce769@gmail.com').then(() => {
      //     console.log('dios')
      //   })
      // } catch (error) {
      //   showToast('Error', error.message, 'error')
      //   console.log(error.code)
      // }
      sendEmailVerification(user)
  .then(() => {
    showToast('Succes', 'dosi', 'success')
    // Email verification sent
  })
  .catch((error) => {
    // Handle error
  });

    }

    // updateEmail(auth.currentUser, "user@example.com").then(() => {
    //   // Email updated!
    //   // ...
    // }).catch((error) => {
    //   // An error occurred
    //   // ...
    //   console.log(error)
    // });
  }
  return {updating, changeEmail}
}

export default useChangeEmail