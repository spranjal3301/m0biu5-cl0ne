const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Trusted",
      description: "Our founding team has over 40 years of experience in tech and recruiting."
    },
    {
      title: "Human based service",
      description: "Dedicated and trained team. 360 degree services to support your career transition"
    },
    {
      title: "Be the first",
      description: "Our advanced AI and human driven search and apply daily ensures you are the first to show up."
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
