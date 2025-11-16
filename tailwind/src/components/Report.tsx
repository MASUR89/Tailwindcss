type ReportProps = {
  title: string;
  hours: number;
  lastWeekHours: number;
  color: string;
  icon: string;
};

const Report = ({ title, hours, lastWeekHours, color, icon }: ReportProps) => {
  return (
    <div className="w-[255px] h-[245px] rounded-[20px] overflow-hidden relative">
      
      {/* ზედა ფერი + icon */}
      <div className={`${color} w-full h-[160px] flex justify-end items-start pr-4 text-3xl absolute top-0 z-0`}>
         <img src={icon} alt={title} className="w-[78px] h-[78px] opacity-90 absolute -top-[5px]" />
      </div>

      {/* ქვედა მუქი ბლოკი */}
      <div className="bg-[#1c204b] w-full h-[200px] p-5 rounded-[20px] flex flex-col justify-between absolute bottom-0 z-1">
        <div className="flex justify-between items-center">
          <h3 className="text-white">{title}</h3>
          <span className="text-[#bbc0ff] text-xl">•••</span>
        </div>

        <div>
          <p className="text-white text-4xl font-light">{hours}hrs</p>
          <p className="text-[#bbc0ff] text-sm mt-1">
            Last Week - {lastWeekHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;
