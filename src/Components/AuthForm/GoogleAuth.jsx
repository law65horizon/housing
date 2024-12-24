import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useShowToast from '../../hooks/useShowToast';
import useAuthStore from '../../store/authStore';
// import { auth, firestore } from '../../Firebase/Firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../../FireBase/FireBase';
  
const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);

	const handleGoogleAuth = async () => {
		console.log('sos')
		try {
			const newUser = await signInWithGoogle();
			if (!newUser && error) {
				showToast("Error", error.message, "error");
				return;
			}
			const userRef = doc(firestore, "users", newUser.user.uid);
			const userSnap = await getDoc(userRef);

			if (userSnap.exists()) {
				// login
				const userDoc = userSnap.data();
				const {saved_properties,preferences, uid, saved_searches, searches, viewed_properties} = userDoc
				const deUserDoc = {saved_properties,preferences, uid, saved_searches, searches, viewed_properties}
				localStorage.setItem("user-info", JSON.stringify(deUserDoc));
				loginUser(deUserDoc);
			} else {
				// signup
				const userDoc = {
					uid: newUser.user.uid,
					email: newUser.user.email,
					username: newUser.user.email.split("@")[0],
					firstname: newUser.user.displayName.split(' ')[0],
                    phone_no: '',
					lastname: newUser.user.displayName.split(' ')[1],
					profilePicURL: newUser.user.photoURL,
					saved_searches:[],
                    saved_properties: [],
                    owned_properties: [],
                    searches: [],
                    viewed_properties: [],
                    preferences: {
                        email_subscription: true,
                        suggested_properties: true,
                        personalized_ads: true
                    },
					createdAt: Date.now(),
				};
				const {saved_properties, preferences, saved_searches, searches, viewed_properties} = userDoc
				const deUserDoc = {saved_properties, preferences, saved_searches, searches, viewed_properties}
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(deUserDoc));
				loginUser(deUserDoc);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

  return (
    <Flex alignItems={'center'} justifyContent={"center"} w={'full'} cursor={"pointer"} onClick={() => handleGoogleAuth()} p={2} border={'1px solid black'}>
       <Image src='/google.png' w={5} alt='google logo'/>
       <Text mx={2} color={"blue.500"}>{prefix} with Google</Text>
    </Flex>
  )
}

export default GoogleAuth