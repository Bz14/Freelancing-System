"use client"; // Required for Swiper.js in Next.js App Router
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img from "../../../../public/assets/Images/person1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Freelancer - Web Developer",
    review:
      "This platform helped me land my first big client. Highly recommended!",
    rating: 5,
    image: img,
  },
  {
    id: 2,
    name: "Mark Robertson",
    role: "Client - Startup Founder",
    review: "Finding skilled freelancers has never been this easy and secure.",
    rating: 4.8,
    image: img,
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Freelancer - Graphic Designer",
    review: "Love the escrow payment system! It ensures I get paid on time.",
    rating: 4.9,
    image: img,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-primary text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Users Say 💬</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="max-w-lg mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="bg-white text-primary p-6 rounded-xl shadow-lg"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-primary"
                />
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-secondary">{testimonial.role}</p>
                <p className="mt-3 text-primary italic">
                  “{testimonial.review}”
                </p>
                <p className="mt-2 text-yellow-500 text-lg">
                  ⭐ {testimonial.rating}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
