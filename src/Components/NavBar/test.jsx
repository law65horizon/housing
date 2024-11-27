
// import { Box, Button, Container, Divider, Flex, Heading, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, OrderedList, Text, Tooltip, UnorderedList, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { BsHammer, BsHouse } from 'react-icons/bs'
// import { CgToggleSquare } from 'react-icons/cg'
// import { Link as RouterLink, useLocation } from 'react-router-dom'
// // import { Link } from '@chakra-ui/react'
// import { IoMenu, IoMenuSharp } from 'react-icons/io5'
// import { Link } from '@chakra-ui/react'
// import { GiCancel } from 'react-icons/gi'
// import { auth } from '../../FireBase/FireBase'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import Footer from '../Footer/Footer'
// import { FaCircleUser } from 'react-icons/fa6'
// import useLogout from '../../hooks/useLogout'
// import EmploymentSourcing from './NavBarFilter/NavBarItems/EmploymentSourcing'
// import Mentorship from './NavBarFilter/NavBarItems/Mentorship'
// import Services from './NavBarFilter/NavBarItems/Services'
// import HospitalityHub from './NavBarFilter/NavBarItems/HospitalityHub'
// import Constructions from './NavBarFilter/NavBarItems/Constructions'
// import Others from './NavBarFilter/NavBarItems/Others'
// import RebrandingApartment from './NavBarFilter/NavBarItems/RebrandingApartment'
// import FacilityMgt from './NavBarFilter/NavBarItems/FacilityMgt'
// import RentingHub from './NavBarFilter/NavBarItems/RentingHub'

// const NavBar = () => {
//   const [user, loading, error] = useAuthState(auth)
//   const [showNav, setShowNav] = useState(false)
//   const [activeDropdown, setactiveDropdown] = useState(false)
//   const {isOpen, onOpen, onClose} = useDisclosure()
//   const [isLargerThan800] = useMediaQuery('(min-width: 991px)')
//   // const [isLargerThan800] = useMediaQuery('(min-width: 1349px)')
//   const {handleLogout, isLoggingOut} = useLogout()
//   const {pathname} = useLocation()
//   useEffect(() => {
//     setShowNav(false)
//   }, [pathname])
//   useEffect(() => {
//     if(showNav) {
//       document.body.style.overflow = 'hidden';  
//     } else {
//       document.body.style.overflow = 'auto';  
//     }
//   }, [showNav])
//   return (<>
//          <Flex w={'100%'} flexDir={'row'} gap={3} px={4} py={2} justifyContent={'space-between'} alignItems={'center'}>
//           <Box display={{base: 'none', md: 'flex', xl: 'none'}} alignItems={'center'} fontWeight={'600'} gap={1}>
//             {showNav
//               ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => {
//                 setShowNav(false)
//                 onClose()
//               }} cursor={'pointer'}>X</Text>
//               : <IoMenu size={24} cursor={'pointer'} onClick={() => {
//                 setShowNav(true)
//                 onOpen()
//               }}/> 
//             }
//             <span>Menu</span>
//           </Box>
//           <Flex gap={{md: 5, lg: 0}} overflow={'hidden'} position={'unset'} maxW={'80%'} justifyContent={'flex-start'}>
//             <Box display={'flex'} cursor={'pointer'} alignItems={'center'} fontWeight={800}> 
//                 <Box display={{base:'block', md:'none'}} px={2}>
//                   {showNav
//                     ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => (setShowNav(false))} cursor={'pointer'}>X</Text>
//                     : <IoMenu size={24} cursor={'pointer'} onClick={() => (setShowNav(true))}/> 
//                  }
//                 </Box>
//                 <BsHouse size={24}/>
//                 <Text minW={'190px'} fontSize={'clamp(12px, 2vw, 16px)'} as={RouterLink} to={'/'}  cursor={'pointer'}  color={'rgb(26 62 52)'}>Housing Solutions Hub</Text>
//             </Box>

