interface TestimonialProps {
  testimonials: {
    clientName: string;
    feedback: string;
    rating: number;
  }[];
}

const Testimonials: React.FC<TestimonialProps> = ({ testimonials }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mb-4 bg-primary text-white p-2 rounded-lg">
          <h3 className="text-lg font-semibold">{testimonial.clientName}</h3>
          <p className="text-sm">{testimonial.feedback}</p>
          <p className="text-sm text-yellow-500">
            Rating: {testimonial.rating}⭐
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
