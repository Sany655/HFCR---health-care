import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../vector/isolated-monochrome-white.svg'
import cart from '../../cart.png'

const Footer = () => {
    return (
        <footer className="bg-blue-300 py-8 text-xl">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-24 xl:px-40">
                <div className="my-4 md:px-4 flex flex-col justify-center items-left gap-2">
                    <img src={logo} alt="" className="w-1/3" />
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        HFCR
                    </p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg> healthfunctionRcare@app.web</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg> +88012191111</p>
                </div>
                <div className="my-4 md:px-4">
                    <Link className="block" to="/about">About Us</Link>
                    <Link className="block" to="/contact">Contact Us</Link>
                    <Link className="block" to="/" href="#doctors">Get an appointment</Link>
                </div>
                <div className="my-4 md:px-4">
                    <img src={cart} alt="cart" />
                </div>
            </div>
            <p className="text-center pt-8">Copyright &copy; Health Function Care Rehabilitation</p>
        </footer>
    )
}

export default Footer