//             <Box display={{base: 'none',xl: 'flex'}} alignItems={'center'} >
//               <Services activeDropdown={activeDropdown} setactiveDropdown={setactiveDropdown} />
//               <FacilityMgt />
//               <RentingHub />
//               <HospitalityHub />
//               <EmploymentSourcing />
//               <Mentorship />
//               {/* <Constructions /> */}
//               {/* <RebrandingApartment /> */}
//               <Others />
//             </Box>
//           </Flex>
//           {user ? (
//             <Flex gap={2} minW={'195px'}>
//               <Link as={RouterLink} to={'/me'}>
//                 <Button color={'white'} textAlign={'center'} mr={2} >
//                   <FaCircleUser size={28} color='black'/>
//                 </Button>
//               </Link>
//               <Link as={RouterLink}>
//                 <Button  textAlign={'center'} bg={'rgb(26 62 52)'} mr={2} 
//                   display={{base: 'none', sm: 'inline-block'}} color={'white'}
//                   onClick={handleLogout} isLoading={isLoggingOut}
//                 >
//                   Log Out
//                 </Button>
//               </Link>
//             </Flex>
//           ) :
//           <Flex gap={2} position={'unset'}>
//           <Link as={RouterLink} to={'/auth/sign_up'}>
//             <Button bg={'rgb(26 62 52)'} color={'white'} 
//              textAlign={'center'} mr={2} 
//             >
//               Sign Up
//             </Button>
//           </Link>
//           <Link as={RouterLink} to={'/auth/sign_in'}>
//             <Button  textAlign={'center'} mr={2} display={{base: 'none', md: 'inline-block'}}>
//               Sign In
//             </Button>
//           </Link>
//           </Flex>
//           }
//         </Flex>

//        {showNav && !isLargerThan800 ? (<>
//         <Box zIndex={101} h={'100vh'}
//           m={0}  id='showNav' w={{base: 'full', sm: '80%', md: '450px'}}
//           fontSize={'18'} opacity={1} position={'absolute'} bg={'white'}
//         >
//           <Divider bg={'gray'} h={'1px'} w={'full'}/>
//           <Flex flexDir={'column'} w={'full'} mt={'20px'} h={'90%'} justifyContent={'space-between'}>
//             <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'flex-start'} justifyContent={'flex-start'} gap={4}
//               flexDirection={'column'} m={0}
//             >
//               {/* <ListItem as={RouterLink} to={'/'} display={'flex'} px={3} justifyContent={'center'} alignItems={'center'}>
//                 <BsHouse size={24}/>
//                 <Heading fontWeight={'bold'} color={'rgb(26 62 52)'} fontSize={'clamp(20px, 6vw, 40px)'}>Housing Solutions Hub</Heading>
//               </ListItem> */}
//               <ListItem><Services showNav={showNav} setShowNav={setShowNav} /></ListItem>
//               <ListItem><FacilityMgt showNav={showNav} /></ListItem>
//               <ListItem><RentingHub showNav={showNav} /></ListItem>
//               <ListItem><HospitalityHub showNav={showNav} /></ListItem>
//               <ListItem><EmploymentSourcing showNav={showNav} /></ListItem>
//               <ListItem><Mentorship showNav={showNav} /></ListItem>
//               {/* <ListItem><Constructions showNav={showNav} /></ListItem> */}
//               {/* <ListItem><RebrandingApartment showNav={showNav} /></ListItem> */}
//               <ListItem><Others showNav={showNav} /></ListItem>
//             </UnorderedList>
          
//             <Flex w={'full'}>
//               <Link as={RouterLink} to={'/auth/sign_in'} px={3}>
//                 <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} mr={2} display={{base: 'inline-block', md: 'none'}}>
//                   Sign In
//                 </Button>
//               </Link>
//             </Flex>
//           </Flex>
//         </Box>
//         {/* <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
//           <ModalContent minW={'100vw'} bg={'transparent'} m={0} p={0} borderRadius={0}>
//             <ModalBody bg={'white'} w={'full'} maxW={'400px'} p={0} m={0} minH={'100vh'} position={'absolute'} top={'56px'}>
//             <UnorderedList listStyleType={'none'} display={'flex'} flexDirection={'column'} 
//           w={'full'} fontSize={'18'} alignItems={'flex-start'} position={'relative'}
//           justifyContent={'flex-start'} gap={2} bg={'white'}
//         >
//           <Divider bg={'gray'} h={'1px'} w={'full'}/>
//           <ListItem as={RouterLink} to={'/'} display={'flex'} px={3} justifyContent={'center'} alignItems={'center'}>
//             <BsHouse size={24}/><Text fontSize={'clamp(13px, 2vw, 18px)'} fontWeight={900} color={'rgb(26 62 52)'}>Housing Solutions Hub</Text>
//           </ListItem>
//           <ListItem><Services showNav={showNav} setShowNav={setShowNav} /></ListItem>
//           <ListItem><EmploymentSourcing showNav={showNav} /></ListItem>
//           <ListItem><Mentorship showNav={showNav} /></ListItem>
//           <ListItem><HospitalityHub showNav={showNav} /></ListItem>
//           <ListItem><Constructions showNav={showNav} /></ListItem>
//           <ListItem><RebrandingApartment showNav={showNav} /></ListItem>
//           <ListItem><Others showNav={showNav} /></ListItem>
//           <Flex mt={'auto'} w={'full'} color={'red'} justifyContent={{base: "center", md: "flex-start"}}>
//               <Link as={RouterLink} to={'/auth/sign_in'}>
//               <Button  textAlign={'center'} mr={2} display={{base: 'inline-block', sm: 'none'}}>
//                 Sign In
//               </Button>
//             </Link>
//             </Flex>
//         </UnorderedList>
//             </ModalBody>
//           </ModalContent>
//         </Modal> */}
        
