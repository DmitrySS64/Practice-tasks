import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import { fetchFolders } from '../../services/api';

const FolderView = () => {
  const [currentFolder, setCurrentFolder] = useState('root');
  const [folderData, setFolderData] = useState(null);
  const token = localStorage.getItem('token');

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
  }, [currentFolder, token]);

  return (
    <Container>
      <Box>
        {folderData ? (
          <>
            <Typography variant="h4">{folderData.name}</Typography>
            {folderData.children.map((child) => (
              <div key={child.id}>
                {child.type === 'folder' ? (
                  <Button variant="contained" color="primary">
                    {child.name}
                  </Button>
                ) : (
                  <Typography>{child.file.name}</Typography>
                )}
              </div>
            ))}
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default FolderView;
