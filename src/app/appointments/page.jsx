import DoctorCard from '@/component/DoctorCard';
import React from 'react';

const DoctorsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
  const doctors = await res.json();
  return (
    <div className='w-9/12 mx-auto pb-15'>
      <h1 className="text-4xl font-bold text-center mt-16">
        Our Doctors
      </h1>
      <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
        Meet our team of experienced and compassionate doctors dedicated to
        providing exceptional care and improving your health.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {
          doctors.map(doctor => < DoctorCard key={doctor._id} doctor={doctor} />)

        }
      </div>
    </div>
  );
};

export default DoctorsPage;