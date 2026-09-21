import Likes from './Likes';

const SingleView = ({item, setSelectedItem}) => {
  if (!item) {
    return null;
  }

  return (
    <dialog
      open
      className="fixed inset-0 z-50 m-auto w-[90%] max-w-3xl rounded-lg bg-gray-900 p-6 text-white shadow-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {item.title}
        </h2>

        <button
          className="rounded bg-gray-700 px-4 py-2 hover:bg-gray-600"
          onClick={() => setSelectedItem(null)}
        >
          Close
        </button>
      </div>

      <p className="mb-4">
        {item.description}
      </p>

      {item.media_type.includes('image') ? (
        <img
          className="mx-auto max-h-[65vh] max-w-full rounded object-contain"
          src={item.filename}
          alt={item.title}
        />
      ) : (
        <video
          className="mx-auto max-h-[65vh] max-w-full rounded"
          src={item.filename}
          controls
        />
      )}

      <Likes mediaId={item.media_id} />
    </dialog>
  );
};

export default SingleView;