//        </>): null}
//  </> )

 
// // return (<>
// //   <Flex w={'100%'} flexDir={'row'} gap={4} px={4} py={2} justifyContent={'space-between'} alignItems={'center'}>
// //    <Box display={{base: 'none', md: 'flex', lg: 'none'}} alignItems={'center'} fontWeight={'600'} gap={1}>
// //      {showNav
// //        ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => (setShowNav(false))} cursor={'pointer'}>X</Text>
// //        : <IoMenu size={24} cursor={'pointer'} onClick={() => (setShowNav(true))}/> 
// //      }
// //      <span>Menu</span>
// //    </Box>
// //    <Flex gap={5} minW={{base: '50%', md: ''}} justifyContent={'space-between'}>
// //      <Box display={'flex'} cursor={'pointer'} alignItems={'center'} fontWeight={800}> 
// //          <Box display={{base:'block', md:'none'}} px={2}>
// //            {showNav
// //              ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => (setShowNav(false))} cursor={'pointer'}>X</Text>
// //              : <IoMenu size={24} cursor={'pointer'} onClick={() => (setShowNav(true))}/> 
// //           }
// //          </Box>
// //          <BsHouse size={24}/><Text as={RouterLink} to={'/'} cursor={'pointer'} fontSize={'clamp(8px, 2.5vw, 18px)'} color={'rgb(26 62 52)'}>Housing Solutions Hub</Text>
// //      </Box>
// //      <Box display={{base: 'none',lg: 'flex'}} fontSize={'1.07em'} fontWeight={'bold'} alignItems={'center'} gap={{md: 3, lg: 5, xl: 8}}>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/buy'}>Buy</Link>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/rent'}>Rent</Link>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/sold'}>Sold</Link>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/any?type-land'}>Land Spaces</Link>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/any?type-office'}>Office Spaces</Link>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/news'}>News</Link>
// //         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/commercial'}>Commercial</Link>
// //      </Box>
// //    </Flex>
// //    {user ? (
// //      <Flex gap={2}>
// //      <Link as={RouterLink} to={'/me'}>
// //        <Button color={'white'} textAlign={'center'} mr={2} >
// //          <FaCircleUser size={28} color='black'/>
// //        </Button>
// //      </Link>
// //      <Link as={RouterLink}>
// //        <Button  textAlign={'center'} bg={'rgb(26 62 52)'} mr={2} 
// //          display={{base: 'none', sm: 'inline-block'}} color={'white'}
// //          onClick={handleLogout} isLoading={isLoggingOut}
// //        >
// //          Log Out
// //        </Button>
// //      </Link>
// //      </Flex>
// //    ) :
// //    <Flex gap={2}>
// //    <Link as={RouterLink} to={'/auth/sign_up'}>
// //      <Button bg={'rgb(26 62 52)'} color={'white'} 
// //       textAlign={'center'} mr={{base: 0, sm: 2}} 
// //      >
// //        Sign Up
// //      </Button>
// //    </Link>
// //    <Link as={RouterLink} to={'/auth/sign_in'}>
// //      <Button  textAlign={'center'} mr={2} display={{base: 'none', sm: 'inline-block'}}>
// //        Sign In
// //      </Button>
// //    </Link>
// //    </Flex>
// //    }
// //  </Flex>

