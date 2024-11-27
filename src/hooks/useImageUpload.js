import { useState } from 'react';
import useShowToast from './useShowToast';

const useImageUpload = (images) => {
  const [files, setFiles] = useState(images || []);
  const [error, setError] = useState(null);
  const showToast = useShowToast()
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    
    // Clear previous errors
    setError(null);

    // Validate files (e.g., check types, size)
    const validTypes = ['image/jpeg', 'image/png'];
    const isValid = newFiles.every(file => validTypes.includes(file.type));
    
    if (!isValid) {
      setError('One or more files are not of the allowed types (jpeg, png, mp4).');
      showToast('Error','One or more files are not of the allowed types (jpeg, png, mp4).', 'error');
      return;
    }
    // newFiles.map((file) => {
    //   const reader = new FileReader()
    //     reader.onloadend = () => {
    //       // setFiles(prevFiles => [...prevFiles, ...file]);
    //       setFiles([...files, reader.result])
    //     }
    //     reader.readAsDataURL(file)
    // })

    // convert files to data urls
    const filePromises = newFiles.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve({ src: reader.result, file });
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(filePromises)
      .then(results => {
        const newFileData = results.map(({ src, file }) => ({
          src,
          name: file.name,
          type: file.type
        }));
        setFiles(prevFiles => [...prevFiles, ...newFileData]);
      })
      .catch(() => {
        setError('Failed to read file data.');
        showToast('Error', 'Failed to read file data.', 'error');
      });
    


    // Update state with new files
    // setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const removeFile = (fileToRemove) => {
    setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
  };

  return {
    files,
    error,
    handleFileChange,
    removeFile
  };
};

export default useImageUpload;
