'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navlink from '../NavLink';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.error('logged out successfully');
    setOpen(false);
  };

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            D
          </div>
          <span className="text-2xl font-bold text-blue-600">
            DocAppoint
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/appointments">Appointments</Navlink>
          <Navlink href="/dashboard">Dashboard</Navlink>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <Image
                src={user?.image}
                alt={user?.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />

              <button
                onClick={handleSignOut}
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 border-t">
          <div className="flex flex-col gap-3 pt-3">
            <Navlink href="/" onClick={() => setOpen(false)}>Home</Navlink>
            <Navlink href="/appointments" onClick={() => setOpen(false)}>
              Appointments
            </Navlink>
            <Navlink href="/dashboard" onClick={() => setOpen(false)}>
              Dashboard
            </Navlink>
          </div>

          <div className="flex flex-col gap-3 pt-3 border-t">
            {!user ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-blue-600 px-4 py-2 text-center text-blue-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>

                <button
                  onClick={handleSignOut}
                  className="rounded-lg bg-red-500 px-4 py-2 text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;