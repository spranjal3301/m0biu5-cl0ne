import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Holly",
      role: "Senior Executive",
      quote: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
    },
    {
      name: "Joshua",
      role: "Senior Software Engineer",
      quote: "Joshua is a senior software engineer who has accepted an offer"
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">What our clients have to say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <p className="text-gray-700">{testimonial.quote}</p>
              <div className="mt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p>
            More customer testimonials at our{" "}
            <Link
              href="https://www.reddit.com/r/mobiusengine/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              LInkedin page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
