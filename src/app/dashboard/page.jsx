'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const DashboardPage = () => {
  const [isActive, setIsActive] = useState('bookings')
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return <div>Loading...</div>;
  }

  const { id, name, email, image } = session.user;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src={image}
                width={60}
                height={60}
                alt="Profile-photo"
                className="h-20 w-20 rounded-full border-4 border-blue-100"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-800">
                {name}
              </h3>

              <p className="text-sm text-slate-500">
                {email}              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={setIsActive('bookings')}
                className={`w-full rounded-xl px-4 py-3 text-left font-medium ${isActive === "bookings"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-50"
                  }`}>
                My Bookings
              </button>

              <Link href={'#profile'} className="w-full rounded-xl px-4 py-3 text-left font-medium text-slate-600 hover:bg-slate-50">
                My Profile
              </Link>
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
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">
                  My Bookings
                </h2>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                  3 Appointments
                </span>
              </div>

              <div className="space-y-5">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">
                          {item === 1
                            ? "Dr. Sarah Johnson"
                            : "Dr. Michael Lee"}
                        </h3>

                        <p className="text-slate-500">
                          {item === 1 ? "Cardiologist" : "Neurologist"}
                        </p>

                        <p className="mt-2 text-sm text-slate-600">
                          Appointment Date:{" "}
                          {item === 1
                            ? "15 June 2026"
                            : "20 June 2026"}
                        </p>

                        <p className="text-sm text-slate-600">
                          Time: {item === 1 ? "10:00 AM" : "02:30 PM"}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                          Update
                        </button>

                        <button className="rounded-xl bg-red-500 px-5 py-2 font-medium text-white hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* My Profile */}
            <section id='profile' className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">
                  My Profile
                </h2>

                <button className="rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700">
                  Update Profile
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
                <img
                  src="https://i.ibb.co/4pDNDk1/avatar.png"
                  alt="Profile"
                  className="h-28 w-28 rounded-full border-4 border-emerald-100"
                />

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold text-slate-700">
                      Name:
                    </span>{" "}
                    John Doe
                  </p>

                  <p>
                    <span className="font-semibold text-slate-700">
                      Email:
                    </span>{" "}
                    john@example.com
                  </p>

                  <p>
                    <span className="font-semibold text-slate-700">
                      Phone:
                    </span>{" "}
                    +8801XXXXXXXXX
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div >
    </div >
  );
};

export default DashboardPage;