// // {/* {showNav && !isLargerThan800 ? (
// //  <UnorderedList listStyleType={'none'} display={'flex'} zIndex={101} h={'100vh'} 
// //    position={'fixed'} top={'56px'} left={0} bg={'white'} m={0} flexDirection={'column'}
// //    w={{base: 'full', sm: '80%', md: '450px'}} fontSize={'18'} alignItems={'flex-start'}
// //    justifyContent={'flex-start'} gap={2}
// //  >
// //    <Divider bg={'gray'} h={'1px'} w={'full'}/>
// //    <ListItem pl={5} as={RouterLink} to={'/buy'}>Buy</ListItem>
// //    <ListItem pl={5} as={RouterLink} to={'/rent'}>Rent</ListItem>
// //    <ListItem pl={5} as={RouterLink} to={'/sold'}>Sold</ListItem>
// //    <ListItem pl={5} as={RouterLink} to={'/find_agents'}>Find agents</ListItem>
// //    <ListItem pl={5} as={RouterLink} to={'/buy'}>Office Spaces</ListItem>
// //    <ListItem pl={5} as={RouterLink} to={'/buy'}>Commercial</ListItem>
// //  </UnorderedList>
// // ): null} */}
// // {showNav && !isLargerThan800 ? (<>
// //         <Box zIndex={101} h={'100vh'}
// //           m={0}  id='showNav' w={{base: 'full', sm: '80%', md: '450px'}}
// //           fontSize={'18'} opacity={1} position={'absolute'} bg={'white'}
// //         >
// //           <Divider bg={'gray'} h={'1px'} w={'full'}/>
// //           <Flex flexDir={'column'} w={'full'} mt={'20px'} h={'90%'} justifyContent={'space-between'}>
// //             <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'flex-start'} justifyContent={'flex-start'} gap={4}
// //               flexDirection={'column'} m={0}
// //             >
// //               {/* <ListItem as={RouterLink} to={'/'} display={'flex'} px={3} justifyContent={'center'} alignItems={'center'}>
// //                 <BsHouse size={24}/>
// //                 <Heading fontWeight={'bold'} color={'rgb(26 62 52)'} fontSize={'clamp(20px, 6vw, 40px)'}>Housing Solutions Hub</Heading>
// //               </ListItem> */}
// //               <ListItem pl={5} as={RouterLink} to={'/buy'}>Buy</ListItem>
// //    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/rent'}>Rent</ListItem>
// //    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/sold'}>Sold</ListItem>
// //    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/any?type-land'}>Land Spaces</ListItem>
// //    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/any?type-office'}>Office Spaces</ListItem>
// //    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/news'}>Commercial</ListItem>
// //             </UnorderedList>
          
// //             <Flex w={'full'} py={2}>
// //               {!loading && user ? (
// //                 <Link as={RouterLink} px={3}>
// //                   <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} mr={2} display={{base: 'inline-block', md: 'none'}}
// //                     onClick={() => {
// //                       handleLogout
// //                       setShowNav(false)
// //                     }} isLoading={isLoggingOut}
// //                   >
// //                     Log out
// //                   </Button>
// //                 </Link>
// //               ): (
// //                 <Link as={RouterLink} to={'/auth/sign_in'} px={3}>
// //                   <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} mr={2} display={{base: 'inline-block', md: 'none'}}>
// //                     Sign In
// //                   </Button>
// //                 </Link>
// //               )}
// //             </Flex>
// //           </Flex>
// //         </Box>
        
// //        </>): null}
// // </> )
// }

// export default NavBar

