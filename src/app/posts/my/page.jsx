'use server'
import React from 'react'
import { BASE_URL } from '../../_constant';
import { cookies } from "next/headers";
import PostList from '../_components/PostList'


const fetchPosts = async () => {
  const isLoggedIn = (await cookies()).get('token').value
  const res = await fetch(`${BASE_URL}/posts`,{
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

const MyPage = async () => {
  const response = await fetchPosts();
  return <PostList data={response.data.data}/>
}

export default MyPage
