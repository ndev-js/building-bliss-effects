import React from "react";
import { Users, Building, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "20+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Shield, value: "100%", label: "Quality Guaranteed" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About MA Constructions</h2>
            <p className="text-sm text-gray-300 mb-6 text-justify">
              We have been involved as Builders & Project Manager in various Construction Companies since over a period of my completion of my A.Civil
              Engineer Diploma 1999 from Govt college of technology Lahore and apart from My theoretical studies. I practically involved myself in
              construction companies and by the time I have gone through concrete practical working in various fields of execution from the land
              breaking UpTo the final structure and UpTo finishing execution.During My employment tenure many of clients personally approached me to
              carry out own business in construction side and from 2018 it was determined/planned to through in to the self assessment and holding
              myself to be more confident and by the(Grace of Allah). I have been able to successfully complete various private Residencial,
              Commercial up to the entire satisfaction of my clients as well, now it's being continued in private sectors at present. In my view point
              building construction is the process of adding structure to real property or construction of buildings. The majority of building
              construction jobs are small renovation, such as the addition of room,or renovation. Often,the owner of the property acts as Labour,
              paymaster and design team for the entire Project through building construction projects. As a highly experienced sole proprietor of a
              construction company, I bring a wealth of knowledge, skills, and dedication to every project I undertake with a track record of
              delivering outstanding results. I am committed to providing exceptional construction service and contributing to the success of future
              projects.
            </p>
            {/* <p className="text-gray-300 mb-8">
              Our team of skilled professionals is committed to bringing your vision to life with precision, quality, and attention to detail. From
              residential homes to commercial complexes, we handle projects of all sizes with the same level of dedication and expertise.
            </p> */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mx-auto w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                    <stat.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction team"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-yellow-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