import { Box, Button, Container, Divider, Flex, Heading, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, OrderedList, Text, Tooltip, UnorderedList, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsHammer, BsHouse } from 'react-icons/bs'
import { CgToggleSquare } from 'react-icons/cg'
import { Link as RouterLink, useLocation } from 'react-router-dom'
// import { Link } from '@chakra-ui/react'
import { IoMenu, IoMenuSharp } from 'react-icons/io5'
import { Link } from '@chakra-ui/react'
import { GiCancel } from 'react-icons/gi'
import { auth } from '../../FireBase/FireBase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Footer from '../Footer/Footer'
import { FaCircleUser } from 'react-icons/fa6'
import useLogout from '../../hooks/useLogout'
import EmploymentSourcing from './NavBarFilter/NavBarItems/EmploymentSourcing'
import Mentorship from './NavBarFilter/NavBarItems/Mentorship'
import Services from './NavBarFilter/NavBarItems/Services'
import HospitalityHub from './NavBarFilter/NavBarItems/HospitalityHub'
import Constructions from './NavBarFilter/NavBarItems/Constructions'
import Others from './NavBarFilter/NavBarItems/Others'
import RebrandingApartment from './NavBarFilter/NavBarItems/RebrandingApartment'
import FacilityMgt from './NavBarFilter/NavBarItems/FacilityMgt'
import RentingHub from './NavBarFilter/NavBarItems/RentingHub'
import PropertyAgents from './NavBarFilter/NavBarItems/PropertyAgents'

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth)
  const [showNav, setShowNav] = useState(false)
  const [activeDropdown, setactiveDropdown] = useState(false)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [isLargerThan800] = useMediaQuery('(min-width: 991px)')
  // const [isLargerThan800] = useMediaQuery('(min-width: 1349px)')
  const {handleLogout, isLoggingOut} = useLogout()
  const {pathname} = useLocation()
  useEffect(() => {
    setShowNav(false)
  }, [pathname])
  useEffect(() => {
    if(showNav) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }
  }, [showNav])
  return (<>
         <Flex w={'100%'} flexDir={'row'} gap={3} px={4} py={2} justifyContent={'space-between'} alignItems={'center'}>
          <Box display={{base: 'none', md: 'flex', lg: 'none'}} alignItems={'center'} fontWeight={'600'} gap={1}>
            {showNav
              ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => {
                setShowNav(false)
                onClose()
              }} cursor={'pointer'}>X</Text>
              : <IoMenu size={24} cursor={'pointer'} onClick={() => {
                setShowNav(true)
                onOpen()
              }}/> 
            }
            <span>Menu</span>
          </Box>
          <Flex gap={{md: 5, lg: 3, xl: 5}} overflow={'hidden'} position={'unset'} minW={'50%'}  justifyContent={'flex-start'}>
            <Box display={'flex'} cursor={'pointer'} alignItems={'center'} fontWeight={800}> 
                <Box display={{base:'block', md:'none'}} px={2}>
                  {showNav
                    ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => (setShowNav(false))} cursor={'pointer'}>X</Text>
                    : <IoMenu size={24} cursor={'pointer'} onClick={() => (setShowNav(true))}/> 
                  }
                </Box>
                <BsHouse size={24}/>
                <Text minW={'190px'} fontSize={'clamp(12px, 2vw, 16px)'} as={RouterLink} to={'/'}  cursor={'pointer'}  color={'rgb(26 62 52)'}>Housing Solutions Hub</Text>
            </Box>

            <Box display={{base: 'none',lg: 'flex'}} alignItems={'center'} >
              <Services activeDropdown={activeDropdown} setactiveDropdown={setactiveDropdown} />
              <FacilityMgt />
              <RentingHub />
              <PropertyAgents />
              <HospitalityHub />
              <EmploymentSourcing />
              <Mentorship />
              {/* <Constructions /> */}
              {/* <RebrandingApartment /> */}
              <Others />
            </Box>
          </Flex>
          {user ? (
            <Flex gap={2} >
              <Link as={RouterLink} to={'/me'}>
                <Button color={'white'} textAlign={'center'} mr={2} >
                  <FaCircleUser size={28} color='black'/>
                </Button>
              </Link>
              <Link as={RouterLink}>
                <Button  textAlign={'center'} bg={'rgb(26 62 52)'} mr={2} 
                  display={{base: 'none', sm: 'inline-block'}} color={'white'}
                  onClick={handleLogout} isLoading={isLoggingOut}
                >
                  Log Out
                </Button>
              </Link>
            </Flex>
           ) :
          <Flex gap={2} position={'unset'}>
          <Link as={RouterLink} to={'/auth/sign_up'}>
            <Button bg={'rgb(26 62 52)'} color={'white'} 
             textAlign={'center'} mr={2} 
            >
              Sign Up
            </Button>
          </Link>
          <Link as={RouterLink} to={'/auth/sign_in'}>
            <Button  textAlign={'center'} mr={2} display={{base: 'none', md: 'inline-block'}}>
              Sign In
            </Button>
          </Link>
          </Flex>
          }
        </Flex>

       {showNav && !isLargerThan800 ? (<>
        <Box zIndex={101} h={'100vh'}
          m={0}  id='showNav' w={{base: 'full', sm: '80%', md: '450px'}}
          fontSize={'18'} opacity={1} position={'absolute'} bg={'white'}
        >
          <Divider bg={'gray'} h={'1px'} w={'full'}/>
          <Flex flexDir={'column'} w={'full'} h={'90%'} mt={'20px'} justifyContent={'space-between'} overflow={'auto'}>
            <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'flex-start'} justifyContent={'flex-start'} gap={4}
              flexDirection={'column'} m={0}
            >
              <ListItem><Services showNav={showNav} setShowNav={setShowNav} /></ListItem>
              <ListItem><FacilityMgt showNav={showNav} /></ListItem>
              <ListItem><RentingHub showNav={showNav} /></ListItem>
              <ListItem><PropertyAgents showNav={showNav} /></ListItem>
              <ListItem><HospitalityHub showNav={showNav} /></ListItem>
              <ListItem><EmploymentSourcing showNav={showNav} /></ListItem>
              <ListItem><Mentorship showNav={showNav} /></ListItem>
              {/* <ListItem><Constructions showNav={showNav} /></ListItem> */}
              {/* <ListItem><RebrandingApartment showNav={showNav} /></ListItem> */}
              <ListItem><Others showNav={showNav} /></ListItem>
            </UnorderedList>
          
            <Flex w={'full'} py={4}>
              {user? (
                <Link  px={3}>
                  <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} onClick={handleLogout} mr={2} display={{base: 'inline-block', md: 'none'}}>
                    Log out
                  </Button>
                </Link>
              ): (
                <Link as={RouterLink} to={'/auth/sign_in'} px={3}>
                  <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} mr={2} display={{base: 'inline-block', md: 'none'}}>
                    Sign In
                  </Button>
                </Link>
              )
              }
            </Flex>
          </Flex>
        </Box>        
       </>): null}
 </> )

 
