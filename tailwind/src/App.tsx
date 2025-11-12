import './App.css'


const App = () => {
 

  return (
    <div className='w-[255px] h-[518px] bg-[#1c204b] rounded-[25px] flex flex-col m-auto'>
      <div className='w-[255px] h-[354px] flex items-start 
      bg-[#5747EA] rounded-[25px] flex-col'>
        <div className='w-[78px] h-[78px] mt-10 ml-10 border border-black '></div>
        <div className='w-[139px] h-[116px] mt-10 ml-10 text-left text-[#bbc0ff]'>
          <h3 className='text-[#bbc0ff]'>Report for</h3>
          <h1 className='text-[36px] leading-[44px] font-light text-white'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='w-[255px] h-[164px] '> 
        <div className='w-[68px] h-[106px] text-left gap-2.5 mt-8 ml-10'>
          <h3 className='text-[#bbc0ff] mt-1'>Daily</h3>
          <h3 className='text-white mt-3'>Weekly</h3>
          <h3 className='text-[#bbc0ff] mt-3'>Monthly</h3>
        </div>
      </div>
    </div>
  )
}

export default App
