export const Card = ({ title, desc }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{title}</h2>

      <p className="text-gray-500">{desc}</p>
    </div>
  );
};
