'use client'

import { useState } from "react"
import Link from "next/link"
import { navMenuItems } from "@/app/Data/navMenuItems"
// import { navMenuItems } from "../..//Data/navMenuItems"
import Image from "next/image"

function NavLink({ to, children, id }) {
    return (
        <Link href={to} className="text-white" key={id}>
            {children}
        </Link>
    )
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`max-w-screen-xl mx-auto absolute top-0 left-0 h-[40rem] w-full transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className={`flex items-center justify-center filter drop-shadow-md h-20`}> {/*logo container*/}
                {/* <a className="text-xl font-semibold" href="/">LOGO</a> */}
                <Link href='/'>
                    {/* <Image
                        src='/images/EricpriceLogo-white.svg'
                        width={150}
                        height={39}
                        alt="Attorney Eric Price Logo"
                        className="h-9"
                        loading="eager"
                        style="width: auto; height: auto;"
                    /> */}
                    Alberto.DEV
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <ul>
                    {navMenuItems.map(({ id, link, name }) =>
                        <li id={id} className="text-xl font-medium my-4" key={id}>
                            <Link href={link} onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                                {name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={`max-w-screen-xl mx-auto flex filter drop-shadow-md px-4 py-4 h-20 items-center`}>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link href='/'>
                    {/* <Image
                        src='/images/EricpriceLogo-white.svg'
                        width={150}
                        height={39}
                        alt="Attorney Eric Price Logo"
                        className="h-9"
                        loading="eager"
                        style="width: auto; height: auto;"
                    /> */}
                    Alberto.DEV
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""} `} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-1 w-0" : "w-full"} `} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""} `} />
                </div>

                <div className="hidden md:flex md:gap-6">
                    {navMenuItems.map(({ id, link, name }) =>
                        <NavLink to={link} key={id}>
                            {name}
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    )
}