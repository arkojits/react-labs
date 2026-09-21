import {useNavigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useMedia} from '../hooks/apiHooks';

const MediaRow = ({item, setSelectedItem}) => {
  const {user} = useUserContext();
  const {deleteMedia} = useMedia();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      await deleteMedia(item.media_id, token);

      alert('Media deleted');

      navigate(0);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleModify = () => {
    console.log('Modify:', item);
  };

  const canEdit =
    user &&
    (user.user_id === item.user_id ||
      user.level_name === 'Admin');

  return (
    <tr>
      <td className="border border-gray-300 p-4">
        <img
          className="h-40 w-52 object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </td>

      <td className="border border-gray-300 p-4">
        {item.title}
      </td>

      <td className="border border-gray-300 p-4">
        {item.description}
      </td>

      <td className="border border-gray-300 p-4">
        {item.media_type}
      </td>

      <td className="border border-gray-300 p-4">
        <div className="flex flex-col gap-2">
          <button
            className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-900"
            onClick={() => setSelectedItem(item)}
          >
            Show
          </button>

          {canEdit && (
            <>
              <button
                className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-800"
                onClick={handleModify}
              >
                Modify
              </button>

              <button
                className="rounded bg-red-700 px-4 py-2 text-white hover:bg-red-900"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default MediaRow;