import Link from "next/link";
import { notFound } from "next/navigation";

async function getDoctor(id) {
  const res = await fetch(
    `http://localhost:8000/doctors/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}
const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctor(id);

  if (!doctor) {
    notFound();
  }

  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-3 gap-10 p-8">

            {/* Image */}
            <div>
              <img
                src={doctor.image}
                alt={doctor.name}
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

        <div className="bg-white mt-8 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-slate-900 mb-5">
            About Doctor
          </h2>

          <p className="text-slate-600 leading-8">
            {doctor.description}
          </p>

          <Link
            href={`/doctor/${doctor._id}/`}
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Book Appointment
          </Link>

        </div>

      </div>
    </section>
  );
}
export default DoctorDetailsPage;