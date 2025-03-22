"use client";
import { auth } from '@/services/firebase';
import { signInWithCustomToken } from 'firebase/auth';

export default function ImpersonateUser({ token }) {
  const handleImpersonate = async () => {
    await signInWithCustomToken(auth, token);
  };

  return (
    <button onClick={handleImpersonate}>Impersonate User</button>
  );
}