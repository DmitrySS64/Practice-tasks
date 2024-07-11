import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { createFolder } from '../../../services/api';
import { useModal } from './ModalContext';

const CreateFolder = ({ currentFolderId, onFolderCreated }) => {
  const [folderName, setFolderName] = useState('');
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    try {
      await createFolder(folderName, currentFolderId);
      onFolderCreated();
      closeModal();
    } catch (error) {
      console.error('Error creating folder:', error);
    }
  };

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        label="Folder Name"
        fullWidth
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <Button onClick={handleSubmit}>Create</Button>
    </>
  );
};

export default CreateFolder;

