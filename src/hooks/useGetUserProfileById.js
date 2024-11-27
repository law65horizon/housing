import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
// import { firestore } from "../Firebase/Firebase";
import useUserProfileStore from "../store/userProfileStore";
import { firestore } from "../FireBase/FireBase";
import { useLocation } from "react-router-dom";

const useGetUserProfileById = (userId) => {
	const location = useLocation()
	console.log(userId, location.pathname)
	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	// const [userProfile, setUserProfile] = useState([]);
	const {userProfile, setUserProfile} = useUserProfileStore()
	// const [reload, setReload] = useState(false)

	useEffect(() => {
		const getUserProfile = async () => {
			if (userId === undefined) return
			setIsLoading(true);
			setUserProfile([]);
			try {
				const userRef = await getDoc(doc(firestore, "users", userId));
				const profile = []
				if (userRef.exists()) {
					profile.push(userRef.data())
				}
				setUserProfile(profile)
			} catch (error) {
				showToast("Error", error.message, "error");
				// console.log(error)
			} finally {
				setIsLoading(false);
			}
		};
		getUserProfile();
	}, [showToast, setUserProfile, userId]);

	return { isLoading, userProfile, setUserProfile };
};

export default useGetUserProfileById;