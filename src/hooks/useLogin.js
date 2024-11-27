import React from 'react'
import useShowToast from './useShowToast'
// import { auth, firestore } from '../FireBase/FireBase'
import { doc, getDoc } from 'firebase/firestore'
import useAuthStore from '../store/authStore'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../FireBase/FireBase'



const useLogin = () => {
    const showToast = useShowToast()
    const [
      signInWithEmailAndPassword, ,
      loading,
      error
    ] = useSignInWithEmailAndPassword(auth)
    const loginUser = useAuthStore((state) => state.login)

    const login = async(inputs) => {
        if(!inputs.email || !inputs.password) {
            return showToast('Error', 'Please fill all the fields', 'error')
        }
        if(!navigator.onLine) {
            showToast('Error', 'Client is offline', 'error')
            return
        }
        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)
            if(userCred) {
                const docRef = doc(firestore, 'users', userCred.user.uid)
                const docSnap = await getDoc(docRef)
                const userDoc = docSnap.data()
                const {saved_properties, saved_searches, uid, searches, viewed_properties} = userDoc
				const deUserDoc = {saved_properties, uid, saved_searches, searches, viewed_properties}
                localStorage.setItem('user-info', JSON.stringify(deUserDoc))
                loginUser(deUserDoc)
            }
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }
    return {loading, error,login}
}

export default useLogin

// const useLogin = () => {
// 	const showToast = useShowToast();
// 	const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
// 	const loginUser = useAuthStore((state) => state.login);

// 	const login = async (inputs) => {
// 		if (!inputs.email || !inputs.password) {
// 			return showToast("Error", "Please fill all the fields", "error");
// 		}
// 		try {
// 			const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

// 			if (userCred) {
// 				const docRef = doc(firestore, "users", userCred.user.uid);
// 				const docSnap = await getDoc(docRef);
// 				localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
// 				loginUser(docSnap.data());
// 			}
// 		} catch (error) {
// 			showToast("Error", error.message, "error");
// 		}
// 	};

// 	return { loading, error, login };
// };

// export default useLogin;