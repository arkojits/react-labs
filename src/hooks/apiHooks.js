import {useEffect, useState} from 'react';
import fetchData from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        // Get real media from Metropolia Media API
        const media = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );

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

  const deleteMedia = async (mediaId, token) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media/' + mediaId,
      options,
    );
  };

  const modifyMedia = async (mediaId, data, token) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media/' + mediaId,
      options,
    );
  };

  return {
    mediaArray,
    postMedia,
    deleteMedia,
    modifyMedia,
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

const useLike = () => {
  const postLike = async (mediaId, token) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        media_id: mediaId,
      }),
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes',
      options,
    );
  };

  const deleteLike = async (likeId, token) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/' + likeId,
      options,
    );
  };

  const getLikeCountByMediaId = async (mediaId) => {
    return await fetchData(
      import.meta.env.VITE_MEDIA_API +
        '/likes/count/' +
        mediaId,
    );
  };

  const getLikeByUser = async (mediaId, token) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API +
        '/likes/bymedia/user/' +
        mediaId,
      options,
    );
  };

  return {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
  };
};

export {
  useMedia,
  useFile,
  useAuthentication,
  useUser,
  useLike,
};