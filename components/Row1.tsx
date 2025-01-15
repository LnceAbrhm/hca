import Image from 'next/image'

export default function Row1() {
    return (
      <>
        <div className="p-14 h-[59rem] w-max-screen justify-between block ">
          <div className="mt-24 bg-Ashgray w-full h-[38rem] rounded-[43px] content-center shadow-md">
            <div className='grid grid-cols-2'>
              <div className="inline-flex text-white">
                <div className="grid grid-rows-2 gap-4">

                <div className="pl-12 pt-4 font-black">
                  <p className="leading-tight text-6xl">
                    Get promising healthcare aid services in Manitoba.
                  </p>
                </div>

                <div className="pl-12 text-[24px] ">
                  <p>
                    Deployed 100+ registered nurses, licensed practical nurses, and healthcare aides across the province of Manitoba. 
                    Our specialist are exceptional at handling scenarios that guarantees the customers satisfaction. 
                  </p>
                  <p className="italic">
                    Contact us for more details.
                  </p>

                  <div className="inline-flex py-4 mt-4">
                    <div>
                      <button className="border border-[3px] font-medium rounded-[16px] ml-4 mr-8 shadow-md hover:bg-lime-500 hover:shadow-inner"><span className="p-2">Contact Us</span></button>
                    </div>
                    
                    <div>
                      <button className="bg-Calpolygreen font-medium rounded-[16px] px-3 py-1 shadow-md hover:bg-lime-500 hover:shadow-inner">Book an appointment</button>
                    </div>
                  </div>
                </div>
                
                </div> 
              </div>

              <div className="inline-flex ">
                <div className='p-8 m-4 ml-8'>
                  <Image
                  src="/img/grandma.jpg"
                  width={725}
                  height={725}
                  alt="Picture of a nurse talking to family" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }