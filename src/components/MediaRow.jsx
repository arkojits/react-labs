const MediaRow = ({item, setSelectedItem}) => {
  return (
    <tr>
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          width="200"
        />
      </td>

      <td>{item.title}</td>

      <td>{item.description}</td>

      <td>{item.media_type}</td>

      <td>
        <button onClick={() => setSelectedItem(item)}>
          Show
        </button>
      </td>
    </tr>
  );
};

export default MediaRow;