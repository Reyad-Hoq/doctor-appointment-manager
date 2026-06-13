import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-4">
      <div className="text-center max-w-xl">

        <div className="text-8xl font-black text-blue-600">
          404
        </div>

        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Doctor Not Found
        </h1>

        <p className="mt-4 text-slate-600 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back to finding the right healthcare professional.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Back To Home
          </Link>

          <Link
            href="/appointments"
            className="px-6 py-3 border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl font-semibold transition"
          >
            Find Doctors
          </Link>

        </div>

      </div>
    </div>
  );
}
export default NotFound;