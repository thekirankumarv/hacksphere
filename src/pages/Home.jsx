import ExploreChallenges from "../components/ExploreChallenges";
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import WhyParticipate from "../components/WhyParticipate";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <Statistics />
        <WhyParticipate />
        <ExploreChallenges />
      </main>
    </div>
  );
};

export default Home;
