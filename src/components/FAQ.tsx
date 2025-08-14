import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, FileText, Sparkles } from "lucide-react";

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".faq-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide a complete range of construction services including: residential and commercial construction, grey structure and finishing work, renovation and remodeling, architecture design and layout, supervision and project management, and consultancy services."
    },
    {
      question: "Do you provide cost estimates before the project starts?",
      answer: "Absolutely! We provide a detailed BOQ (bill of quantities) and cost estimation before signing any contract. This ensures complete transparency and helps you plan your budget effectively."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary depending on scope and complexity. A small renovation might take 2-4 weeks, while a large commercial project could take 6-12 months. We always provide detailed timelines during the planning phase."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the local area and surrounding regions. Contact us to confirm if we cover your specific location, as we're always expanding our service areas."
    },
    {
      question: "Do you handle permits and legal requirements?",
      answer: "Yes, we assist with obtaining necessary permits and ensuring compliance with local building codes and regulations. Our team is experienced in navigating the permitting process efficiently."
    },
    {
      question: "What is your warranty policy?",
      answer: "We provide comprehensive warranties on all our work. This includes structural warranties and guarantees on materials and workmanship. Specific warranty terms are detailed in your contract."
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="faq-item opacity-0">
            <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">FAQ</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our construction services and processes
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item opacity-0 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-white transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    
                    {/* Additional Info for Cost Estimate FAQ */}
                    {index === 1 && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold text-blue-800">What's included in our estimates:</span>
                        </div>
                        <ul className="space-y-2 text-sm text-blue-700">
                          <li>• Detailed material breakdown and costs</li>
                          <li>• Labor costs and timeline estimates</li>
                          <li>• Permit and regulatory fees</li>
                          <li>• Contingency allowances</li>
                          <li>• Payment schedule and terms</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="faq-item opacity-0 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our friendly team.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
              <span>Contact Us</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
