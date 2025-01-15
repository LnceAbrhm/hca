import Link from "next/link";

export default function Row4() {
    return (
      <>
        <div className="h-[59rem] w-max-screen block">
          <div className="content-center">
            <div>
              {/* Title */}
              <div className="text-center text-Calpolygreen text-6xl font-bold px-28 pb-8">
                <p>Join Us:</p>
              </div>
              <div className="grid grid-cols-3 ">
                <div className="bg-Ashgray h-[50rem] text-white">
                  <div className="px-32 py-36 font-bold text-lg ">
                      <p className="text-Calpolygreen font-black text-2xl mb-12">
                          Ready to help?
                      </p>
                      <p >
                          Our healthcare agency is determined to help.Lorem ipsum dolor sit amet, 
                          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                      </p>
                      <p className="mt-8">
                          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan. 
                          <span className="ml-2 text-lime-700 hover:text-Teagreen hover:underline"><Link href={'#'}>
                          Contact us 
                          </Link></span>
                      </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="bg-[url('/img/nursingbooks.jpg')] bg-cover bg-center bg-no-repeat h-[50rem]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }