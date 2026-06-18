import Appointment from "@/component/Appointment";
import DoctorDetails from "@/component/DoctorDetails";
import UpdateModal from "@/component/UpdateModal";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `http://localhost:8000/doctors/${id}`,
    {
      cache: 'no-store'
    }

  );
  const doctor = await res.json();
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">

        <DoctorDetails doctor={doctor} />

        <Appointment doctor={doctor} />
      </div>
    </section>
  );
};
export default DoctorDetailsPage;