"use client"

import { useState } from "react"
import Link from 'next/link'

const Page = () => {
    const [active , setActive] = useState(true);
    //  const router = useRouter()
    // const handleUserLogin = async () => {
    //     router.push('dashboard')
    // }
  return (
//   <h1 className="text-red-600">
    <div className="app-content content h-full">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper h-full">
            <div className="content-header row">
            </div>
            <div className="content-body h-full">
                <div className="auth-wrapper auth-basic px-2 flex justify-center items-center h-full">
                    <div className="auth-inner my-2 relative max-w-[400px] before:content-[''] before:w-[244px] before:h-[243px] before:absolute before:top-[-54px] before:left-[-46px] before:bg-[url(/right-side-design.png)] after:content-[''] after:w-[272px] after:h-[272px] after:absolute after:bottom-[-55px] after:right-[-75px] after:bg-[url(/left-side-design.png)] after:z-[-1]">
                        <div className="card mb-0 shadow-[0_4px_24px_0_rgba(34,41,47,0.1)] relative flex flex-col min-w-0 bg-white bg-clip-border border-0 border-[rgba(34,41,47,0.125)] rounded-[0.428rem]">
                            <div className="card-body [flex:1_1_auto] p-[1.5rem]">
                                <a className="brand-logo flex justify-center m-[1rem_0_1rem_0]">
                                    <img
                                        src="/juiceplus-logo-2025.webp"
                                        className={`overflow-hidden transition-all w-[50%]`}
                                        alt=""
                                    />
                                    {/* <h2 className="abc text-[60px]">Vuexy</h2> */}
                                </a>

                                <h4 className="card-title mb-1 font-[500] text-[1.285rem]">Welcome to Quick Assist! 👋</h4>
                                <p className="card-text mb-2 leading-[1.5rem]">Please sign-in to your account</p>
                                {
                                    active ? (
                                        <>
                                            <form className="auth-login-form mt-2" action="index.html" method="POST" noValidate="noValidate">
                                                <div className="mb-1">
                                                    <label htmlFor="login-email" className="form-label mb-[0.2857rem] text-[0.857rem] text-[#5e5873] inline-block">Email</label>
                                                        <input type="text" className="form-control block w-full p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45] text-[#6e6b7b] bg-white bg-clip-padding border border-[#d8d6de] appearance-none rounded-[0.357rem] [transition:border-color_0.15s_ease-in-out,_box-shadow_0.15s_ease-in-out]" id="login-email" name="login-email" placeholder="john@example.com" aria-describedby="login-email" tabIndex="1" autoFocus={false} />
                                                </div>

                                                <div className="mb-1">
                                                    <div className="flex justify-between">
                                                        <label className="form-label mb-[0.2857rem] text-[0.857rem] text-[#5e5873] inline-block" htmlFor="login-password">Password</label>
                                                        <a href="auth-forgot-password-basic.html" className="text-[#7367f0] decoration-0">
                                                            <small>Forgot Password?</small>
                                                        </a>
                                                    </div>
                                                    <div className="input-group input-group-merge form-password-toggle relative flex flex-wrap items-stretch w-full">
                                                        <input type="password" className="form-control form-control-merge block w-[1%] p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45] text-[#6e6b7b] bg-white bg-clip-padding border border-[#d8d6de] appearance-none rounded-[0.357rem] [transition:border-color_0.15s_ease-in-out,_box-shadow_0.15s_ease-in-out] [flex:1_1_auto] border-r-0 rounded-tr-none rounded-br-none" id="login-password" name="login-password" tabIndex="2" placeholder="············" aria-describedby="login-password" />
                                                        <span className="input-group-text cursor-pointer flex items-center p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45]  text-[#6e6b7b] text-center whitespace-nowrap bg-white border border-[#d8d6de] rounded-[0.357rem] border-l-0 rounded-tl-none rounded-bl-none"> 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <Link href="dashboard" className=" border-[#7367f0] bg-[#7367f0] text-white w-full inline-block text-center align-middle p-[0.786rem_1.5rem] text-[1rem] rounded-[0.358rem] leading-[1] [transition:color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out,background_0s,border_0s] hover:shadow-[0_8px_25px _-8px_#7367f0] cursor-pointer" tabIndex="4">Sign in</Link>
                                                </div>
                                            </form>
                                            <p className="text-center mt-2 leading-[1.5rem]">
                                                <span className="text-[1rem] text-[#6e6b7b]">New on our platform?</span>
                                                <a >
                                                    <span className="text-[1rem] text-[#7367f0] cursor-pointer" onClick={() => setActive(false)}> Create an account</span>
                                                </a>
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <form className="auth-login-form mt-2" action="index.html" method="POST" noValidate="noValidate">
                                                <div className="mb-1">
                                                    <label htmlFor="login-email" className="form-label mb-[0.2857rem] text-[0.857rem] text-[#5e5873] inline-block">Username</label>
                                                        <input type="text" className="form-control block w-full p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45] text-[#6e6b7b] bg-white bg-clip-padding border border-[#d8d6de] appearance-none rounded-[0.357rem] [transition:border-color_0.15s_ease-in-out,_box-shadow_0.15s_ease-in-out]" id="login-email" name="login-email" placeholder="johndoe" aria-describedby="login-email" tabIndex="1" autoFocus={false} />
                                                </div>
                                                <div className="mb-1">
                                                    <label htmlFor="login-email" className="form-label mb-[0.2857rem] text-[0.857rem] text-[#5e5873] inline-block">Email</label>
                                                        <input type="text" className="form-control block w-full p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45] text-[#6e6b7b] bg-white bg-clip-padding border border-[#d8d6de] appearance-none rounded-[0.357rem] [transition:border-color_0.15s_ease-in-out,_box-shadow_0.15s_ease-in-out]" id="login-email" name="login-email" placeholder="john@example.com" aria-describedby="login-email" tabIndex="1" autoFocus={false} />
                                                </div>

                                                <div className="mb-1">
                                                    <div className="flex justify-between">
                                                        <label className="form-label mb-[0.2857rem] text-[0.857rem] text-[#5e5873] inline-block" htmlFor="login-password">Password</label>
                                                        <a href="auth-forgot-password-basic.html" className="text-[#7367f0] decoration-0">
                                                            <small>Forgot Password?</small>
                                                        </a>
                                                    </div>
                                                    <div className="input-group input-group-merge form-password-toggle relative flex flex-wrap items-stretch w-full">
                                                        <input type="password" className="form-control form-control-merge block w-[1%] p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45] text-[#6e6b7b] bg-white bg-clip-padding border border-[#d8d6de] appearance-none rounded-[0.357rem] [transition:border-color_0.15s_ease-in-out,_box-shadow_0.15s_ease-in-out] [flex:1_1_auto] border-r-0 rounded-tr-none rounded-br-none" id="login-password" name="login-password" tabIndex="2" placeholder="············" aria-describedby="login-password" />
                                                        <span className="input-group-text cursor-pointer flex items-center p-[0.571rem_1rem] text-[1rem] font-[400] leading-[1.45]  text-[#6e6b7b] text-center whitespace-nowrap bg-white border border-[#d8d6de] rounded-[0.357rem] border-l-0 rounded-tl-none rounded-bl-none"> 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <button className=" border-[#7367f0] bg-[#7367f0] text-white w-full inline-block text-center align-middle p-[0.786rem_1.5rem] text-[1rem] rounded-[0.358rem] leading-[1] [transition:color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out,background_0s,border_0s] hover:shadow-[0_8px_25px _-8px_#7367f0] cursor-pointer" tabIndex="4">Sign in</button>
                                                </div>
                                            </form>
                                            <p className="text-center mt-2 leading-[1.5rem]">
                                                <span className="text-[1rem] text-[#6e6b7b]">Already have an account?</span>
                                                <a >
                                                    <span className="text-[1rem] text-[#7367f0] cursor-pointer" onClick={() => setActive(true)}> Sign in instead</span>
                                                </a>
                                            </p>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
//   {/* </h1> */}
  )
}

export default Page