import MediaRow from './MediaRow';

const Home = () => {
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
  ];

  return (
    <>
      <h2>My Media</h2>

      <table>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;