const HealthcareStats = () => {
  const stats = [
    {
      value: "10K+",
      title: "Happy Patients",
    },
    {
      value: "250+",
      title: "Expert Doctors",
    },
    {
      value: "15+",
      title: "Medical Specialties",
    },
    {
      value: "98%",
      title: "Patient Satisfaction",
    },
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Trusted Healthcare Platform
          </h2>

          <p className="mt-4 text-blue-100">
            Thousands of patients rely on DocAppoint for quality healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-black text-blue-600">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default HealthcareStats;