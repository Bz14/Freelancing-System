interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">Rating</h2>
      <p className="text-2xl font-bold text-yellow-500">{rating} ⭐</p>
    </div>
  );
};

export default Rating;
