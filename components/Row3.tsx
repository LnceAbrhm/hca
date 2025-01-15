import Image from 'next/image'

export default function Row3() {
    return (
      <>
        <div className="h-[59rem] w-max-screen block">
          <div className="content-center">
            <div>
              {/* Title */}
              <div className="text-center text-Calpolygreen text-6xl font-bold px-28 pt-24 pb-8">
                <p>With Our Hardworking:</p>
              </div>
            
              <div className="grid grid-cols-3 text-white h-[38rem]">
                {/* Registered Nurse Card */}
                  <div className="">
                    <div className="bg-Ashgray rounded-[75px] py-[295px] mx-4 relative">
                      {/* picture */}
                      <div className="bg-Cambridgeblue absolute py-[219px] px-[270px] start-[33px] top-10 rounded-[60px]">
                        <div className="absolute start-[33px] top-[33px]">
                           <Image
                            src="/img/RN.jpg"
                            width={475}
                            height={475}
                            alt="Picture of the nurse" 
                            />
                        </div>
                      </div>
                      {/* title */}
                      <div className='absolute pl-[64px] bottom-[30px] font-medium text-6xl'>
                        <p>Registered Nurse</p>
                      </div>
                    </div>
                  </div>
                  {/* Licensed Practical Nurse Card */}
                  <div className="">
                    <div className="bg-Ashgray rounded-[75px] py-[295px] mx-4 relative">
                      {/* picture */}
                      <div className="bg-Cambridgeblue absolute py-[200px] px-[270px] start-[33px] top-10 rounded-[60px]">
                        <div className="absolute start-[33px] top-[65px]">
                           <Image
                            src="/img/LPN.jpg"
                            width={475}
                            height={475}
                            alt="Picture of the licensed practical nurse helping a person" 
                            />
                        </div>
                      </div>
                      {/* title */}
                      <div className='absolute pl-[20px] bottom-[12px] font-medium text-6xl'>
                        <p className='text-center'>Licensed Practical Nurse</p>
                      </div>
                    </div>
                  </div>
                  {/* Healthcare Aides Card */}
                  <div className="">
                    <div className="bg-Ashgray rounded-[75px] py-[295px] mx-4 relative">
                      {/* picture */}
                      <div className="bg-Cambridgeblue absolute py-[219px] px-[270px] start-[33px] top-10 rounded-[60px]">
                        <div className="absolute start-[33px] top-[54px]">
                           <Image
                            src="/img/HCA.jpg"
                            width={475}
                            height={475}
                            alt="Picture of the healthcare aide helping a person" 
                            />
                        </div>
                      </div>
                      {/* title */}
                      <div className='absolute pl-[74px] bottom-[30px] font-medium text-6xl'>
                        <p >Healthcare Aides</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }