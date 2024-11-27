import { Box, Button, Container, Flex, Input, Image, Modal, Text, Textarea, VStack, AspectRatio, Checkbox, Stack, Radio, RadioGroup, UnorderedList, ListItem, InputGroup, InputLeftElement, InputRightElement, InputLeftAddon, Divider, useDisclosure, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import DynamicLoad from '../../DynamicLoad/DynamicLoad'
import useVideoUpload from '../../../hooks/useVideoUpload'
import useImageUpload from '../../../hooks/useImageUpload'
import useShowToast from '../../../hooks/useShowToast'
import usePostStore from '../../../store/postStore'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { firestore, storage } from '../../../FireBase/FireBase'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { MdAddCircleOutline } from 'react-icons/md'
import { BiTrash } from 'react-icons/bi'
import { IoInformationCircle, IoRemoveCircleOutline } from 'react-icons/io5'
import useFormateDate from '../../../hooks/useFormateDate'
import { FaCircleCheck } from 'react-icons/fa6'

const CreatePost = () => {
  const navigate = useNavigate()
  const [activeElement, setActiveElement] = useState('desc')
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showIndoorOptions, setShowIndoorOptions] = useState(false)
  const [showOutdoorOptions, setShowOutdoorOptions] = useState(false)
  const {isOpen,onOpen, onClose} = useDisclosure()
  const [selectedOutDoorOptions, setSelectedOutDoorOptions] = useState([]);
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [inspection, setInspection] = useState({
    date: '',
    time: ''
  })
  const [inspections_proto, set_inspections_proto] = useState([])
  const { files, error, handleFileChange, removeFile } = useImageUpload();
  const { vFiles, vError, handleVideoFileChange, removeVideoFile } = useVideoUpload();
  const [videoInputs, setVideoInputs] = useState([])
  const [customFeatures, setCustomFeatures] = useState({})
  const [customFeatured, setCustomFeatured] = useState([])
  const {isLoading, handleCreatePost} = useCreatePost()
  const showToast = useShowToast()
  const [imgInputs, setImgInputs] = useState([])
	const imgRef = useRef(null)
  const {formateDate} = useFormateDate()
  const [address_str, setAddress_str] = useState({
    str_value: ''
  })
  const [inputs, setInputs] = useState({
    property_name_desc: '',
    price: '',
    type: '',
    // agent: 'Housing Solutions',
    agent: '',
    address: '',
    sale_type: '',
    dimensions: '',
    property_desc: '',
    videos: [],
    images: [],
    inspections: [],
    featured_title: '',
    indoor_features: [],
    custom_features: [],
    outdoor_features: [],
    isFeatured: false,
    createdAt: Date.now()
  })
  useEffect(() => {
      setVideoInputs(vFiles.map((video) =>video))
	}, [vFiles])
  useEffect(() => {
    setImgInputs(files.map((img) => img))
  }, [files])

  // console.log(inspection)
  // console.log(inspections_proto)
  // console.log(imgInputs.length, imgInputs)
  console.log(inputs)
  // console.log(isUploading)

  const options = [
    { id: 'air conditioning', label: 'air conditioning' },
    { id: 'alarm system', label: 'alarm system' },
    { id: 'ensuites/baths', label: 'ensuites/baths' },
    { id: 'Built in wardrobes', label: 'Built in wardrobes' },
    {id: 'internet', label: 'internet'},
    {id: 'water heater', label: 'water heater'},
    {id: 'shed', label: 'shed'},
  ];
  const out_door_options = [
    { id: 'swimming pool', label: 'swimming pool' },
    { id: 'balcony', label: 'balcony' },
    { id: 'undercover parking', label: 'undercover parking' },
    { id: 'fully fenced', label: 'fully fenced' },
    {id: 'garage', label: 'garage'},
    {id: 'shed', label: 'shed'},
    {id: 'solar power', label: 'solar power'},
    {id: 'water tank', label: 'water tank'},
  ];
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedOptions((prevSelectedOptions) =>
      checked
        ? [...prevSelectedOptions, id]
        : prevSelectedOptions.filter((option) => option !== id)
    );
  };
  const handleOutDoorChange = (event) => {
    const { id, checked } = event.target;
    setSelectedOutDoorOptions((prevSelectedOptions) =>
      checked
        ? [...prevSelectedOptions, id]
        : prevSelectedOptions.filter((out_door_options) => out_door_options !== id)
    );
  };


  // const organizeInputs = () => {
  //   if(isUploading) return;
  //   setIsUploading(true)
  //   try {
  //     // upload images
  //     // console.log('did')
  //     // imgInputs.map(async(img) => {
  //     //   const imageRef = ref(storage, `posts/${inputs.property_name_desc}/${img.name}`)
  //     //       // console.log(img.img.url)
  //     //   await uploadString(imageRef,img.src,'data_url')
  //     //   const downloadUrl = await getDownloadURL(imageRef)
  //     //   if(downloadUrl) {
  //     //     img.src = downloadUrl
  //     //   }
  //     // })

  //     // upload videos
  //     // videoInputs.map(async(video) => {
  //     //   const videoRef = ref(storage, `posts/${inputs.property_name_desc}/${video.name}`)
  //     //   await uploadString(videoRef,video.src,'data_url')
  //     //   const downloadUrl = await getDownloadURL(videoRef)
  //     //   if(downloadUrl) {
  //     //     video.src = downloadUrl
  //     //   }
  //     // })
  //   } catch (error) {
  //     showToast('Error', error.message, 'error')
  //     console.log(error)
  //   }finally {
  //     setIsUploading(false)
  //   }
  //   console.log(videoInputs)
  //   setInputs({
  //     ...inputs, 
  //     indoor_features: selectedOptions, 
  //     outdoor_features: selectedOutDoorOptions,
  //     videos: videoInputs
  //   })
  // }

  // const organizeInputs = async () => {
  //   if(isUploading) return;
  //   setIsUploading(true)
  //   console.log('dis')
  //   // console.log(isUploading)
  //   try {
  //     // upload images
  //     // imgInputs.map(async(img) => {
  //     //   const imageRef = ref(storage, `posts/${inputs.property_name_desc}/${img.name}`)
  //     //       // console.log(img.img.url)
  //     //   await uploadString(imageRef,img.src,'data_url')
  //     //   const downloadUrl = await getDownloadURL(imageRef)
  //     //   if(downloadUrl) {
  //     //     img.src = downloadUrl
  //     //   }
  //     // })
  //     // upload videos
  //      videoInputs.map(async(video) => {
  //       console.log('vid')
  //       const videoRef = ref(storage, `posts/${inputs.property_name_desc}/${video.name}`)
  //       await uploadString(videoRef,video.src,'data_url')
  //       const downloadUrl = await getDownloadURL(videoRef)
  //       if(downloadUrl) {
  //         video.src = downloadUrl
  //       }
  //     })
  //     setInputs({
  //       ...inputs, 
  //       images: imgInputs, 
  //       indoor_features: selectedOptions, 
  //       outdoor_features: selectedOutDoorOptions,
  //       videos: videoInputs
  //     })
  //     console.log('set')
  //     setIsUploaded(true)
  //   } catch (error) {
  //     showToast('Error', error.message, 'error')
  //   }finally {
  //     setIsUploading(false)
  //   }
  // }

  // const handlePstCreation = async() => {
  //   // organizeInputs()
  //   try {
  //     console.log('dios')
  //     await handleCreatePost(inputs)
  //     // navigate('/dashboard')
  //   } catch (error) {
  //     showToast('Error', error.message, 'error')
  //     console.log(error)
  //   }
  // }
  
  const pushInspections = () => {
    if(!inspection.date || !inspection.time) {
      console.log(inspection)
      showToast('Error', 'Specify date and time', 'error')
      return
    }
    // inspections_proto.map((inspection_proto) => {
    //   console.log(inspection, inspection_proto)
    //   if(inspection_proto.date === inspection.date && inspection_proto.time === inspection.time) {
    //     showToast('Error', 'Date already selected', 'error')
    //     return
    //   }
    //   return
    // })
    set_inspections_proto([...inspections_proto, inspection])
    setInspection({
      date: '',
      time: ''
    })
  }

  const redo = () => {
    setIsUploaded(false)
    setInputs({...inputs, videos: [], images: []})
  }

  const organizeInputs = async () => {
		// paragraph
      if(!address_str.str_value) {
        showToast('Error', 'Specify address', 'error')
        return
      }
      if(!inputs.price) {
        showToast('Error', 'Specify property price', 'error')
        return
      }
      if(!inputs.type) {
        showToast('Error', 'Specify property type', 'error')
        return
      }
      if(!inputs.sale_type) {
        showToast('Error', 'Specify property sale type', 'error')
        return
      }
      if(imgInputs.length === 0) {
        showToast('Error', 'upload at least one image', 'error')
        return
      }
      if(customFeatured.length === 0 && selectedOptions.length === 0 && selectedOutDoorOptions.length === 0) {
        showToast('Error', 'set at least one feature', 'error')
        return
      }
      if(inputs.isFeatured){
        if(!inputs.featured_title) {
          showToast('Error', 'Input featured title', 'error')
          return
        }
      }
		if(confirm('Confirm action ')) {
			// images
      setIsUploading(true)
			videoInputs.filter((filter) => filter.src.substring(0, 4) === 'data').map(async(video) => {
				// const handleVerifyContent = async () => {
				try {
          console.log('vid')
          const videoRef = ref(storage, `posts/${inputs.property_name_desc}/${video.name}`)
          await uploadString(videoRef,video.src,'data_url')
          const downloadUrl = await getDownloadURL(videoRef)
          if(downloadUrl) {
            video.src = downloadUrl
          }
          console.log('div')
          setIsUploaded(true)
					// console.log(res)
				} catch (error) {
					  showToast('Error', error.message, 'error')
				} finally {
          setIsUploading(false)
				}
      // }
			})

      imgInputs.map(async(img) => {
				// const handleVerifyContent = async () => {
        if(img.src.substring(0, 4) === 'data') {
				try {
					console.log('vid')
          const imgRef = ref(storage, `posts/${inputs.property_name_desc}/${img.name}`)
          await uploadString(imgRef,img.src,'data_url')
          const downloadUrl = await getDownloadURL(imgRef)
          if(downloadUrl) {
            img.src = downloadUrl
          }
          setIsUploaded(true)
					// console.log(res)
				} catch (error) {
					  showToast('Error', error.message, 'error')
				} finally {
          setIsUploading(false)
          console.log(inputs)
				}
        } else {
          setIsUploading(false)
          setIsUploaded(true)
        }
			})
		} else {
      return
    }
    setInputs({
      ...inputs, 
      price: parseInt(inputs.price, 10),
      images: imgInputs, 
      indoor_features: selectedOptions, 
      outdoor_features: selectedOutDoorOptions,
      videos: videoInputs,
      custom_features: customFeatured,
      address: address_str.str_value.toUpperCase().split(' '),
      inspections: inspections_proto
    })
    // setIsUploading(false)
    // console.log([inputs.address.toUpperCase().split(' ')])
	}
  

  const handlePostCreation = async() => {
    // organizeInputs()
    try {
      console.log('dios')
      await handleCreatePost(inputs)
      // navigate('/dashboard')
    } catch (error) {
      showToast('Error', error.message, 'error')
      console.log(error)
    } finally {
      setInputs({})
      setCustomFeatured([])
      setCustomFeatures({})
      setImgInputs([])
      setVideoInputs([])
      navigate('/dashboard')
    }
  }

  return (
    <Box py={4} pt={10}>
      <Container maxW={'4xl'} fontWeight={700}>
        <Box border={'1px solid black'} w={'full'} id='create_post' borderRadius={'10px'} px={2}>
          <UnorderedList listStyleType={'none'} display={'flex'} p={2} justifyContent={'space-between'}>
            <ListItem bg={'black'} justifyContent={'center'} cursor={'pointer'}
             onClick={() => (setActiveElement('desc'))}
              color={'white'} borderRadius={'50%'} w={'40px'} h={'40px'} display={'flex'} alignItems={'center'}>
              1
            </ListItem>
            <ListItem bg={'black'} justifyContent={'center'} cursor={'pointer'}
             onClick={() => (setActiveElement('video'))} 
             color={'white'} borderRadius={'50%'} w={'40px'} h={'40px'} display={'flex'} alignItems={'center'}>
              2
            </ListItem>
            <ListItem bg={'black'} justifyContent={'center'} cursor={'pointer'}
             onClick={() => (setActiveElement('images')) }
             color={'white'} borderRadius={'50%'} w={'40px'} h={'40px'} display={'flex'} alignItems={'center'}>
              3
            </ListItem>
            <ListItem bg={'black'} justifyContent={'center'} cursor={'pointer'}
             onClick={() => (setActiveElement('info'))}
              color={'white'} borderRadius={'50%'} w={'40px'} h={'40px'} display={'flex'} alignItems={'center'}>
              4
            </ListItem>
            <ListItem bg={'black'} justifyContent={'center'} cursor={'pointer'}
             onClick={() => (setActiveElement('features' ))}
             color={'white'} borderRadius={'50%'} w={'40px'} h={'40px'} display={'flex'} alignItems={'center'}>
              5
            </ListItem>
          </UnorderedList>
          <DynamicLoad activeElement={activeElement}>
            <VStack id='desc' w={'full'} p={3} gap={4}>
              <Text py={4} fontSize={20} w={'full'}>Add property</Text>

              {/* inputs */}
              <Textarea placeholder='Enter property name desc' w={'full'} size={'md'} 
                 _placeholder={{color: 'black', fontWeight: '600'}}
                 fontWeight={600} resize={'vertical'} value={inputs.property_name_desc}
                 onChange={(e) => setInputs({...inputs, property_name_desc: e.target.value})}
              />
              <Box w={'full'}>
                <label htmlFor='agent'>Agent</label>
                <Input mt={'5px'} placeholder='Agent' fontWeight={600} 
                  value={inputs.agent} onChange={(e) => setInputs({...inputs, agent: e.target.value})}
                />
              </Box>
              <Flex gap={3} direction={{base: 'column', md:'row'}} w={'full'}>
                <Box w={{base: 'full', md: '50%'}}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <label htmlFor=''>Property Type</label>
                    <IoInformationCircle size={24} color='red.500' />
                  </Flex>
                  <Input mt={'5px'} placeholder='Enter property type' fontWeight={600} isRequired={true}
                    value={inputs.type} onChange={(e) => setInputs({...inputs, type: e.target.value})}
                  />
                </Box>
                <Box w={{base: 'full', md: '50%'}}>
                  <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <label htmlFor=''>Property Price</label>
                    <IoInformationCircle size={24} color='red.500' />
                  </Flex>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' mt={'5px'} fontSize='1.2em'>
                      ₦
                    </InputLeftElement>
                    <Input mt={'5px'} placeholder='Enter property Price' fontWeight={600} required={true}
                      value={inputs.price} onChange={(e) => setInputs({...inputs, price: e.target.value})}
                    />
                  </InputGroup>
                </Box>
              </Flex>
              <Box w={'full'}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                  <label htmlFor=''>Property Address</label>
                  <IoInformationCircle size={24} color='red.500' />
                 </Flex>
                <Input mt={'5px'} placeholder='Enter address' w={'full'} fontWeight={'600'} 
                  value={address_str.str_value} onChange={(e) => setAddress_str({...address_str, str_value: e.target.value})}
                />
              </Box>
              <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'}>
               <Box w={'full'}>
                <label className='rContainer'>
                  <input
                    className='check_box'
                    type="radio"
                    value="rent"
                    checked={inputs.sale_type === 'rent'}
                    onChange={(e) => setInputs({...inputs, sale_type: e.target.value})}
                  />
                    Rent
                </label>

                <label className='rContainer'>
                  <input
                    className='check_box'
                    type="radio"
                    value="buy"
                    checked={inputs.sale_type === 'buy'}
                    onChange={(e) => setInputs({...inputs, sale_type: e.target.value})}
                  />
                    Buy
                </label>
               </Box>
              <IoInformationCircle size={23} />
              </Flex>
              <Box w={'full'}>
                <label>Dimensions</label>
                <InputGroup w={'max-content'}>
                  <Input mt={'5px'} fontWeight={'600'} 
                    value={inputs.dimensions} onChange={(e) => setInputs({...inputs, dimensions: e.target.value})}
                  />
                  <InputRightElement mt={'5px'} pointerEvents='none' fontWeight={800} fontSize='1.2em'>
                    <strong><sub>m</sub>2</strong>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box w={'full'}>
                <label>Featured Product?</label>
                <Box cursor={'pointer'} mt={3} bg={inputs.isFeatured? 'black': 'white'} 
                  onClick={() => setInputs({...inputs, isFeatured: !inputs.isFeatured})} border={'1px solid black'} maxW={'60px'} minW={'60px'} display={'flex'} 
                  justifyContent={inputs.isFeatured? 'end':'unset'} borderRadius={'20px'}
                > 
                  {inputs.isFeatured ? (
                    <FaCircleCheck color='white' size={30} />
                  ): (
                                    // <FaRegCircle size={30} />
                    <Box w={'30px'} h={'30px'} borderRadius={'50%'} border={'2px solid black'}></Box>
                  )}
                </Box>
                {inputs.isFeatured && (
                  <Box pt={2}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <label htmlFor=''>Featured title</label>
                      <IoInformationCircle size={24} color='red.500' />
                    </Flex>
                    <Input mt={'5px'} fontWeight={'600'} 
                      value={inputs.isFeatured ? inputs.featured_title: ''} onChange={(e) => setInputs({...inputs, featured_title: e.target.value})}
                      placeholder='Featured title'
                    />
                  </Box>
                )}
              </Box>
              <Box w={'full'}>
                <Button rightIcon={<MdAddCircleOutline />} onClick={onOpen}>Add Inspection Date</Button>
              </Box>
              <Box w={'full'}>
                {inspections_proto.map((inspection_proto, index) => (
                  <Box display={'flex'} w={'max-content'} key={index} p={4} gap={2} bg={'ButtonFace'} alignItems={'center'}>
                    {formateDate(inspection_proto.date)}
                    <Text> {inspection_proto.time} </Text>
                    <Box cursor={'pointer'} onClick={() => {
                      set_inspections_proto(inspections_proto.filter(item => item.date !== inspection_proto.date && item.time !== inspection_proto.time))
                    }}>
                      <IoRemoveCircleOutline />
                    </Box>
                  </Box>
                ))}
              </Box>
              <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered={true}>
                <ModalOverlay />
                <ModalContent maxW={'500px'} p={5}>
                  <ModalCloseButton />
                  <ModalBody>
                    <VStack w={'full'}>
                        <Box w={'full'}>
                          <label>Select Date</label>
                          <input className='inspection date' type='date'  id='inspections' 
                            value={inspection.date} onChange={(e) => setInspection({...inspection, date: e.target.value})}
                          />
                        </Box>
                        <Box w={'full'}>
                          <Text>Specify time</Text>
                          <input className='inspection time' type='time' name='inspection-time' id='inspection-time' 
                           value={inspection.time} onChange={(e) => setInspection({...inspection, time: e.target.value})}
                          />
                        </Box>
                        <Box w={'full'} display={'flex'} justifyContent={'center'}>
                          <Button colorScheme='blue' onClick={() => pushInspections()}>
                            Add
                          </Button>
                        </Box>
                    </VStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Box w={'full'} display={'flex'} justifyContent={'flex-end'} >
                <Button bg='black' color={'white'} onClick={() => (setActiveElement('video'))}>Next</Button>
              </Box>
            </VStack>
            <VStack id='video' w={'full'} p={3}>
              <Text py={4} fontSize={20} w={'full'}>Upload Video</Text>
              <Input 
                type="file"
                accept="video/mp4"
                multiple
                hidden
                ref={imgRef}
                onChange={handleVideoFileChange}
              />
              <Box w={'full'}>
                <Button onClick={() => imgRef.current.click()}>Upload Video</Button>
              </Box>
              <Box w={'full'} display={'flex'} gap={2} flexWrap={'wrap'} >
                {vFiles.map((file, index) => (
                  <Box key={index} position={'relative'} w={'full'}>
                      <AspectRatio w={{base: 'full', md: '500px'}} >
                        <video
                          src={file.src}
                          controls
                          width={'100%'}
                        />
                      </AspectRatio>
                    <Flex opacity={0} w={{base: 'full', md: '500px'}} _hover={{opacity: 1}} position={'absolute'} top={0} left={0}
                      h={'max-content'}
                      bottom={0} bg={'blackAlpha.700'} transition={'all 0.3s ease'} zIndex={3} justifyContent={'center'} alignItems={'center'}
                    >
                      <Flex alignItems={'center'} justifyContent={'center'}>
                        <Button bg={'transparent'} _hover={{bg: 'transparent'}} onClick={() => removeVideoFile(file)}
                          color={'white'}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
              </Box>
              <Flex w={'full'} pt={3} justifyContent={'space-between'}>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('desc'))}>Previous</Button>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('images'))}>Next</Button>
              </Flex>
            </VStack>
            <VStack id='images' w={'full'} p={3}>
            <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                <Text py={4} fontSize={20} w={'full'}>Upload Images</Text>
                <IoInformationCircle size={24} />
              </Flex>
              <Input 
                type="file"
                accept="image/jpeg, image/png"
                multiple
                hidden
                ref={imgRef}
                onChange={handleFileChange}
              />
              <Box w={'full'}>
                <Button onClick={() => imgRef.current.click()}>Upload Image</Button>
              </Box>
              <Box w={'full'} display={'flex'} gap={2} flexWrap={'wrap'} >
                {files.map((file, index) => (
                  <Box key={index} position={'relative'}>
                      <Image
                        src={file.src}
                        alt={`preview-${index}`}
                        objectFit={'cover'}
                        objectPosition={'center center'}
                        h={'150px'}
                      />
                    <Flex opacity={0} w={'full'} _hover={{opacity: 1}} position={'absolute'} top={0} left={0} right={0}
                      bottom={0} bg={'blackAlpha.700'} transition={'all 0.3s ease'} zIndex={3} justifyContent={'center'}
                    >
                      <Flex alignItems={'center'} justifyContent={'center'}>
                        <Button bg={'transparent'} _hover={{bg: 'transparent'}} onClick={() => removeFile(file)}
                          color={'white'}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
              </Box>
              <Flex w={'full'} pt={3} justifyContent={'space-between'}>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('video'))}>Previous</Button>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('info'))}>Next</Button>
              </Flex>
            </VStack>
            <VStack id='info'w={'full'} p={3} color={'black'}>
              <Text py={4} fontSize={20} w={'full'}>Property description</Text>
              <Textarea h={'400px'} 
                value={inputs.property_desc}
                onChange={(e) => setInputs({...inputs, property_desc: e.target.value})}
              />
              <Flex w={'full'} pt={3} justifyContent={'space-between'}>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('images'))}>Previous</Button>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('features'))}>Next</Button>
              </Flex>
            </VStack>
            <VStack id='features' w={'full'} p={3}>
              <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                <Text py={4} fontSize={20} w={'full'}>Features</Text>
                <IoInformationCircle size={24} />
              </Flex>
              <Box w={'full'}>
                <Box pb={2}>
                  <Button leftIcon={<MdAddCircleOutline />} onClick={() => {
                    let feate = window.prompt('Enter feature')
                    if(feate) {
                      setCustomFeatured([...customFeatured, {[feate]: ''}])
                      setCustomFeatures({...customFeatures, [feate]: ''})
                    }
                  }}> 
                    Add custom features
                  </Button>

                  <Flex flexDir={{base: 'column', md: 'row'}} pt={4} gap={3} flexWrap={'wrap'} justifyContent={'space-between'}>
                  {customFeatured.map((feature, index) => (
                    <InputGroup key={index} w={{base: 'full',  md: 'calc(50% - 0.5rem)'}} 
                    border="2px solid teal" borderRadius={'7px'}
                    _focus={{ border: "teal", boxShadow: "teal" }}
                    _hover={{ border: "teal" }}
                    >
                      <InputLeftElement w={'max-content'} pl={2} position={'unset'}>
                        <Text w={'max-content'}>{Object.keys(feature)} <strong>|</strong></Text>
                      </InputLeftElement>
                      <Input value={customFeatures[Object.keys(feature)]} position={'relative'}
                        onChange={(e) => {
                          setCustomFeatures({...customFeatures, [Object.keys(feature)]: e.target.value})
                          const updatedItems = customFeatured.map((item, i) => 
                            i === index ? { ...item, [Object.keys(feature)]: e.target.value } : item
                          );
                          setCustomFeatured(updatedItems)
                        }} 
                        border="none" pl={3} 
                        _focus={{ border: "none", boxShadow: "none" }}
                        _hover={{ border: "none" }}
                      />
                      <InputRightElement cursor={'pointer'}
                        onClick={() => {
                          setCustomFeatured((prevSelectedOptions) =>
                            prevSelectedOptions.filter((features) => features !== feature)
                          );
                          // setCustomFeatures({...customFeatures})
                          delete customFeatures[Object.keys(feature)]
                        }}
                      >
                        <BiTrash size={20}/>
                      </InputRightElement>
                    </InputGroup>
                  ))}
                  <Divider />
                  </Flex>
                </Box>
                <Text fontSize={18} py={2} display={'flex'} cursor={'pointer'} gap={2}
                 onClick={() => (setShowIndoorOptions(!showIndoorOptions))} alignItems={'center'} w={'max-content'}
                >
                  In Door Features {showIndoorOptions ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
                </Text>
                <Flex gap={3} mt={3} px={3} flexWrap={'wrap'} display={showIndoorOptions? 'flex':'none'} w={'full'} justifyContent={'space-between'}>
                  {options.map((option) => (
                    <Box key={option.id} display={'flex'} textTransform={'capitalize'} w={{base: 'full',  md: 'calc(50% - 0.5rem)'}}>
                        <input
                          type="checkbox"
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onChange={handleCheckboxChange}
                          className='check_box'
                        />
                        <span>{option.label}</span>
                      {/* <Checkbox id={option.id} checked={selectedOptions.includes(option.id)} onChange={(handleCheckboxChange)}>
                       {option.label} 
                      </Checkbox> */}
                    </Box>
                  ))}
                  <Divider />
                </Flex>
                <Text fontSize={18} py={2} display={'flex'} cursor={'pointer'} gap={2}
                 onClick={() => (setShowOutdoorOptions(!showOutdoorOptions))} alignItems={'center'} w={'max-content'}
                >
                  Out Door Features {showOutdoorOptions ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
                </Text>
                <Flex gap={3} mt={3} px={3} display={showOutdoorOptions ? 'flex': 'none'} flexWrap={'wrap'} w={'full'} justifyContent={'space-between'}>
                  {out_door_options.map((option) => (
                    <Box key={option.id} display={'flex'} textTransform={'capitalize'} 
                    w={{base: 'full',  md: 'calc(50% - 0.5rem)'}}
                  >
                        <input
                          type="checkbox"
                          id={option.id}
                          checked={selectedOutDoorOptions.includes(option.id)}
                          onChange={handleOutDoorChange}
                          className='check_box'
                        />
                        <span>{option.label}</span>
                      {/* <Checkbox id={option.id} checked={selectedOptions.includes(option.id)} onChange={(handleCheckboxChange)}>
                       {option.label} 
                      </Checkbox> */}
                    </Box>
                  ))}
                </Flex>
              </Box>
              <Flex w={'full'} pt={3} justifyContent={'space-between'}>
                <Button bg={'black'} color={'white'} onClick={() => (setActiveElement('info'))}>Previous</Button>
                <Button bg={'black'} color={'white'} display={isUploaded? 'block': 'none'} onClick={redo}>Back</Button>
                <Button bg={'black'} color={'white'} display={!isUploaded ? 'block': 'none'} isLoading={isUploading} onClick={organizeInputs}>Organize</Button>
                <Button bg={'black'} display={isUploaded? 'block': 'none'} isLoading={isLoading} color={'white'} onClick={handlePostCreation}> Post </Button>
              </Flex>
            </VStack>
          </DynamicLoad>
        </Box>
      </Container>
    </Box>
  )
}

export default CreatePost

function useCreatePost() {
  const showToast = useShowToast()
  const createPost = usePostStore(state => state.createPost)
  const [isLoading, setIsLoading] = useState(false)

  const handleCreatePost = async(inputs) => {
    if(isLoading) return;
    setIsLoading(true)
    try {
      const countRef = doc(firestore, 'counter', 'count')
      const docSnap = await getDoc(countRef)
      let count = docSnap.data().count_number +1
			await updateDoc(countRef, {count_number: count})

      const postDocRef = await addDoc(collection(firestore, 'posts'), inputs)
			await updateDoc(postDocRef, {counter: count})
      createPost({...inputs,id: postDocRef.id})
      showToast('Success', 'Post Created Successfully', 'success')
    } catch (error) {
      showToast('Error', error.message, 'error')
      console.log(error)
    }finally {
      setIsLoading(false)
    }
  }
  
  return {isLoading, handleCreatePost}
}