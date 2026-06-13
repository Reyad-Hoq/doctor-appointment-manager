import React from 'react';
import Link from "next/link";
import { GoGoal } from 'react-icons/go';
import { BsGoogle } from 'react-icons/bs';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-bold text-white">
            D
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Join DocAppoint and book doctors instantly
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Profile image URL"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Register
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-sm text-slate-400">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <button className="w-full rounded-xl border border-slate-200 py-3 font-medium text-slate-700 hover:bg-slate-50">
          <span className='flex items-center justify-center gap-2'> <BsGoogle className='h-5 w-5' />Continue with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
