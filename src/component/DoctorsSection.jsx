import React from 'react';
import TopDoctors from './TopDoctors';

const DoctorsSection = async () => {
  const res = await fetch("http://localhost:8000/doctors");
  const doctors = await res.json();
  return (
    <div>
      <TopDoctors doctors={doctors} />
    </div>
  );
};

export default DoctorsSection;