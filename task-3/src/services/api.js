import axiosInstance from './axiosInstance';

export const register = async (login, password) => {
  return await axiosInstance.post('/auth/register', { login, password });
};

export const login = async (login, password) => {
  return await axiosInstance.post('/auth/login', { login, password });
};

export const fetchFolders = async (parentId) => {
  return await axiosInstance.get(`/drive/folder/${parentId}`);
};

export const createFolder = async (name, parentId) => {
  return await axiosInstance.post('/drive/folder', { name, parentId });
};

export const uploadFile = async (file, parentId) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('folderId', parentId);

  return await axiosInstance.post('/drive/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteFolder = async (folderId) => {
  return await axiosInstance.delete(`/drive/folder/${folderId}`);
};

export const deleteFile = async (fileId) => {
  return await axiosInstance.delete(`/drive/files/${fileId}`);
};

export const updateFolder = async (folderId, name) => {
  return await axiosInstance.patch(`/drive/folder/${folderId}`, { name });
};

export const moveFolder = async (folderId, parentId) => {
  return await axiosInstance.patch(`/drive/folder/${folderId}`, { parentId });
};
