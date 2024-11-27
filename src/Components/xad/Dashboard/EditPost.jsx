import { Box, Button, Container, Flex, Input, Image, Modal, Text, Textarea, VStack, AspectRatio, Checkbox, Stack, Radio, RadioGroup, ModalContent, ModalBody, ModalOverlay, ModalCloseButton, useDisclosure, ModalHeader, UnorderedList, ListItem, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
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
import { IoInformationCircle } from 'react-icons/io5'
import { FaCircleCheck } from 'react-icons/fa6'

const EditPost = ({isOpen,property, onClose}) => {

  const navigate = useNavigate()
  const [activeElement, setActiveElement] = useState('desc')
  const [selectedOptions, setSelectedOptions] = useState(property.indoor_features || []);
  const [selectedOutDoorOptions, setSelectedOutDoorOptions] = useState(property.outdoor_features || []);
  const [showIndoorOptions, setShowIndoorOptions] = useState(false)
  const [showOutdoorOptions, setShowOutdoorOptions] = useState(false)
  const [customFeatured, setCustomFeatured] = useState(property.custom_features || [])
  const [ex, setex] = useState(property.custom_features || [])
  const [customFeatures, setCustomFeatures] = useState(Object.assign({}, ...customFeatured) || [])
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const { files, error, handleFileChange, removeFile } = useImageUpload(property?.images);
  const { vFiles, vError, handleVideoFileChange, removeVideoFile } = useVideoUpload(property?.videos);
  const [videoInputs, setVideoInputs] = useState([])
  const {isLoading, handleCreatePost} = useCreatePost()
  const showToast = useShowToast()
  const [imgInputs, setImgInputs] = useState([])
  const [address_str, setAddress_str] = useState({
    str_value: property.address.join(' ')
  })
  const imgRef = useRef(null)
  const [inputs, setInputs] = useState({
    property_name_desc: property.property_name_desc || '',
    price:  property.price ||'',
    type: property.type || '',
    address: '',
    sale_type: property.sale_type || '',
    dimensions: property.dimensions || '',
    property_desc:property.property_desc || '',
    videos: [],
    images: [],
    agent: property.agent || '',
    inspections: [],
    isFeatured: property?.isFeatured || false,
    featured_title: property?.featured_title || '',
    custom_features: property.custom_features || [],
    indoor_features: property.indoor_features || [],
    outdoor_features: property.outdoor_features || [],
  })

  console.log(customFeatures)
  console.log(inputs)
  // console.log(selectedValue)
  console.log(customFeatured)
  useEffect(() => {
      setVideoInputs(vFiles.map((video) =>video))
	}, [vFiles])
  useEffect(() => {
    setImgInputs(files.map((img) => img))
  }, [files])

  const options = [
    { id: 'swimming pool', label: 'swimming pool' },
    { id: 'balcony', label: 'balcony' },
    { id: 'undercover packing', label: 'undercover packing' },
    { id: 'fully fenced', label: 'fully fenced' },
    {id: 'garage', label: 'garage'},
    {id: 'outdoor area', label: 'outdoor area'},
    {id: 'shed', label: 'shed'},
  ];
  const out_door_options = [
    { id: 'swimming pool', label: 'swimming pool' },
    { id: 'balcony', label: 'balcony' },
    { id: 'undercover packing', label: 'undercover packing' },
    { id: 'jfully fenced', label: 'jfully fenced' },
    {id: 'garage', label: 'garage'},
    {id: 'outdoor area', label: 'outdoor area'},
    {id: 'shed', label: 'shed'},
  ];
  // console.log(selectedOptions)
  // console.log(selectedOutDoorOptions)
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

  const redo = () => {
    setIsUploaded(false)
    setInputs({...inputs, videos: [], images: []})
  }

  const organizeInputs = async () => {
    if(!navigator.onLine) {
      showToast('Error', 'Client is Offline', 'error')
      return
    }
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
    if(inputs.isFeatured){
      if(!inputs.featured_title) {
        showToast('Error', 'Input featured title', 'error')
        return
      }
    }
    if(customFeatured.length === 0 && selectedOptions.length === 0 && selectedOutDoorOptions.length === 0) {
      showToast('Error', 'set at least one feature', 'error')
      return
    }
		if(confirm('Confirm action ')) {
			// images
      setIsUploading(true)
			videoInputs.map(async(video) => {
				// const handleVerifyContent = async () => {
				try {
          if(video.src.substring(0,4) === 'data') {
					console.log('vid')
          const videoRef = ref(storage, `posts/${inputs.property_name_desc}/${video.name}`)
          await uploadString(videoRef,video.src,'data_url')
          const downloadUrl = await getDownloadURL(videoRef)
          if(downloadUrl) {
            video.src = downloadUrl
          }
          setIsUploaded(true)
					// console.log(res)
        }
				} catch (error) {
					  showToast('Error', error.message, 'error')
				} finally {
          setIsUploading(false)
				}
			})

      imgInputs.map(async(img) => {
				  try {
          if(img.src.substring(0,4) === 'data') {
					console.log('vid')
          const imgRef = ref(storage, `posts/${inputs.property_name_desc}/${img.name}`)
          await uploadString(imgRef,img.src,'data_url')
          const downloadUrl = await getDownloadURL(imgRef)
          if(downloadUrl) {
            img.src = downloadUrl
          }
          setIsUploaded(true)
					// console.log(res)
        } else {console.log('faslle')}
				} catch (error) {
					  showToast('Error', error.message, 'error')
				} finally {
          setIsUploading(false)
          // console.log(inputs)
				}
			})
		} else {
      return
    }
    console.log('diow')
    setInputs({
      ...inputs, 
      price: parseInt(inputs.price, 10),
      images: imgInputs, 
      indoor_features: selectedOptions, 
      outdoor_features: selectedOutDoorOptions,
      videos: videoInputs,
      custom_features: customFeatured,
      address: address_str.str_value.toUpperCase().split(' ')
    })
    setIsUploading(false)
    setIsUploaded(true)
	}

  const handlePostCreation = async() => {
      try {
        await handleCreatePost(inputs, property.id)
      } catch (error) {
        showToast('Error', error.message, 'error')
      } finally {
        onClose()
      }
  }

    return (
        <Modal py={4} pt={10} isOpen={isOpen} onClose={onClose}>
          {/* <ModalOverlay /> */}
          <ModalContent maxW={'4xl'} fontWeight={700}>
            <ModalHeader />
            <ModalCloseButton />
            <ModalBody w={'full'} h={'full'} id='create_post' borderRadius={'10px'} px={2}>
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
                      <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                        <label>Property type</label>
                        <IoInformationCircle size={24} />
                      </Flex>
                      <Input mt={'5px'} placeholder='Enter property type' fontWeight={600} isRequired={true}
                        value={inputs.type} onChange={(e) => setInputs({...inputs, type: e.target.value})}
                      />
                    </Box>
                    <Box w={{base: 'full', md: '50%'}}>
                      <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                        <label>Property Price</label>
                        <IoInformationCircle size={24} />
                      </Flex>
                      <Input mt={'5px'} placeholder='Enter property price' fontWeight={600} 
                        value={inputs.price} type='number' onChange={(e) => setInputs({...inputs, price: e.target.value})}
                      />
                    </Box>
                  </Flex>
                  <Box w={'full'}>
                    <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                      <label>Property address</label>
                      <IoInformationCircle size={24} />
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

                    <label className='rContainer'>
                      <input
                        className='check_box'
                        type="radio"
                        value="sold"
                        checked={inputs.sale_type === 'sold'}
                        onChange={(e) => setInputs({...inputs, sale_type: e.target.value})}
                      />
                      Sold
                    </label>
                   </Box>
                   <IoInformationCircle size={24} />
                  </Flex>
                  <Box w={'full'}>
                    <label>Dimensions</label>
                    <Input mt={'5px'} w={'full'} fontWeight={'600'} 
                      value={inputs.dimensions} onChange={(e) => setInputs({...inputs, dimensions: e.target.value})}
                    />
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
                  <Box w={'full'} display={'flex'} justifyContent={'flex-end'} >
                    <Button bg='black' color={'white'} onClick={() => (setActiveElement('video'))}>Next</Button>
                    {/* <Button bg={'black'} isLoading={isLoading || isUploading} color={'white'} onClick={handlePostCreation}> Update </Button> */}
                  </Box>
                </VStack>
                <VStack minH={{base: '100vh', md: '535px'}} id='video' w={'full'} p={3}>
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
                          <AspectRatio w={{base: 'full', md: '500px'}}>
                            <video
                              src={file.src}
                              controls
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
                <VStack minH={{base: '100vh', md: '535px'}} id='images' w={'full'} p={3}>
                  <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text py={4} fontSize={20} w={'full'}>Upload Images</Text>
                    <IoInformationCircle size={24}/>
                  </Flex>
                  <Input 
                    type="file"
                    accept="image/jpeg, image/png, video/mp4"
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
                <VStack minH={{base: '100vh', md: '535px'}} id='info'w={'full'} p={3} color={'black'}>
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
                  <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text py={4} fontSize={20} w={'full'}>Features</Text>
                    <IoInformationCircle size={24}/>
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
                       <Text w={'max-content'}> {Object.keys(feature)} <strong>|</strong></Text>
                      </InputLeftElement>
                      <Input value={customFeatures[Object.keys(feature)]} position={'inherit'}
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
                  </Flex>
                </Box>
                    <Text fontSize={18} py={2} display={'flex'} cursor={'pointer'} gap={2}
                      onClick={() => (setShowIndoorOptions(!showIndoorOptions))} alignItems={'center'} w={'max-content'}
                    >
                      In Door Features {showIndoorOptions ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
                    </Text>
                    <Flex gap={3} mt={3} px={3} flexWrap={'wrap'} w={'full'} display={showIndoorOptions? 'flex' : 'none'} justifyContent={'space-between'}>
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
                    </Flex>
                    <Text fontSize={18} py={2} display={'flex'} cursor={'pointer'} gap={2}
                      onClick={() => (setShowOutdoorOptions(!showOutdoorOptions))} alignItems={'center'} w={'max-content'}
                    >
                      Out Door Features {showOutdoorOptions ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
                    </Text>
                    <Flex gap={3} mt={3} px={3} flexWrap={'wrap'} w={'full'} display={showOutdoorOptions ? 'flex': 'none'} justifyContent={'space-between'}>
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
                    <Button bg={'black'} display={isUploaded? 'block': 'none'} isLoading={isLoading} color={'white'} onClick={handlePostCreation}> Update </Button>
                  </Flex>
                </VStack>
              </DynamicLoad>
            </ModalBody>
          </ModalContent>
        </Modal>
    )
}

export default EditPost

function useCreatePost() {
    const showToast = useShowToast()
    const createPost = usePostStore(state => state.createPost)
    const updatePost = usePostStore((state) => state.updatePost)
    const {setPosts} = usePostStore()
    const [isLoading, setIsLoading] = useState(false)
    const handleCreatePost = async(sedoc, id) => {
      console.log(sedoc)
      if(isLoading) return;
      setIsLoading(true)
      const updatedDoc = sedoc
      console.log(updatedDoc)
      try {
        const postDocRef = doc(firestore, 'posts', id)
        console.log(postDocRef)
        await updateDoc(postDocRef, updatedDoc)
        // createPost({...inputs,id: postDocRef.id})
        updatePost(updatedDoc, id)
        showToast('Success', 'Post Updated Successfully', 'success')
      } catch (error) {
        showToast('Error', error.message, 'error')
        console.log(error.message)
      }finally {
        setIsLoading(false)
      }
    }
    
    return {isLoading, handleCreatePost}
}