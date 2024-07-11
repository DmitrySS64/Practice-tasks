import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { updateFolder } from '../../../services/api';
import { useModal } from './ModalContext';

const EditFolder = ({ folder, onFolderUpdated }) => {
  const [folderName, setFolderName] = useState(folder.name);
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    try {
      await updateFolder(folder.id, folderName);
      onFolderUpdated();
      closeModal();
    } catch (error) {
      console.error('Error updating folder:', error);
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
      <Button onClick={handleSubmit}>Update</Button>
    </>
  );
};

export default EditFolder;
