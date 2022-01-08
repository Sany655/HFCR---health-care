import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
// import './Header.css'
import logo from '../../vector/isolated-monochrome-black.svg'

function Header() {
    const { user, logout } = useAuth()
    return (
        <header className="md:px-24 xl:px-40 bg-blue-300 sm:flex justify-between items-center py-4 sm:px-4">
            <img src={logo} alt="HFRC" className="w-12 md:w-20 mx-auto sm:mx-0" />
            <nav className="text-center mt-4 md:mt-0 border-t md:border-none">
                <NavLink exact activeStyle={{ fontWeight: "bold", color: "darkblue" }} className="px-2 md:text-lg text-xs" to="/">Home</NavLink>
                <NavLink activeStyle={{ fontWeight: "bold", color: "darkblue" }} className="px-2 md:text-lg text-xs" to="/about">About</NavLink>
                <NavLink activeStyle={{ fontWeight: "bold", color: "darkblue" }} className="px-2 md:text-lg text-xs" to="/contact">Contact</NavLink>
                {
                    user.uid ? (
                        <>
                            <a className="px-2 md:text-lg text-gray-500 text-xs">{user.displayName}</a>
                            <a onClick={logout} className="px-2 md:text-lg cursor-pointer" title="logout"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg></a>
                        </>
                    ) : (
                        <NavLink activeStyle={{ fontWeight: "bold", color: "darkblue" }} to="/authentication" className="px-2 md:text-lg cursor-pointer border border-gray-500 p-1 text-xs" title="authentication">Signup <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg></NavLink>
                    )
                }
            </nav>
        </header>
    )
}

export default Header
