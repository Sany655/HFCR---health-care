import React from 'react'

const Banner = () => {
    return (
        <div>
            <section className="p-2 md:p-12 mx-auto flex justify-center items-center" style={{ backgroundImage: "url('./banner.webp')" }}>
                <div className="md:w-3/4 md:flex justify-between items-center md:text-2xl">
                    <article className="md:p-4 p-2 md:bg-blue-300 text-blue-500">
                        Your <span className="md:text-black">Health</span> is our focus We help your body <span className="md:text-black">Function</span> efficiently Orthopaedic <span className="md:text-black">Rehabilitation</span> pre- or post-surgery Provided with the utmost <span className="md:text-black">Care</span>
                    </article>
                    <article className="md:p-4 p-2 md:bg-gray-500 text-blue-300">
                        Our expert team of allied
                        health professionals and clinical researchers prescribe the latest treatment programs so you can move better, with less pain to get more out of life.
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Banner
