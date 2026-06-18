'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navlink from '../NavLink';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.error('logged out successfully')
  };
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            D
          </div>
          <span className="text-2xl font-bold text-blue-600">
            DocAppoint
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Navlink href="/">Home</Navlink>

          <Navlink href="/appointments">
            Appointments
          </Navlink>

          <Navlink href="/dashboard">
            Dashboard
          </Navlink>
        </div>

        {!user ? (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Image
              src={user?.image}
              alt={user?.name}
              width={100}
              height={100}
              className="w-10 h-10 rounded-full"
            />

            <button
              onClick={handleSignOut}
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;