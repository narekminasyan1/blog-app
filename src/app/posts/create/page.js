'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import createPostServce from './create.service';

export default function CreatePost() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      console.log(data, 'data');

      await createPostServce(data);
      toast.success('Post created');

      reset(); // clear form
      router.push('/posts/my'); // safe to call here
    } catch (error) {
      toast.error('Failed to create post');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[890px] w-full m-auto">
      <input {...register('title')} placeholder="Title" className="w-full p-2 border rounded" required />
      <textarea {...register('description')} placeholder="Content" className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
