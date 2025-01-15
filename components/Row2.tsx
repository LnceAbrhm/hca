
export default function Row2() {
    return (
      <>
        <div className="h-[59rem] w-max-screen justify-between block bg-[url('/img/aboutbackground.jpg')] bg-cover bg-center bg-no-repeat ">
          <div className="bg-slate-300/[.35] h-[59rem] backdrop-blur-sm content-center">
            <div className="grid grid-cols-2 text-white">
                <div className="px-32 py-28 font-bold text-3xl text-center">
                    <p className="text-Calpolygreen font-black text-6xl mb-16">
                        We Are Here To Help
                    </p>
                    <p >
                        Our healthcare agency is determined to help.Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-8">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                    </p>
                </div>
                <div className="px-36 py-14">
                    <div className="bg-Ashgray h-full rounded-[75px] text-center content-center">
                      <div className="text-4xl ">
                        <p className="text-6xl font-black">
                          Awards
                        </p>
                        <ul className="list-disc text-left px-12 py-8 ml-12 space-y-4 font-bold">
                          <li>
                            <p>10+ Lorem ipsum dolor</p>
                          </li>
                          <li>
                            <p>100+ dolor sit amet</p>
                          </li>
                          <li>
                            <p>50+ consectetuer adipiscing elit</p>
                          </li>
                          <li>
                            <p>Top 10 fastest growing agency</p>
                          </li>
                          <li>
                            <p>nibh euismod tincidunt ut</p>
                          </li>
                          <li>
                            <p>dolore magna aliquam</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </>
    );
  }