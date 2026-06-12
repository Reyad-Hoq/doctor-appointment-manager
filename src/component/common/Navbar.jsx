'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const user = null;
  // Better Auth theke user asbe
  // const { data: session } = useSession();
  // const user = session?.user;

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

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/appointments"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            All Appointments
          </Link>

          <Link
            href="/dashboard"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>
        </div>

        {/* Auth Section */}
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
              src={user.image}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />

            <button
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