const WorkFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Find a Doctor",
      description:
        "Search and discover experienced doctors by specialty.",
    },
    {
      number: "02",
      title: "View Details",
      description:
        "Check doctor information, availability and ratings.",
    },
    {
      number: "03",
      title: "Book Appointment",
      description:
        "Choose your preferred date and schedule instantly.",
    },
    {
      number: "04",
      title: "Get Consultation",
      description:
        "Meet your doctor and receive quality healthcare.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <span className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
            Simple Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            How DocAppoint Works
          </h2>

          <p className="mt-4 text-slate-600">
            Book an appointment in just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-xl">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default WorkFlow;