import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import UpdateProfile from './UpdateProfile';

const MyProfile = ({ session }) => {
  const { id, name, email, image, phone } = session?.user;
  return (
    <div>
      <section id='profile' className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">
            My Profile
          </h2>
          <UpdateProfile session={session} />
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
          <Image
            width={300}
            height={400}
            src={image}
            alt={name}
            className="h-28 w-28 rounded-full border-4 border-emerald-100"
          />

          <div className="space-y-3">
            <p>
              <span className="font-semibold text-slate-700">
                Name:
              </span>{" "}
              {name}            </p>

            <p>
              <span className="font-semibold text-slate-700">
                Email:
              </span>{" "}
              {email}            </p>

            <p>
              <span className="font-semibold text-slate-700">
                Phone:
              </span>{" "}
              {
                phone || <span className='text-gray-500'>No Number Added</span>
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;