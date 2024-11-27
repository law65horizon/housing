import { useState } from 'react';
import useShowToast from './useShowToast';

const useVideoUpload = (videos) => {
  const [vFiles, setVfiles] = useState(videos || []);
  const [vError, setError] = useState(null);
  const showToast = useShowToast()

  const handleVideoFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    
    // Clear previous errors
    setError(null);

    // Validate files (e.g., check types, size)
    const validTypes = ['video/mp4'];
    const isValid = newFiles.every(file => validTypes.includes(file.type));
    
    if (!isValid) {
      showToast('Error', 'One or more files are not of the allowed types (mp4).','error');
      return;
    }

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
        setVfiles(prevFiles => [...prevFiles, ...newFileData]);
      })
      .catch(() => {
        setError('Failed to read file data.');
        showToast('Error', 'Failed to read file data.', 'error');
      });
  };

  const removeVideoFile = (fileToRemove) => {
    setVfiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
  };

  return {
    vFiles,
    vError,
    handleVideoFileChange,
    removeVideoFile
  };
};

export default useVideoUpload;
