import staticsIcon from "../assets/statics-1.svg";
import skillIcon from "../assets/statics-2.svg";
import challengeIcon from "../assets/statics-3.svg";

const items = [
  {
    imgSrc: staticsIcon,
    number: "100K+",
    title: "AI model submissions",
  },
  {
    imgSrc: skillIcon,
    number: "50K+",
    title: "Data Scientists",
  },
  {
    imgSrc: challengeIcon,
    number: "100+",
    title: "AI Challenges hosted",
  },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-custom-dark w-full">
      <div className="w-full max-w-6xl mx-auto px-4"> {/* Added padding for mobile view */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"> {/* Increased gap for better spacing */}
          {items.map((item) => (
            <div
              className="flex flex-col items-center justify-center p-4 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row lg:items-center"
              key={item.number}
            >
              <div className="p-4 rounded-sm">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="object-contain w-16 h-16 sm:w-12 sm:h-12"
                />
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-bold text-white font-inter sm:text-md lg:text-[24px]">
                  {item.number}
                </h4>
                <p className="text-sm font-medium text-white font-inter sm:text-xs lg:text-[16px]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
