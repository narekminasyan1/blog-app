'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import editPostServce from '../edit.service';

export default function EditPost({editData}) {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (editData) {
      reset(editData);
    }
  }, [editData, reset]);

  const onSubmit = async (data) => {
    try {
      console.log(data, 'data');

      await editPostServce(data);
      toast.success('Post Updated');

      reset(); // clear form
      router.push('/posts/my'); // safe to call here
    } catch (error) {
      toast.error('Failed to update post');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[890px] w-full m-auto">
      <input {...register('title')}  placeholder="Title" className="w-full p-2 border rounded" required />
      <textarea {...register('description')} placeholder="Content" className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
}
