'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from '../../_constant';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const router = useRouter();
  const password = watch('password');
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, data);
      toast.success('Registration successful');
      router.push('/');
    } catch (error) {
      toast.error('Registration failed');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl text-center font-semibold">Register</h2>

      <input
        {...register('email', { required: 'Email is required' })}
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <input
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: (value) =>
            value === password || 'Passwords do not match'
        })}
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 border rounded"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </form>
  );
}
