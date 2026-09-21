import {useEffect, useState} from 'react';
import fetchData from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        // Local data for now because API needs Metropolia network/VPN
        const media = await fetchData('/test.json');
        setMediaArray(media);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMedia();
  }, []);

  const postMedia = async (fileData, inputs, token) => {
    const mediaData = {
      title: inputs.title,
      description: inputs.description,
      filename: fileData.filename,
      media_type: fileData.media_type,
      filesize: fileData.filesize,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(mediaData),
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
      options,
    );
  };

  return {
    mediaArray,
    postMedia,
  };
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();

    formData.append('file', file);

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    return await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      options,
    );
  };

  return {postFile};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      options,
    );
  };

  return {postLogin};
};

const useUser = () => {
  const postUser = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      options,
    );
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      options,
    );
  };

  return {
    postUser,
    getUserByToken,
  };
};

export {
  useMedia,
  useFile,
  useAuthentication,
  useUser,
};