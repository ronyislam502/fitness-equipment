import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const testimonials = [
  {
    name: "John D. - New York, NY",
    text: "FitFlex has completely transformed my fitness routine. The quality of their equipment is unmatched, and their customer service is exceptional. I highly recommend FitFlex to anyone serious about their fitness journey!",
  },
  {
    name: "Sarah L. - Los Angeles, CA",
    text: "I've tried various fitness products over the years, but nothing compares to FitFlex. Their innovative designs and durable materials make every workout enjoyable and effective. Plus, their team is always there to help with any questions I have.",
  },
  {
    name: "Mark R. - Chicago, IL",
    text: "FitFlex's products have helped me achieve my fitness goals faster than I ever thought possible. The attention to detail and commitment to quality are evident in every piece of equipment. Thank you, FitFlex, for making fitness fun and accessible!",
  },
  {
    name: "Emily W. - Houston, TX",
    text: "As a busy mom, finding time for fitness can be challenging. FitFlex's home gym equipment has been a game-changer for me. It's easy to use, space-saving, and provides a great workout. I can't imagine my life without it!",
  },
  {
    name: "Michael S. - Miami, FL",
    text: "I was skeptical at first, but after using FitFlex's products, I'm a believer. Their equipment is top-notch, and their customer service is second to none. If you're looking to take your fitness to the next level, look no further than FitFlex.",
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
     <div className="flex justify-center text-center text-4xl mb-14">
          <h1 className="font-semibold italic">Customer Testimonial</h1>
        </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.5}
        loop={true}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">"{testimonial.text}"</p>
              <p className="text-right font-bold text-gray-700">
                {testimonial.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
