import {useEffect, useState} from 'react';
import {useLike} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

const Likes = ({mediaId}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);

  const {user} = useUserContext();

  const {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
  } = useLike();

  const getLikes = async () => {
    try {
      const countResult =
        await getLikeCountByMediaId(mediaId);

      setLikeCount(countResult.count);

      if (user) {
        const token = localStorage.getItem('token');

        const likeResult =
          await getLikeByUser(mediaId, token);

        setUserLike(likeResult);
      } else {
        setUserLike(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLikes();
  }, [mediaId, user]);

  const handleLike = async () => {
    try {
      if (!user) {
        return;
      }

      const token = localStorage.getItem('token');

      if (userLike) {
        await deleteLike(
          userLike.like_id,
          token,
        );
      } else {
        await postLike(mediaId, token);
      }

      await getLikes();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleLike}
        disabled={!user}
        className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {userLike ? '♥ Liked' : '♡ Like'} ({likeCount})
      </button>
    </div>
  );
};

export default Likes;