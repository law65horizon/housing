// import { Box } from '@chakra-ui/react'
// import React, { Component } from 'react'

// const DynamicLoad = ({children, activeElement}) => {
//   const xx = React.Children.toArray(children)
//   // console.log('xx')
//   class DynamicLoader extends Component {
    
//     render() {
  
//       return  (
//         // <Image src={imgSrc} onLoad={this.onImageLoaded}  onError={this.onImageError} />
//         <Box>
//           {xx.filter((child) => child.props.id.includes(activeElement))}
//           {/* {xx} */}
//         </Box>
//       )
//     }
//   }

//   return (<DynamicLoader/>
//   )
// }

// export default DynamicLoad

import React from 'react';
import { Box } from '@chakra-ui/react';
const DynamicLoad = ({ children, activeElement }) => {
  // console.log(React.Children.toArray(children))
  // Convert children to an array to filter and render them
  const childrenArray = React.Children.toArray(children);

  // Filter children based on the activeElement prop
  const filteredChildren = childrenArray.filter(child =>
    child.props.id.includes(activeElement)
  );

  return (
    <Box>
      {filteredChildren}
    </Box>
  );
};

export default DynamicLoad;
