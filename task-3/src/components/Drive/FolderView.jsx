import React, { useState, useEffect } from 'react';
import { Container, Box, 
  Button, Typography, 
  Grid, Table, TableHead, TableRow, TableCell,
  TableBody,
  Paper
 } from '@mui/material';
import { fetchFolders, deleteFolder, deleteFile } from '../../services/api';
import Modal from './modal/Modal';
import { useModal } from './modal/ModalContext';
import CreateFolder from './modal/CreateFolder';
import EditFolder from './modal/EditFolder';

const FolderView = () => {
  const [currentFolder, setCurrentFolder] = useState('root');
  const [folderData, setFolderData] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [highlightedFolderId, setHighlightedFolderId] = useState(null);

  const {openModal, closeModal} = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFolders(currentFolder);
        setFolderData(response.data.data);
      } catch (error) {
        console.error('Error fetching folder data:', error);
      }
    };
    fetchData();
  }, [currentFolder]);

  const handleFolderUpdated = async () => {
    const response = await fetchFolders(currentFolder);
    setFolderData(response.data.data);
    setSelectedFolder(null);
    setHighlightedFolderId(null);
  };
  const openModalView = () => {
    openModal({title:'123', text:'1234'})
  }
  const handleEditFolder = (folder) => {
    setSelectedFolder(folder);
    openModal({
      title: 'Edit Folder',
      text: 'Edit the name of the folder',
      children: <EditFolder folder={folder} onFolderUpdated={handleFolderUpdated} />,
      submitText: 'Update',
      onSubmit: handleFolderUpdated,
    });
  };
  const handleDeleteItem = async (item) => {
    try {
      if (item.type === 'folder') {
        await deleteFolder(item.id);
      } else {
        await deleteFile(item.id);
      }
      const response = await fetchFolders(currentFolder);
      setFolderData(response.data.data);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleRowClick = (folder) => {
    setSelectedFolder(folder);
    setHighlightedFolderId(folder.id);
  };

  return (
    <Container>
      <Box>
        {folderData ? (
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              {folderData.name}
            </Typography>
            <Grid item>
              <Button onClick={() => openModal({
                title: 'Create Folder',
                text: 'Enter the name of the new folder',
                children: <CreateFolder currentFolderId={currentFolder} onFolderCreated={handleFolderUpdated} />,
                //submitText: 'Create'
              })}>
                Add Folder
              </Button>
              <Button>
                Add File
              </Button>
              <Button onClick={()=> openModalView()}>
                open modal window
              </Button>
            </Grid>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {folderData.children.map((child) => (
                  <TableRow 
                    key={child.id} 
                    onClick={()=>handleRowClick(child)}
                    style={{
                      backgroundColor: highlightedFolderId === child.id ? 'lightblue' : 'white',
                    }}
                  >
                    <TableCell>{child.type === 'folder' ? child.name : child.file.name}</TableCell>
                    <TableCell>{child.type}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEditFolder(child)}>Edit</Button>
                      <Button onClick={() => handleDeleteItem(child)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Paper>
          </Grid>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
      <Modal/>
    </Container>
  );
};

export default FolderView;
