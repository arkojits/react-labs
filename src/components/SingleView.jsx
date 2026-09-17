const SingleView = ({item, setSelectedItem}) => {
  if (!item) {
    return null;
  }

  return (
    <dialog open>
      <button onClick={() => setSelectedItem(null)}>
        Close
      </button>

      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}
    </dialog>
  );
};

export default SingleView;