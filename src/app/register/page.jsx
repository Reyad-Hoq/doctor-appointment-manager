'use client'
import React from 'react';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GoGoal } from 'react-icons/go';
import { BsGoogle } from 'react-icons/bs';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

const RegisterPage = () => {
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.imageUrl
    })
    if (error) {
      toast.error(error.message)
      return;
    }
    if (data) {
      toast.success(`${user.name} successfully registered`)
      redirect('/')
    }

  }
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

        <Form
          onSubmit={onSubmit}
          className="mt-8 space-y-5"
        >

          <TextField isRequired name="name">
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </Label>

            <Input
              placeholder="Your full name"
              className={{
                inputWrapper:
                  "rounded-xl border border-slate-200 bg-white shadow-none data-[focus=true]:border-emerald-500",
              }}
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
          >
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </Label>

            <Input
              placeholder="Enter email"
              className={{
                inputWrapper:
                  "rounded-xl border border-slate-200 bg-white shadow-none data-[focus=true]:border-emerald-500",
              }}
            />

            <FieldError />
          </TextField>

          <TextField name="imageUrl">
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              Photo URL
            </Label>

            <Input
              placeholder="Profile image URL"
              className={{
                inputWrapper:
                  "rounded-xl border border-slate-200 bg-white shadow-none data-[focus=true]:border-emerald-500",
              }}
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            minLength={8}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </Label>

            <Input
              placeholder="Create password"
              className={{
                inputWrapper:
                  "rounded-xl border border-slate-200 bg-white shadow-none data-[focus=true]:border-emerald-500",
              }}
            />

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Register
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
