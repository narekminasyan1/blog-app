'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from './_constant';
import Button from './_components/Button';


export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${BASE_URL}/auth/login`, data, {withCredentials: true});
      toast.success('Login successful');
      location.href = '/posts/my'
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
        <h2 className="text-xl text-center font-semibold">Login</h2>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <Button type='submit' variant='primary'>Login</Button>
      <p>If you don't have an account <Button component='link' variant="default" href="/register">Sign up</Button></p>

      </form>
    </div>
  );
}