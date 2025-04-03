'use client';

import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push('/dashboard'); // Redirect signed-in users
    }
  }, [session, router]);

  const handleSignIn = async e => {
    e.preventDefault();
    setLoading(true);

    await signIn('email', { email });

    setLoading(false);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className='card w-96 bg-base-100 shadow-xl p-5'>
        <h2 className='text-xl font-bold text-center'>Sign in with Magic Link ✨</h2>
        <form
          onSubmit={handleSignIn}
          className='mt-4'
        >
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='input input-bordered w-full mb-3'
            required
          />
          <button
            type='submit'
            className='btn  bg-blue-600 text-white w-full'
          >
            {loading ? (
              <span className='loading loading-spinner'></span>
            ) : (
              'Send Magic Link'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
