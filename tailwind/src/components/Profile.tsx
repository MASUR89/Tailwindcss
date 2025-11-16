import Report from "./Report";
import WorkIcon from "../assets/images/work.svg";
import PlayIcon from "../assets/images/play.svg";
import StudyIcon from "../assets/images/study.svg";
import ExerciseIcon from "../assets/images/exercise.svg";
import SocialIcon from "../assets/images/social.svg";
import SelfCareIcon from "../assets/images/selfcare.svg";
import ProfileIcon from "../assets/images/Jeremy.png";


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
    <div className="w-full min-h-screen bg-[#0f1424] flex items-center justify-center p-4">
      <div className="w-full max-w-[1080px] flex flex-col md:flex-row items-center gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="w-[255px] md:w-[255px] bg-[#1c204b] rounded-[25px] flex flex-col 
          max-[430px]:w-[328px] max-[430px]:h-[203px]
          max-[768px]:w-[255px ]">
          <div className="bg-[#5747EA] h-[354px] w-full rounded-[25px] p-10 flex flex-col
            max-[430px]:h-[133px] max-[430px]:flex-row max-[430px]:pl-7">
            <div className="w-20 h-20 rounded-full 
              max-[430px]:w-[68px] max-[430px]:h-[68px] ">
              <img src={ProfileIcon} alt="Jeremy" className="w-full h-full object-cover" />
            </div>
            <div className="mt-10 text-left text-[#bbc0ff]
              max-[430px]:mt-1 max-[430px]:ml-4">
              <h3 className="max-[430px]:text-[15px]">Report for</h3>
              <h1 className="text-[36px] leading-11 font-light text-white
              max-[430px]:text-[24px] max-[430px]:leading-5">Jeremy Robson</h1>
            </div>
          </div>
          <div className="p-8 text-left max-[430px]:flex max-[430px]:justify-around max-[430px]:p-4">
            <div className="text-[#7078c9] mt-1 text-[18px] max-[430px]:mt-3 cursor-pointer hover:text-white transition-colors duration-300">Daily</div>
            <div className="text-[#7078c9] mt-3 text-[18px] cursor-pointer hover:text-white transition-colors duration-300">Weekly</div>
            <div className="text-[#7078c9] mt-3 text-[18px] cursor-pointer hover:text-white transition-colors duration-300">Monthly</div>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
