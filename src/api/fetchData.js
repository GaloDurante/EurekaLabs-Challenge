/* eslint-disable no-useless-catch */
export const fetchData = async () => {
  const url = import.meta.env.VITE_REACT_APP_API_URL;
  const key = import.meta.env.VITE_REACT_APP_SECRET_KEY;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        secretKey: key,
      },
    });
    if (!response.ok) {
      throw new Error('Error making the request');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
