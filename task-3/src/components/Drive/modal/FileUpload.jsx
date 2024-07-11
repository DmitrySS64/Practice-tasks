import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { uploadFile } from '../../../services/api';
import { useModal } from './ModalContext';

const FileUpload = ({ currentFolderId, onFileUploaded }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {closeModal} = useModal();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      await uploadFile(file, currentFolderId);
      setLoading(false);
      onFileUploaded();
      closeModal();
    } catch (error) {
      setLoading(false);
      setError('Error uploading file. Please try again.');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
        <input type="file" onChange={handleFileChange} />
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={{ mt: 2 }}>
            <Button disabled={!file || isLoading} onClick={handleUpload} variant="contained" color="primary">
            {isLoading ? 'Uploading...' : 'Upload'}
            </Button>
            <Button onClick={()=>closeModal()} sx={{ ml: 2 }}>Cancel</Button>
        </Box>
    </>
  );
};

export default FileUpload;
