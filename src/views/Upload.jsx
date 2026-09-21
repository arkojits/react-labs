import {useState} from 'react';
import {useNavigate} from 'react-router';
import useForm from '../hooks/formHooks';
import {useFile, useMedia} from '../hooks/apiHooks';

const Upload = () => {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const {postFile} = useFile();
  const {postMedia} = useMedia();

  const initialValues = {
    title: '',
    description: '',
  };

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('Please login first');
        return;
      }

      if (!file) {
        alert('Choose a file');
        return;
      }

      // 1. Upload actual file
      const fileResult = await postFile(file, token);

      console.log('File result:', fileResult);

      // 2. Add media information to Media API
      const mediaResult = await postMedia(
        fileResult,
        inputs,
        token,
      );

      console.log('Media result:', mediaResult);

      alert('Upload successful');

      navigate('/');
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} =
    useForm(doUpload, initialValues);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <h1>Upload</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>

          <input
            id="title"
            name="title"
            type="text"
            value={inputs.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows="5"
            value={inputs.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="file">File</label>

          <input
            id="file"
            name="file"
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
        </div>

        {file && (
          <p>Selected file: {file.name}</p>
        )}

        <button
          type="submit"
          disabled={
            !file || inputs.title.length < 4
          }
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;