import WhyParticipateCard from "./WhyParticipateCard";
import skillIcon from "../assets/skill.svg";
import challengeIcon from "../assets/challenge.svg";
import communityIcon from "../assets/community.svg";
import earnIcon from "../assets/earn.svg";

const items = [
  {
    icon: skillIcon,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    icon: communityIcon,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    icon: challengeIcon,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    icon: earnIcon,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const WhyParticipate = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-4 space-y-16"> 
        <h2 className="font-bold text-4xl text-center">
          Why participate in{" "}
          <span className="text-custom-green">AI challenges?</span>
        </h2>
        {/* Grid layout with 2 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item) => (
            <WhyParticipateCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
