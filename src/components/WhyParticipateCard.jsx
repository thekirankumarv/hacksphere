const WhyParticipateCard = ({ item }) => {
  return (
    <div className="flex flex-col items-start text-left mb-4 p-8 bg-gray-100 rounded-2xl space-y-4 border border-transparent h-full">
      <img className="w-20 h-20 pt-4 p-4 rounded-lg" src={item.icon} alt={item.title} />
      <h4 className="font-bold text-lg">{item.title}</h4>
      <p className="text-sm">{item.description}</p>
    </div>
  );
};

export default WhyParticipateCard;
