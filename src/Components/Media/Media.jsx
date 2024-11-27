import { AspectRatio, Box, Button, Container, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiImage, BiPlay, BiVideo } from 'react-icons/bi'
import DynamicLoad from '../DynamicLoad/DynamicLoad'
import { BsArrowBarLeft } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GoVideo } from 'react-icons/go'

const Media = ({isOpen, onOpen, onClose, images, videos}) => {
  const [activeElement, setActiveElement] = useState('images')
  const [activeImage, setActiveImage] = useState(images[0]?.name)
  const [imgIndex, setImgIndex] = useState(1)
  const [vidIndex, setVidIndex] = useState(1)
  const [activeVideo, setActiveVideo] = useState(videos[0]?.name)
  const active_element = (section) => {
    const parentEle = document.getElementById('exploreAdv')
    const buttons = parentEle.querySelectorAll('.button')
    buttons.forEach((button) => button.classList.remove('active_button2'))
    const active_button = parentEle.querySelector(`button.${section}`)
    active_button.classList.add('active_button2')
    setActiveElement(section) 
  }
  console.log(activeImage)
  const handleChangeImage = (fnc, index) => {
    console.log(fnc)
    if(fnc === 'inc') {
      if(index + 1 === images.length ) {
        setActiveImage(images[0].name)
        setImgIndex(1)
      }else {
        setActiveImage(images[index + 1].name)
        setImgIndex(index + 2)
      }
    }
    if(fnc === 'desc') {
      if(index === 0) {
        setActiveImage(images[images.length - 1].name)
        setImgIndex(images.length)
      }else {
        setActiveImage(images[index - 1].name)
        setImgIndex(index)
      }
    }
  }
  
  const openModal = (secst) => {
    setActiveElement(secst)
    onOpen()
  }

  
  const handleChangeVideo = (fnc, index) => {
    console.log(fnc)
    if(fnc === 'inc') {
      if(index + 1 === videos.length ) {
        setActiveVideo(videos[0].name)
        setVidIndex(1)
      }else {
        setActiveVideo(videos[index + 1].name)
        setVidIndex(index + 2)
      }
    }
    if(fnc === 'desc') {
      if(index === 0) {
        setActiveVideo(videos[videos.length - 1].name)
        setVidIndex(videos.length)
      }else {
        setActiveVideo(videos[index - 1].name)
        setVidIndex(index)
      }
    }
  }

  return (<>
    <Flex w={'max-content'} display={{base: 'flex', lg: 'none'}} 
      position={'absolute'} justifyContent={'center'} alignItems={'center'}
      zIndex={4} bottom={0} bg={'white'} mb={3} borderRadius={'10px'}
    >
      <Button bg={'transparent'} onClick={() => openModal('images')} p={2} display={'flex'} gap={1} alignItems={'center'} >
        <Box display={'flex'} alignItems={'center'}><BiImage size={24}/></Box>
        <Text>{images?.length} Images</Text>
      </Button>
      {videos?.length > 0 && (
        <Button bg={'transparent'} onClick={() => openModal('videos')} p={2} leftIcon={<GoVideo size={24}/>}>
          {videos?.length} Video
        </Button>
      )}
    </Flex>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent minW={'full'} m={0} p={0} borderRadius={0} position={'absolute'} top={0} bg={'black'}>
        <ModalHeader >
          <Flex id='exploreAdv' justifyContent={'space-around'}>
            <Box>
              {activeElement === 'images' 
               ? (
                <Box>
                  {imgIndex} /{images.length}
                </Box>
               ): <Box>
                  {vidIndex} /{videos.length}
               </Box>
              }
            </Box>
            <Button _hover={{bg: 'transparent'}}  onClick={() => {active_element('images')}} bg={'transparent'} 
              className={activeElement === 'images'? 'button images active_button2': 'button images'}
            >
              <BiImage size={30} />
            </Button>
            {videos.length > 0 && (
              <Button _hover={{bg: 'transparent'}} onClick={() => {active_element('videos')}} bg={'transparent'}
                className={activeElement === 'videos'? 'button videos active_button2': 'button videos'}
              >
                <GoVideo size={30}/>
              </Button>
            )}
          </Flex>
        </ModalHeader>
        <ModalCloseButton size={24}/>
        <ModalBody maxW={'full'}  p={0}>
          <Box h={'full'} minH={'100vh'} display={'flex'} flexDir={'column'} justifyContent={'space-around'} alignItems={'center'}>
            <DynamicLoad activeElement={activeElement}>
              <Box id='images' h={'full'}>
                <Box h={'full'} display={'flex'} alignItems={'center'}>
                  <DynamicLoad activeElement={activeImage}>
                    {images?.map((image, index) => (
                      <Box id={image.name} key={index} display={'flex'} w={'full'} position={'relative'} alignItems={'center'}>
                        <Image
                          src={image.src}
                          objectFit={'cover'}
                          objectPosition={'center center'}
                          maxH={'400px'}
                        />
                        {images?.length > 1 && (
                          <Box w={'full'} fontWeight={900} color={'white'} position={'absolute'} display={'flex'} justifyContent={'space-between'}>
                            <Box p={2} cursor={'pointer'} onClick={() => handleChangeImage('desc', index)}><IoIosArrowBack size={24}/></Box>
                            <Box p={2} cursor={'pointer'} onClick={() => handleChangeImage('inc', index)}><IoIosArrowForward size={24}/></Box>
                          </Box>
                        )}
                      </Box>
                    ))}
                  </DynamicLoad>
                </Box>
              </Box>
              <Box id='videos' h={'full'}>
                <Box display={'flex'} alignItems={'center'}>
                  <DynamicLoad activeElement={activeVideo}>
                    {videos?.map((video, index) => (
                      <Box id={video.name} key={index} w={'full'} h={'full'} display={'flex'} alignItems={'center'}>
                        <Flex w={'full'} justifyContent={'center'}>
                        {/* <AspectRatio h={'full'} w={'98vw'} maxW={'97vw'} ratio={4/3}> */}
                        <video
                          src={video.src}
                          controls
                          style={{margin: '0 auto'}}
                          // height={'50%'}
                          width={'100%'}
                        />
                        {/* <video controls poster="poster-image.jpg" style={{maxHeight: '400px', width: '100%', objectFit:'fill'}}>
                          <source src={video.src} type="video/mp4"/>
                        </video> */}

                        {/* </AspectRatio> */}
                        </Flex>
                        {videos?.length > 1 && (
                          <Box color={'white'} w={'full'} position={'absolute'} display={'flex'} justifyContent={'space-between'}>
                            <Box p={2} cursor={'pointer'} onClick={() => handleChangeVideo('desc', index)}><IoIosArrowBack size={24}/></Box>
                            <Box p={2} cursor={'pointer'} onClick={() => handleChangeVideo('inc', index)}><IoIosArrowForward size={24}/></Box>
                          </Box>
                        )}
                      </Box>
                    ))}
                  </DynamicLoad>
                </Box>
              </Box>
            </DynamicLoad>
            
            <Container maxW={'6xl'} w={'full'} mb={'20px'}>
              <Flex gap={2} w={'full'} px={3}
                overflowX={'scroll'} scrollSnapType={'x mandatory'} scrollBehavior={'smooth'}
                scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}}  whiteSpace={'nowrap'}
              >
                {/* {[1,2,3,4,5,6,7,8,9].map((media, index) => ( */}
                {images?.map((media, index) => (
                  <Box key={index} maxW={'100px'} minW={'100px'} position={'relative'}> 
                    {/* <Image src={media.src} alt={media.src} /> */}
                    {media?.type.substring(0,5) === 'image' ? (
                      <Image src={media?.src} alt={media?.name} h={'150px'} 
                        border={activeElement === 'images' && activeImage === media.name? '5px solid white' : '0'} 
                        borderRadius={'15px'} maxH={'100px'} minW={'100px'}
                        onClick={() => {setActiveImage(media.name)
                          setActiveElement('images')
                          setImgIndex(index +1)
                        }} cursor={'pointer'}
                      />
                    ): (
                      <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'full'} h={'full'}>
                        <video src={media?.src} height={'100%'} width={'100%'}
                        style={{maxHeight: '100px',minWidth: '100%', aspectRatio: '1', border: activeElement === 'videos' && activeVideo === media?.name? '5px solid white': '0', 
                          cursor: 'pointer', position: 'absolute', left:0, top: 0,
                        }} 
                        onClick={() => {setActiveVideo(media.name)
                          setActiveElement('videos')
                          setVidIndex(index + 1)
                        }}
                        />
                          <BiPlay style={{zIndex: 5}} color='white' size={25}/>
                      </Box>
                    )
                    }
                  </Box>
                  // <Box key={index} maxW={'100px'} minW={'100px'}> 
                  //     <Image src={images[0]?.src} h={'150px'} 
                  //       border={media ? '5px solid white' : '0'} 
                  //       borderRadius={'15px'} maxH={'100px'}
                  //     />
                  // </Box>
                ))}
                {videos?.map((media, index) => (
                  <Box key={index} maxW={'100px'} minW={'100px'} position={'relative'}> 
                    {/* <Image src={media.src} alt={media.src} /> */}
                    {media?.type.substring(0,5) === 'image' ? (
                      <Image src={media?.src} alt={media?.name} h={'150px'} 
                        border={activeElement === 'images' && activeImage === media.name? '5px solid white' : '0'} 
                        borderRadius={'15px'} maxH={'100px'} minW={'100px'}
                        onClick={() => {setActiveImage(media.name)
                          setActiveElement('images')
                          setImgIndex(index +1)
                        }} cursor={'pointer'}
                      />
                    ): (
                      <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'full'} h={'full'}>
                        <video src={media?.src} height={'100%'} width={'100%'}
                        style={{maxHeight: '100px',minWidth: '100%', aspectRatio: '1', border: activeElement === 'videos' && activeVideo === media?.name? '5px solid white': '0', 
                          cursor: 'pointer', position: 'absolute', left:0, top: 0,
                        }} 
                        onClick={() => {setActiveVideo(media.name)
                          setActiveElement('videos')
                          setVidIndex(index + 1)
                        }}
                        />
                          <BiPlay style={{zIndex: 5}} color='white' size={25}/>
                      </Box>
                    )
                    }
                  </Box>
                  // <Box key={index} maxW={'100px'} minW={'100px'}> 
                  //     <Image src={images[0]?.src} h={'150px'} 
                  //       border={media ? '5px solid white' : '0'} 
                  //       borderRadius={'15px'} maxH={'100px'}
                  //     />
                  // </Box>
                ))}
              </Flex>
            </Container>
          </Box>

          
        </ModalBody>
      </ModalContent>
    </Modal>
  </>)
}

export default Media