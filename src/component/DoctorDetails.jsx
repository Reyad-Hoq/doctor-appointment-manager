import Image from 'next/image';
import React from 'react';

const DoctorDetails = ({ doctor }) => {
  return (
    <div>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="grid lg:grid-cols-3 gap-10 p-8">

          <div>
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={300}
              height={400}
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-2">

            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              {doctor.specialty}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-slate-900">
              {doctor.name}
            </h1>

            <div className="mt-8 grid md:grid-cols-2 gap-4">

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-slate-500">
                  Experience
                </p>

                <h3 className="font-semibold text-lg">
                  {doctor.experience}
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-slate-500">
                  Consultation Fee
                </p>

                <h3 className="font-semibold text-lg text-blue-600">
                  ৳ {doctor.fee}
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-slate-500">
                  Hospital
                </p>

                <h3 className="font-semibold">
                  {doctor.hospital}
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-slate-500">
                  Location
                </p>

                <h3 className="font-semibold">
                  {doctor.location}
                </h3>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Available Time Slots
              </h3>

              <div className="flex flex-wrap gap-3">
                {doctor.availability?.map(
                  (slot, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium"
                    >
                      {slot}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorDetails;