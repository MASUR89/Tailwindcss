type ReportProps = {
  title: string;
  hours: number;
  lastWeekHours: number;
  color: string;
  icon: string;
};

const Report = ({ title, hours, lastWeekHours, color, icon }: ReportProps) => {
  return (
    <div className="w-[255px] h-[245px] rounded-[20px] overflow-hidden relative max-[430px]:w-[328px] max-[430px]:h-40">
      
      <div className={`${color} w-full h-40 flex justify-end items-start pr-4 ml-0.5 text-3xl absolute top-0 z-0 max-[430px]:h-30`}>
         <img src={icon} alt={title} className="w-[78px] h-[78px] opacity-90 absolute -top-[5px]" />
      </div>

      <div className="bg-[#1c204b] w-full h-[200px] p-5 rounded-[20px] flex flex-col justify-between absolute bottom-0 left-0 z-1 
        max-[430px]:h-[123px] cursor-pointer hover:bg-[#33397a] transition-colors duration-300">
        <div className="flex justify-between items-center">
          <h3 className="text-white">{title}</h3>
          <span className="text-[#bbc0ff] text-xl">•••</span>
        </div>

        <div className="mb-2 max-[430px]:flex max-[430px]:flex-row max-[430px]:justify-between max-[430px]:items-center">
          <div className="text-white text-[56px] font-light max-[430px]:text-[32px]">{hours}hrs</div>
          <div className="text-[#bbc0ff] text-[15px] mt-1">
            Last Week - {lastWeekHours}hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
