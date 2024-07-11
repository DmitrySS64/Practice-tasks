import React, { useState, useEffect } from 'react';
import { Container, Box, 
  Button, Typography, 
  Grid, Table, TableHead, TableRow, TableCell,
  TableBody,
  Paper
 } from '@mui/material';
import { fetchFolders, deleteFolder, deleteFile, updateFolder, uploadFile, moveFolder } from '../../services/api';
import Modal from './modal/Modal';
import { useModal } from './modal/ModalContext';
import CreateFolder from './modal/CreateFolder';
import EditFolder from './modal/EditFolder';
import FileUpload from './modal/FileUpload';

const FolderView = () => {
  const [currentFolder, setCurrentFolder] = useState('root');
  const [folderData, setFolderData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cutItem, setCutItem] = useState(null);
  const [folderHistory, setFolderHistory] = useState([]);  
  const {openModal} = useModal();

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
    setSelectedItem(null);
  };
  const handleEditFolder = (folder) => {
    setSelectedItem(folder);
    openModal({
      title: 'Edit Folder',
      text: 'Edit the name of the folder',
      children: <EditFolder folder={folder} onFolderUpdated={handleFolderUpdated} />
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

  const handleItemClick = (folder) => {
    setSelectedItem(folder);
  };
  const handleDoubleClick = (child) => {
    if (child.type === 'folder') {
      setFolderHistory([...folderHistory, currentFolder]);
      setCurrentFolder(child.id);
    }
  }
  const handleGoBack = () => {
    if (folderHistory) {
      const previousFolder = folderHistory[folderHistory.length - 1];
      setFolderHistory(folderHistory.slice(0, -1));
      setCurrentFolder(previousFolder);
    }
  };

  const handleCutItem = () => {
    setCutItem(selectedItem);
    setSelectedItem(null);
  };
  const handlePasteItem = async () => {
    if (cutItem) {
      try {
        if (cutItem.type === 'folder') {
          await moveFolder(cutItem, currentFolder);
        }// else {
          //await uploadFile(cutItem.file, currentFolder);
        //}
        setCutItem(null);
        const response = await fetchFolders(currentFolder);
        setFolderData(response.data.data);
      } catch (error) {
        console.error('Error moving item:', error);
      }
    }
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
              <Button onClick={()=>openModal({
                title: 'Upload file',
                text: 'Select a file',
                children: <FileUpload currentFolderId={currentFolder} onFileUploaded={handleFolderUpdated} />,
                //submitText: 'Create'
              })}>
                Add File
              </Button>
              {folderHistory.length !== 0 && <Button onClick={handleGoBack}>Назад</Button>}
              {selectedItem && selectedItem.type === 'folder' && 
                <Button onClick={handleCutItem}>
                  Copy
                </Button>
              }
              {cutItem && (
                <Button onClick={handlePasteItem}>
                  Paste {cutItem.type === 'folder' ? cutItem.name : cutItem.file.name}
                </Button>
              )}
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
                    onClick={()=>handleItemClick(child)}
                    onDoubleClick={()=>handleDoubleClick(child)}
                    style={{
                      backgroundColor: selectedItem && selectedItem.id === child.id ? 'lightblue' : 'white',
                    }}
                  >
                    <TableCell>{child.type === 'folder' ? child.name : child.file.name}</TableCell>
                    <TableCell>{child.type}</TableCell>
                    <TableCell>
                      { child.type === 'folder' && <Button onClick={() => handleEditFolder(child)}>Edit</Button>}
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
