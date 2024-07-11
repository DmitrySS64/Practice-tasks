import axiosInstance from './axiosInstance';

export const register = async (login, password) => {
  try {
    if (!login || !password) {
      throw new Error('Логин и пароль обязательны для регистрации.');
    }

    const response = await axiosInstance.post('/auth/register', { login, password });

    return response;
  } catch (error) {
    console.error('Ошибка регистрации:', error.message);
    throw error;
  }
};

export const login = async (login, password) => {
  try {
  if (!login || !password) {
    throw new Error('Логин и пароль обязательны для входа.');
  }

  const response = await axiosInstance.post('/auth/login', { login, password });

  return response;

} catch (error) {
  console.error('Ошибка входа:', error.message);
  throw error;
}
};

export const fetchFolders = async (parentId) => {
  return await axiosInstance.get(`/drive/folder/${parentId}`);
};

export const createFolder = async (name, parentId) => {
  return await axiosInstance.post('/drive/folder', { name, parentId });
};

export const uploadFile = async (file, parentId) => {
  const formData = new FormData();
  formData.append('folderId', parentId);
  formData.append('file', file);

  const response = await axiosInstance.post('/drive/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
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

export const moveFolder = async (folder, parentId) => {
  const response = await createFolder(folder.name, parentId)
  await deleteFolder(folder.id)
  return response;
};
