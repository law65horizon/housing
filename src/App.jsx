import './App.css'
// import PageLayout from './PageLayout/PageLayout'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './Layout/PageLayout/PageLayout'
import HomePage from './Pages/HomePage/HomePage'
import View from './Pages/View/View'
import AuthPage from './Pages/AuthPage/AuthPage'
import Property from './Pages/View/Property'
import Profile from './Pages/Profile/Profile'
import Searches from './Pages/Profile/Searches'
import SavedProperty from './Pages/Profile/SavedProperty'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from './firebase/firebase'
import Auth from './Components/xad/Dashboard/Auth' 
import DashBoard from './Components/xad/Dashboard/DashBoard'
import { auth } from './FireBase/FireBase'
import ManageProperties from './Components/xad/Dashboard/ManageProperties'
import CreatePost from './Components/xad/Dashboard/CreatePost'
import EditPost from './Components/xad/Dashboard/EditPost'
import ManageUsers from './Components/xad/Dashboard/ManageUsers'
import ProfileDesc from './Pages/Profile/ProfileDesc'
import ProfileSettings from './Pages/Profile/ProfileSettings'
import useAuthStore from './store/authStore'
import ContactUs from './Pages/About/ContactUs'
import AboutUs from './Pages/About/AboutUs'
import TAC from './Pages/FacilityMgtPage.jsx/TAC'
import ApplicationProcess from './Pages/FacilityMgtPage.jsx/ApplicationProcess'
import InspectionProcess from './Pages/RentingHub/InspectionProcess'
import Booking from './Pages/About/HospitalityHub'
import IndustrialHub from './Pages/About/IndustrialHub'
import IndustrialCleaning from './Pages/EmploymentSourcing/IndustrialCleaning'
import Artisians from './Pages/EmploymentSourcing/Artisians'
import CorporateStaffing from './Pages/EmploymentSourcing/CorporateStaffing'
import DomesticStaffing from './Pages/EmploymentSourcing/DomesticStaffing'
import AgentTraining from './Pages/Mentorship/AgentTraining'
import ApartmentMgt from './Pages/FacilityMgtPage.jsx/ApartmentMgt'

function useSubdomain() {
  const {hostname} = window.location
  const subdomain = hostname.split('.')[0]
  return subdomain
}

function App() {

  const [user, loading, error] = useAuthState(auth)
  const authUser = useAuthStore(state => state.user)
  const subdomain = useSubdomain()

  return (
    <PageLayout>
      <Routes>
       {subdomain === 'admin' ?(
        <>
         <Route path='/' element={<Auth />} />
         <Route path='/dashboard' element={<DashBoard />} />
         <Route path='/dashboard/properties' element={<ManageProperties />} />
         <Route path='/dashboard/users' element={<ManageUsers />} />
         <Route path='/dashboard/createpost' element={<CreatePost />} />
         <Route path='/dashboard/properties/editpost' element={<EditPost />} />
        </>
       ): (
        <>
         <Route path='/' element={<HomePage /> } />
        <Route path='/:uid' element={<View />} />
        <Route path='/property/:desc' element={<Property />} />
        {/* <Route path='/auth' element={<AuthPage />  }  /> */}
        <Route path='/auth/:param' element={!user ? <AuthPage /> : <Navigate to={'/'} />} />
        <Route path='/auth/' element={!user ? <AuthPage /> : <Navigate to={'/'} />} />
           <Route path='/me' element={<Profile />} />
           <Route path='/searches' element={<Searches />} />
           <Route path='/profile' element={<ProfileDesc />} />
           <Route path='/settings' element={<ProfileSettings />} />
           <Route path='/contact_us' element={<ContactUs />} />
           <Route path='/industrial hub' element={<IndustrialHub />} />
           <Route path='/about_us' element={<AboutUs />} />
           <Route path='/renting-hub/inpections' element={<InspectionProcess />} />
           <Route path='/mgt/tac' element={<TAC />} />
           <Route path='/hospitality_hub/' element={<Booking />} />
           <Route path='/mgt/application-process' element={<ApplicationProcess />} />
           <Route path='/mgt/apartment-management' element={<ApartmentMgt />} />
           <Route path='/employment/cleaning-fumigation' element={<IndustrialCleaning />} />
           <Route path='/employment/corporate-staffing' element={<CorporateStaffing />} />
           <Route path='/employment/domestic-staffing' element={<DomesticStaffing />} />
           <Route path='/employment/artisians-hiring' element={<Artisians />} />
           <Route path='/mentorship/agent-training' element={<AgentTraining />} />
           <Route path='/saved-properties' element={<SavedProperty />} />
        </>
       )
       }
      </Routes>
    </PageLayout>
  )
}

export default App