// return (<>
//   <Flex w={'100%'} flexDir={'row'} gap={4} px={4} py={2} justifyContent={'space-between'} alignItems={'center'}>
//    <Box display={{base: 'none', md: 'flex', lg: 'none'}} alignItems={'center'} fontWeight={'600'} gap={1}>
//      {showNav
//        ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => (setShowNav(false))} cursor={'pointer'}>X</Text>
//        : <IoMenu size={24} cursor={'pointer'} onClick={() => (setShowNav(true))}/> 
//      }
//      <span>Menu</span>
//    </Box>
//    <Flex gap={5} minW={{base: '50%', md: ''}} justifyContent={'space-between'}>
//      <Box display={'flex'} cursor={'pointer'} alignItems={'center'} fontWeight={800}> 
//          <Box display={{base:'block', md:'none'}} px={2}>
//            {showNav
//              ? <Text fontSize={20} color={'gray'} fontWeight={'500'} pr={2} onClick={() => (setShowNav(false))} cursor={'pointer'}>X</Text>
//              : <IoMenu size={24} cursor={'pointer'} onClick={() => (setShowNav(true))}/> 
//           }
//          </Box>
//          <BsHouse size={24}/><Text as={RouterLink} to={'/'} cursor={'pointer'} fontSize={'clamp(8px, 2.5vw, 18px)'} color={'rgb(26 62 52)'}>Housing Solutions Hub</Text>
//      </Box>
//      <Box display={{base: 'none',lg: 'flex'}} fontSize={'1.07em'} fontWeight={'bold'} alignItems={'center'} gap={{md: 3, lg: 5, xl: 8}}>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/buy'}>Buy</Link>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/rent'}>Rent</Link>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/sold'}>Sold</Link>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/any?type-land'}>Land Spaces</Link>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/any?type-office'}>Office Spaces</Link>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/news'}>News</Link>
//         <Link onClick={() => setShowNav(false)} as={RouterLink} to={'/commercial'}>Commercial</Link>
//      </Box>
//    </Flex>
//    {user ? (
//      <Flex gap={2}>
//      <Link as={RouterLink} to={'/me'}>
//        <Button color={'white'} textAlign={'center'} mr={2} >
//          <FaCircleUser size={28} color='black'/>
//        </Button>
//      </Link>
//      <Link as={RouterLink}>
//        <Button  textAlign={'center'} bg={'rgb(26 62 52)'} mr={2} 
//          display={{base: 'none', sm: 'inline-block'}} color={'white'}
//          onClick={handleLogout} isLoading={isLoggingOut}
//        >
//          Log Out
//        </Button>
//      </Link>
//      </Flex>
//    ) :
//    <Flex gap={2}>
//    <Link as={RouterLink} to={'/auth/sign_up'}>
//      <Button bg={'rgb(26 62 52)'} color={'white'} 
//       textAlign={'center'} mr={{base: 0, sm: 2}} 
//      >
//        Sign Up
//      </Button>
//    </Link>
//    <Link as={RouterLink} to={'/auth/sign_in'}>
//      <Button  textAlign={'center'} mr={2} display={{base: 'none', sm: 'inline-block'}}>
//        Sign In
//      </Button>
//    </Link>
//    </Flex>
//    }
//  </Flex>

