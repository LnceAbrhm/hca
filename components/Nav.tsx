import Link from "next/link";


export default function Nav() {
    return (
      <>
        <div className="bg-Cambridgeblue p-3 w-min-screen justify-between flex">
          {/* title */}
          <div className="inline-flex space-x-1.5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </div>
            <div className="text-white mt-1.5 font-black">
              Healthcare Agency
            </div>
          </div>
          {/* navigation */}
          <div className="block inline-flex mt-1.5 justify-end divide-x text-white ">
            <Link className="px-2 hover:underline" href={'#'}>About us</Link>
            <Link className="px-2 hover:underline" href={'#'}>Services</Link>
            <Link className="px-2 hover:underline" href={'#'}>Careers</Link>
            <Link className="px-2 hover:underline" href={'#'}>Contact Us</Link>
          </div>

        </div>
      </>
    );
  }