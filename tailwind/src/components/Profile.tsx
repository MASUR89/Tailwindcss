import Report from "./Report";
import WorkIcon from "../assets/images/work.svg";
import PlayIcon from "../assets/images/play.svg";
import StudyIcon from "../assets/images/study.svg";
import ExerciseIcon from "../assets/images/exercise.svg";
import SocialIcon from "../assets/images/social.svg";
import SelfCareIcon from "../assets/images/selfcare.svg";


const Profile = () => {
  const data = [
    { title: "Work",      hours: 32, lastWeek: 36, color: "bg-[#FF8B64]",   icon: WorkIcon },
    { title: "Play",      hours: 10, lastWeek: 8,  color: "bg-[#55C2E6]",   icon: PlayIcon },
    { title: "Study",     hours: 4,  lastWeek: 7,  color: "bg-[#FF5E7D]",   icon: StudyIcon },
    { title: "Exercise",  hours: 4,  lastWeek: 5,  color: "bg-[#4bcf82]",   icon: ExerciseIcon },
    { title: "Social",    hours: 5,  lastWeek: 10, color: "bg-[#7335d2]",   icon: SocialIcon },
    { title: "Self Care", hours: 2,  lastWeek: 2,  color: "bg-[#f1c75b]",   icon: SelfCareIcon },
  ];

  return (
    <div className="w-screen h-screen bg-[#0f1424] flex items-center justify-center p-4">
      <div className="w-full max-w-[1080px] flex flex-col md:flex-row items-start gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="w-full md:w-[255px] bg-[#1c204b] rounded-[25px] flex flex-col">
          <div className="bg-[#5747EA] h-[354px] rounded-[25px] p-10 flex flex-col">
            <div className="w-[78px] h-[78px] border border-black rounded-full bg-white"></div>
            <div className="mt-10 text-left text-[#bbc0ff]">
              <h3>Report for</h3>
              <h1 className="text-[36px] leading-11 font-light text-white">Jeremy Robson</h1>
            </div>
          </div>
          <div className="p-8 text-left">
            <h3 className="text-[#bbc0ff] mt-1">Daily</h3>
            <h3 className="text-white mt-3">Weekly</h3>
            <h3 className="text-[#bbc0ff] mt-3">Monthly</h3>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <Report
              key={item.title}
              title={item.title}
              hours={item.hours}
              lastWeekHours={item.lastWeek}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Profile;
