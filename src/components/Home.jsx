import {useState} from 'react';
import SingleView from './SingleView';
import MediaRow from './MediaRow';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const mediaArray = [
    {
      media_id: 1,
      filename: 'https://placehold.co/800x600',
      thumbnail: 'https://placehold.co/320x240',
      media_type: 'image/jpeg',
      title: 'Picture 1',
      description: 'My first picture',
      created_at: '2026-09-17',
    },
    {
      media_id: 2,
      filename: 'https://placehold.co/800x600',
      thumbnail: 'https://placehold.co/320x240',
      media_type: 'image/jpeg',
      title: 'Picture 2',
      description: 'My second picture',
      created_at: '2026-09-16',
    },
    {
  media_id: 3,
  filename: 'https://www.w3schools.com/html/mov_bbb.mp4',
  thumbnail: 'https://placehold.co/320x240?text=Video',
  media_type: 'video/mp4',
  title: 'Sample Video',
  description: 'This is a sample video',
  created_at: '2026-09-15',
},
  ];

  return (
    <>
      <h2>My Media</h2>

      <SingleView
        item={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      <table>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;