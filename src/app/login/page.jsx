'use client'
import React from 'react';
import Link from "next/link";
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from '@gravity-ui/icons';
import { GrGoogle } from 'react-icons/gr';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LogInPage = () => {
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });

  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      name: user.name,
      email: user.email,
      password: user.password,
    })
    if (error) {
      console.log(error)
      toast.error(error.message)
      return;
    }
    if (data) {
      toast.success(`You logged In successfully`)
      router.push('/')
    }
  };
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
            D
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Login to manage your appointments
          </p>
        </div>

        <Form
          className="mt-8 w-full space-y-5"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </Label>

            <Input
              placeholder="Enter your email"

            />

            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
            />

            <Description className="text-xs text-slate-500 mt-1">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          <Button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <Check />
            Login
          </Button>
        </Form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-sm text-slate-400">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <button onClick={handleGoogleSignIn} className="w-full rounded-xl border border-slate-200 py-3 font-medium text-slate-700 hover:bg-slate-50">
          <span className='flex items-center justify-center gap-1.5'><GrGoogle className='h-5 w-5' />Sign In with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-emerald-600"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
