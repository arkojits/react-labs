const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Fetch failed');
  }

  return response.json();
};

export default fetchData;
