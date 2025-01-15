import Link from "next/link";

export default function Footer() {
    return (
      <>
        <div className="h-[15rem] w-max-screen block bg-Cambridgeblue">
          <div className="content-center">
            <div>
                <div className="grid grid-cols-3 text-white">
                    <div className=" text-end pt-12 pr-12">
                        <div className="inline-flex space-x-1.5 ">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                            </div>
                            <div className="text-white mt-1.5 font-black">
                            Healthcare Agency
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 pt-12 mt-2.5">
                        <div className="grid grid-cols-6 ">
                            <div>
                              <div className="flex flex-col space-y-0.5">
                                <div className="font-bold">
                                  Contact us
                                </div>
                                <div>
                                  <button className="hover:underline">Example@example.com</button>
                                </div>
                                <div>
                                  <button className="hover:underline">(+1) 777-777-7777</button>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="font-bold hover:underline">
                                <Link href={'#'}>FAQ</Link>
                              </div>
                            </div>
                            <div>
                              <div className="font-bold hover:underline">
                                <Link href={'#'}>Careers</Link>
                              </div>
                            </div>
                            <div>
                              <div className="font-bold hover:underline">
                                <Link href={'#'}>Services</Link>
                              </div>
                            </div>
                            <div>
                              <div className="flex flex-col space-y-0.5">
                                <div className="font-bold">
                                  Socials
                                </div>
                                <div className="flex flex-row space-y-0.5">
                                  <div>
                                    <div>
                                      <Link href={'#'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook mr-3 hover:text-slate-200" viewBox="0 0 16 16">
                                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <Link href={'#'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x hover:text-slate-200" viewBox="0 0 16 16">
                                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
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