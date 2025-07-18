import { BASE_URL } from "../../_constant";

const createPostServce = async (data) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return await response.json(); // or just return response if you want
};

export default createPostServce;