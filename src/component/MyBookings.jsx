import React from 'react';
import DeleteAlert from './DeleteAlert';
import UpdateModal from './UpdateModal';

const MyBookings = ({ session, appointments }) => {
  const { id } = session?.user;

  return (
    <div>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">
            My Bookings
          </h2>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            {appointments.length}
          </span>
        </div>
        {
          appointments.length === 0 ?
            (<div><h2 className="mb-2 text-xl text-slate-600"> No Bookings Found! </h2> <p className="max-w-md text-slate-500"> You dont have any appointments right now. Book an appointment with a doctor to see your bookings here. </p></div>) :
            (<div className="space-y-5">
              {appointments.map((item) => (
                < div
                  key={item._id}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {item.doctorName}
                      </h3>

                      <p className="text-slate-500">
                        {item.specialty || " N/A"}
                      </p>

                      <p className="mt-2 text-sm text-slate-600">
                        Appointment Date:{" "}
                        {new Date(item.appointmentDate).toLocaleDateString("en-UK")}       </p>

                      <p className="text-sm text-slate-600">
                        Time: {item.appointmentTime}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <UpdateModal item={item} />
                      <DeleteAlert item={item} />
                    </div>
                  </div>
                </div>
              ))}
            </div>)
        }

      </section >

    </div >
  );
};

export default MyBookings;