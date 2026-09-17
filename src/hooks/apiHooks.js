import {useEffect, useState} from 'react';
import fetchData from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const media = await fetchData('/test.json');

        console.log('MEDIA:', media);

        setMediaArray(media);
      } catch (error) {
        console.log('ERROR:', error.message);
      }
    };

    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
