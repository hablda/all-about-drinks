export const fetchData = async () => {
  const productData = await fetch('http://localhost:8000/products/', {
    method: 'get',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error('Error:', error);
    });

  return productData;
};