// {/* {showNav && !isLargerThan800 ? (
//  <UnorderedList listStyleType={'none'} display={'flex'} zIndex={101} h={'100vh'} 
//    position={'fixed'} top={'56px'} left={0} bg={'white'} m={0} flexDirection={'column'}
//    w={{base: 'full', sm: '80%', md: '450px'}} fontSize={'18'} alignItems={'flex-start'}
//    justifyContent={'flex-start'} gap={2}
//  >
//    <Divider bg={'gray'} h={'1px'} w={'full'}/>
//    <ListItem pl={5} as={RouterLink} to={'/buy'}>Buy</ListItem>
//    <ListItem pl={5} as={RouterLink} to={'/rent'}>Rent</ListItem>
//    <ListItem pl={5} as={RouterLink} to={'/sold'}>Sold</ListItem>
//    <ListItem pl={5} as={RouterLink} to={'/find_agents'}>Find agents</ListItem>
//    <ListItem pl={5} as={RouterLink} to={'/buy'}>Office Spaces</ListItem>
//    <ListItem pl={5} as={RouterLink} to={'/buy'}>Commercial</ListItem>
//  </UnorderedList>
// ): null} */}
// {showNav && !isLargerThan800 ? (<>
//         <Box zIndex={101} h={'100vh'}
//           m={0}  id='showNav' w={{base: 'full', sm: '80%', md: '450px'}}
//           fontSize={'18'} opacity={1} position={'absolute'} bg={'white'}
//         >
//           <Divider bg={'gray'} h={'1px'} w={'full'}/>
//           <Flex flexDir={'column'} w={'full'} mt={'20px'} h={'90%'} justifyContent={'space-between'}>
//             <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'flex-start'} justifyContent={'flex-start'} gap={4}
//               flexDirection={'column'} m={0}
//             >
//               {/* <ListItem as={RouterLink} to={'/'} display={'flex'} px={3} justifyContent={'center'} alignItems={'center'}>
//                 <BsHouse size={24}/>
//                 <Heading fontWeight={'bold'} color={'rgb(26 62 52)'} fontSize={'clamp(20px, 6vw, 40px)'}>Housing Solutions Hub</Heading>
//               </ListItem> */}
//               <ListItem pl={5} as={RouterLink} to={'/buy'}>Buy</ListItem>
//    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/rent'}>Rent</ListItem>
//    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/sold'}>Sold</ListItem>
//    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/any?type-land'}>Land Spaces</ListItem>
//    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/any?type-office'}>Office Spaces</ListItem>
//    <ListItem pl={5} as={RouterLink} onClick={() => setShowNav(false)} to={'/news'}>Commercial</ListItem>
//             </UnorderedList>
          
//             <Flex w={'full'} py={2}>
//               {!loading && user ? (
//                 <Link as={RouterLink} px={3}>
//                   <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} mr={2} display={{base: 'inline-block', md: 'none'}}
//                     onClick={() => {
//                       handleLogout
//                       setShowNav(false)
//                     }} isLoading={isLoggingOut}
//                   >
//                     Log out
//                   </Button>
//                 </Link>
//               ): (
//                 <Link as={RouterLink} to={'/auth/sign_in'} px={3}>
//                   <Button  textAlign={'center'} bg={'rgb(26 62 52)'} color={'white'} mr={2} display={{base: 'inline-block', md: 'none'}}>
//                     Sign In
//                   </Button>
//                 </Link>
//               )}
//             </Flex>
//           </Flex>
//         </Box>
        
//        </>): null}
// </> )
}

// export default NavBar