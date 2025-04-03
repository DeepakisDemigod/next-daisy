'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin'); // Redirect if not logged in
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className='loading loading-spinner'></span>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold'>Welcome, {session?.user?.email}!</h1>
      <button
        className='btn btn-error mt-4'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
