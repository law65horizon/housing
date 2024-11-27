import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from '../FireBase/FireBase'
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
	const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);

	const signup = async (inputs) => {
		if (!inputs.email || !inputs.password || !inputs.firstname || !inputs.lastname) {
			showToast("Error", "Please fill all the fields", "error");
			return;
		}
		if(!navigator.onLine) {
			showToast('Error', 'Client is offline', 'error')
			return
		}

		const usersRef = collection(firestore, "users");

		const q = query(usersRef, where("email", "==", inputs.email));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			showToast("Error", "User already exists", "error");
			return;
		}

		try {
			const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser && error) {
				showToast("Error", error.message, "error");
				return;
			}
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
                    email:inputs.email,
                    firstname: inputs.firstname,
                    lastname: inputs.lastname,
                    phone_no: inputs.phone_no,
                    bio:"",
                    profilePicUrl: "",
                    saved_searches:[],
                    saved_properties: [],
                    owned_properties: [],
                    searches: [],
                    viewed_properties: [],
                    preferences: {
                       email_subscription: inputs.email_subscription,
                       suggested_properties: true,
                       personalized_ads: true
                    },
                    createdAt: Date.now()
			    };
				const {saved_properties,uid, saved_searches, searches, viewed_properties} = userDoc
				const deUserDoc = {saved_properties, uid, saved_searches, searches, viewed_properties}
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(deUserDoc));
				loginUser(deUserDoc);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;