import { BASE_URL } from "../../../_constant";

const editPostServce = async (data) => {
  const response = await fetch(`${BASE_URL}/posts/${data.id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });  

  if (!response.ok) {
    throw new Error('Failed to update post');
  }

  return await response.json(); // or just return response if you want
};

export default editPostServce;