import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { uploadFile } from '../../../services/api';

const FileUploadModal = ({ parentId, onClose, onFileUploaded }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      await uploadFile(file, parentId);
      setLoading(false);
      onFileUploaded();
      onClose();
    } catch (error) {
      setLoading(false);
      setError('Error uploading file. Please try again.');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" gutterBottom component="div">
          Upload File
        </Typography>
        <input type="file" onChange={handleFileChange} />
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={{ mt: 2 }}>
          <Button disabled={!file || isLoading} onClick={handleUpload} variant="contained" color="primary">
            {isLoading ? 'Uploading...' : 'Upload'}
          </Button>
          <Button onClick={onClose} sx={{ ml: 2 }}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FileUploadModal;
