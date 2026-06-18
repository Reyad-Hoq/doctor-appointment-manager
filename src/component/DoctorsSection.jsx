import React from 'react';
import TopDoctors from './TopDoctors';

const DoctorsSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
  const doctors = await res.json();
  return (
    <div>
      <TopDoctors doctors={doctors} />
    </div>
  );
};

export default DoctorsSection;