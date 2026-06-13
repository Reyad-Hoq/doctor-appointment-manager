import { StarFill } from "@gravity-ui/icons";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 group">

      <div className="relative overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-4 right-4">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <StarFill /> {doctor.rating}
          </span>
        </div>
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-slate-900">
          {doctor.name}
        </h2>

        <p className="text-blue-600 font-medium mt-1">
          {doctor.specialty}
        </p>

        <div className="mt-5 space-y-2 text-sm text-slate-600">

          <p>
            <span className="font-semibold text-slate-800">
              Experience:
            </span>{" "}
            {doctor.experience}
          </p>

          <p>
            <span className="font-semibold text-slate-800">
              Hospital:
            </span>{" "}
            {doctor.hospital}
          </p>

          <p>
            <span className="font-semibold text-slate-800">
              Location:
            </span>{" "}
            {doctor.location}
          </p>

          <p>
            <span className="font-semibold text-slate-800">
              Consultation Fee:
            </span>{" "}
            ৳{doctor.fee}
          </p>
        </div>

        <Link
          href={`/doctors/${doctor._id}`}
          className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
export default DoctorCard;