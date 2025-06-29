import React from "react"; // Import React library
import Slider from "react-slick"; // Import Slider for carousel functionality

const TestimonialsData = [ // Array of testimonial data
  {
    id: 1,
    name: "Manish Kumar",
    text: "Passionate about making learning fun and engaging! I help students master complex topics with ease and confidence.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Nikta Sharma",
    text: "Dedicated to helping students unlock their full potential! I specialize in simplifying tough concepts and making learning interactive.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Aman Kumar",
    text: "Passionate about guiding students towards academic excellence! With a knack for breaking down complex topics into easy-to-understand lessons.",
    img: "https://picsum.photos/103/103",
    delay: 0.7,
  },
  {
    id: 4,
    name: "Pankaj Kumar",
    text: "Dedicated to making learning an exciting journey! With interactive methods and real-world examples, I help students grasp concepts effortlessly.",
    img: "https://picsum.photos/104/104",
    delay: 0.9,
  },
];

const Testimonial = () => { // Define Testimonial component
  const settings = { // Slider settings for react-slick
    dots: true, // Show navigation dots
    arrows: false, // Hide navigation arrows
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Autoplay interval
    cssEase: "linear", // Animation easing
    pauseOnHover: true, // Pause on hover
    responsive: [ // Responsive breakpoints
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="py-14 bg-gradient-to-b from-[#0a192f] to-[#1e293b] text-white"> {/* Main container with gradient background */}
      <div className="container mx-auto"> {/* Centered container */}
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6"> {/* Header with title and subtitle */}
          <h1 className="uppercase font-semibold text-yellow-400">OUR TESTIMONIALS</h1>
          <p className="font-semibold text-3xl">What Our Students Say About Us</p>
        </div>
        
        {/* Testimonial Cards */}
        <Slider {...settings}> {/* Slider component */}
          {TestimonialsData.map((item) => (
            <div key={item.id} className="p-4"> {/* Each testimonial card wrapper */}
              <div className="flex flex-col gap-4 p-6 bg-white/10 backdrop-blur-md shadow-lg mx-4 rounded-xl border border-white/20">
                {/* Upper Section */}
                <div className="flex items-center gap-5">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full border border-yellow-400 p-1" /> {/* User image */}
                  <div>
                    <p className="text-lg font-bold text-yellow-300">{item.name}</p> {/* User name */}
                    <p className="text-sm text-gray-300">Verified Student</p> {/* User status */}
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="py-4 space-y-3">
                  <p className="text-sm text-gray-200">{item.text}</p> {/* Testimonial text */}
                  <p className="text-yellow-400">⭐⭐⭐⭐⭐</p> {/* Star rating */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial; // Export Testimonial component as default