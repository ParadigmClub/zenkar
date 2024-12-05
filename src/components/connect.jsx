import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";

function Connect() {
  const profiles = [
    {
      name: "Rakesh Gupta",
      profession: "Chartered Accountant",
      description: "Expert in tax planning and compliance.",
      imageUrl: "https://avatar.iran.liara.run/public/14",
    },
    {
      name: "Angel Mathew",
      profession: "Tax Lawyer",
      description: "Specializes in tax disputes and litigation.",
      imageUrl: "https://avatar.iran.liara.run/public/job/lawyer/male",
    },
    {
      name: "Vikram Singh",
      profession: "Chartered Accountant",
      description: "Experienced in corporate tax advisory.",
      imageUrl: "https://avatar.iran.liara.run/public/37",
    },
    {
      name: "Priya Sharma",
      profession: "Tax Lawyer",
      description: "Focuses on international tax law.",
      imageUrl: "https://avatar.iran.liara.run/public/job/lawyer/female",
    },
    {
      name: "Amit Verma",
      profession: "Chartered Accountant",
      description: "Provides tax audit and assurance services.",
      imageUrl: "https://avatar.iran.liara.run/public/4",
    },
    {
      name: "Neha Kapoor",
      profession: "Tax Lawyer",
      description: "Handles tax-related legal documentation.",
      imageUrl: "https://avatar.iran.liara.run/public/job/lawyer/female",
    },
  ];
  const handleClick = () => {
    alert("Feature coming soon!");
  };
  return (
    <div className="flex flex-col items-center min-h-screen p-4 mb-20 text-white bg-base-100">
      <h1 className="mb-8 text-3xl font-bold underline text-pretty">
        Connect with Professionals{" "}
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => (
          <AnimationOnScroll animateIn="zoomIn" animateOnce={true} key={index}>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex-grow">
                  <h2 className="mb-2 text-2xl font-semibold">
                    {profile.name}
                  </h2>
                  <h3 className="mb-4 text-xl font-medium text-gray-400">
                    {profile.profession}
                  </h3>
                  <p className="text-gray-300">{profile.description}</p>
                </div>
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="w-24 h-24 ml-4 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleClick}
                  className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  <i className="mr-2 fas fa-phone-alt"></i> Call
                </button>
                <button
                  onClick={handleClick}
                  className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-700"
                >
                  <i className="mr-2 fas fa-envelope"></i> Message
                </button>
              </div>
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
}

export default Connect;
