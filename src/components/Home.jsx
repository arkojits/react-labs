import {useState} from 'react';
import {useMedia} from '../hooks/apiHooks';
import SingleView from './SingleView';
import MediaRow from './MediaRow';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray} = useMedia();

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
