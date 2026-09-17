const MediaRow = ({item}) => {
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
    </tr>
  );
};

export default MediaRow;