'use server'

import { BASE_URL } from '../_constant';
import { cookies } from "next/headers";
import PostList from './_components/PostList'
// withCredentials: true,
//  axios.get(`${BASE_URL}/posts`, {
//     withCredentials: true,
//   });


const fetchPosts = async () => {
  const isLoggedIn = (await cookies()).get('token').value
  const res = await fetch(`${BASE_URL}/posts/all`,{
    method:'GET',
    credentials: 'include',
    headers: {
        'Authorization': `Bearer ${isLoggedIn}`,
        'Content-Type': 'application/json',
      },
  })
  
  const data = await res.json() 
  return data;
};

export default async function PostPage() {
  const response = await fetchPosts();
  return <PostList data={response.data.data}/>
}