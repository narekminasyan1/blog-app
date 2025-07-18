'use server';
import { cookies } from 'next/headers';
import EditForm from '../[id]/_components/EditForm'
import { BASE_URL } from '../../../_constant';

const fetchPostById = async ({id}) => {
  const token = (await cookies()).get('token').value
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()
  return data;
};

export default async function EditPostPage({ params }) {
   const { id } = params;

   const {data} = await fetchPostById({id})
 
  return <EditForm  editData={{id, title: data.title, description:data.description }}/>
}