import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import GetStartedButton from './GetStartedButton';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Holly",
      title: "senior executive",
      description: "who got over 10 job interviews and an offer she accepted"
    },
    {
      name: "Holly",
      title: "senior executive",
      description: "who got over 10 job interviews and an offer she accepted"
    },
    {
      name: "Holly",
      title: "senior executive",
      description: "who got over 10 job interviews and an offer she accepted"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col rounded-lg gap-16 py-8">
        <h2 className=" text-blue-600 text-2xl font-medium ">What our clients have to say</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-1 rounded-3xl overflow-hidden  flex flex-col shadow-lg">
              <div className="bg-white p-20 flex-1 flex items-center justify-center  border-2 border-blue-600">
                <button className="bg-blue-600 rounded-full p-2 text-white">
                  <Play size={20} />
                </button>
              </div>
              <div className="bg-blue-600 p-8 text-white  ">
                <p className="text-sm">
                  <span className="font-bold">{testimonial.name}</span> is a <span className="font-bold">{testimonial.title}</span> {testimonial.description}
                </p>
                <div className="flex justify-end mt-2">
                  <button className="flex justify-center items-center bg-white size-10 rounded-full p-1 text-blue-600">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="border border-blue-600 text-blue-600 rounded-full py-2 px-4 flex items-center justify-center">
            More customer testimonials 
            <ArrowUpRight size={16} className="ml-1" />
          </button>
          <GetStartedButton/>
        </div>
      </div>
    </div>
  );
}