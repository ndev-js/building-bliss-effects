import { featureCardsContent } from "@/content/content";
import React from "react";

const Vision = () => {
  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-fade-in">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto animate-fade-in text-center">
              Our vision is to be a leader in the construction industry, setting new standards of excellence and integrity. We aim to deliver
              outstanding construction solutions that not only meet but exceed our clients' expectations, ensuring their satisfaction and the success
              of every project we undertake. Our Mission Our mission is to create spaces that inspire, enhance communities, and stand the test of
              time. We achieve this by utilizing cutting-edge technology, embracing sustainable practices, and fostering a culture of teamwork and
              innovation. MA Constructions is dedicated to delivering superior construction services that are on time, on budget, and beyond compare.
              Our core values quality: We uphold the highest standards in craftsmanship and materials to ensure durable and beautiful results.
              integrity: We are transparent, honest, and ethical in all our interactions, building trust with clients and partners. Safety: The safety
              of our team and the communities we work in is our top priority. We maintain the strictest safety standards. Innovation: We embrace
              innovation and technology to enhance construction methods and deliver cost-effective, cutting-edge solutions. Client-Centric: Our
              clients are at the heart of everything we do. We listen, adapt, and deliver based on their unique needs.
            </p>
          </div>
        </div>
        {featureCardsContent.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{section.heading}</h2>
            {Array.isArray(section.content) ? (
              <div className="grid sm:grid-cols-3 grid-cols-1 ">
                {section.content.map((item) => (
                  <div className="w-full">
                    <FeatureCard title={item.title} description={item.description} />
                  </div>
                ))}
              </div>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="w-full px-4 ">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">{icon}</div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">{title}</h3>
        <p className="text-base font-medium text-body-color">{description}</p>
      </div>
    </div>
  </div>
);

export default Vision;
