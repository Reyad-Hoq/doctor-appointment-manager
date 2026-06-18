'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import MyBookings from './MyBookings';
import MyProfile from './MyProfile';
import { authClient } from '@/lib/auth-client';
import Loading from '@/app/loading';

const DashboardGrid = ({ appointments }) => {
  const [active, setActive] = useState('bookings')
  const { data: session } = authClient.useSession();
  if (!session?.user) {
    return Loading();
  }
  const { id, name, email, image } = session?.user;


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={image}
                width={200}
                height={200}
                alt="Profile-photo"
                className="h-18 w-18 rounded-full border-4 border-blue-100"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-800">
                {name}
              </h3>

              <p className="text-sm text-slate-500">
                {email}              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => setActive('bookings')}
                className={`w-full rounded-xl px-4 py-3 text-left font-medium ${active === "bookings"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-50"
                  }`}>
                My Bookings
              </button>

              <button onClick={() => setActive('profile')}
                className={`w-full rounded-xl px-4 py-3 text-left font-medium ${active === "profile"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-50"
                  }`}>
                My Profile
              </button>
            </div>
          </aside>
          {/* Content */}
          <main className="space-y-8 lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <h1 className="text-3xl font-bold text-slate-800">
                Patient Dashboard
              </h1>

              <p className="mt-2 text-slate-500">
                Manage your appointments and profile information.
              </p>
            </div>
            {/* My Bookings */}
            {active === 'bookings' && <MyBookings session={session} appointments={appointments} />}
            {/* My Profile */}
            {active === 'profile' && <MyProfile session={session} />}

          </main>
        </div>
      </div >
    </div >

  );
};

export default DashboardGrid;