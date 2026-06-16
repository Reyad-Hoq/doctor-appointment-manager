import React from 'react';
import Link from "next/link";
import { StarFill } from '@gravity-ui/icons';
const TopDoctors = ({ doctors }) => {
  const topDoctors = [...doctors]
    ?.sort((a, b) => b.rating - a.rating)
    ?.slice(0, 3);
  return (
    <div>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              Top Rated Doctors
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Meet Our Best Specialists
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Connect with highly rated and experienced doctors trusted by
              thousands of patients across Bangladesh.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topDoctors.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-72 object-cover"
                  />

                  <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <StarFill /> {doctor.rating}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {doctor.name}
                  </h3>

                  <p className="text-blue-600 font-medium mt-1">
                    {doctor.specialty}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold">Experience:</span>{" "}
                      {doctor.experience}
                    </p>

                    <p>
                      <span className="font-semibold">Hospital:</span>{" "}
                      {doctor.hospital}
                    </p>

                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {doctor.location}
                    </p>

                    <p>
                      <span className="font-semibold">Consultation Fee:</span>{" "}
                      ৳{doctor.fee}
                    </p>
                  </div>

                  <Link
                    href={`/appointments/${doctor._id}`}
                    className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default TopDoctors;
