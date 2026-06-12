"use client";
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Find Trusted Doctors & Book Appointments Instantly",
      description:
        "Connect with experienced specialists, schedule appointments, and manage your healthcare journey from anywhere.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Expert Healthcare For You And Your Family",
      description:
        "Book appointments with top-rated doctors and receive quality healthcare without long waiting times.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Your Health, Our Priority",
      description:
        "Discover specialists, manage bookings, and access healthcare services with confidence.",
      image:
        "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1171&auto=format&fit=crop",
    },
  ];
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          className="min-h-[85vh]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row">

                {/* Left Content */}
                <div className="flex-1">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                    Trusted Healthcare Platform
                  </span>

                  <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-lg text-slate-600">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                      Find Doctors
                    </button>

                    <button className="rounded-xl border border-emerald-500 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50">
                      Book Appointment
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 flex flex-wrap gap-8">
                    <div>
                      <h3 className="text-3xl font-bold text-blue-600">
                        500+
                      </h3>
                      <p className="text-slate-500">
                        Doctors
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-emerald-600">
                        10K+
                      </h3>
                      <p className="text-slate-500">
                        Patients
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-blue-600">
                        50+
                      </h3>
                      <p className="text-slate-500">
                        Hospitals
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative flex-1">
                  <img
                    src={slide.image}
                    alt="Doctor"
                    className="h-[550px] w-full rounded-3xl object-cover shadow-2xl"
                  />

                  {/* Floating Card 1 */}
                  <div className="absolute left-4 top-8 rounded-2xl bg-white p-4 shadow-xl">
                    <p className="font-semibold text-slate-800">
                      Appointment Confirmed
                    </p>
                    <p className="text-sm text-emerald-600">
                      ✓ Successfully Booked
                    </p>
                  </div>

                  {/* Floating Card 2 */}
                  <div className="absolute bottom-8 right-4 rounded-2xl bg-white p-4 shadow-xl">
                    <p className="font-semibold text-slate-800">
                      ⭐ 4.9 Rating
                    </p>
                    <p className="text-sm text-slate-500">
                      Trusted by Patients
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
