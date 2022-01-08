import React from 'react'
import { useHistory } from 'react-router'
import useDoctors from '../../../hooks/useDoctors'

const Doctors = () => {
    const doctors = useDoctors()
    const history = useHistory()
    return (
        <section>
            <h2 className="text-center text-4xl text-blue-400 mt-12">Our Experts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-24 xl:px-40" id="doctors">
                {
                    doctors.map((doctor, index) => (
                        <div className="border border-gray-20 m-4 shadow-xl flex flex-col justify-center items-center text-center p-12" key={index}>
                            <div style={{ backgroundImage: `url(${doctor.img})`, width: '233px', height: '233px', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                            </div>
                            <h3 className="text-xl my-2">{doctor.name}</h3>
                            <h3 className="text-sm">{doctor.title}</h3>
                            <button className="bg-blue-400 px-4 py-1 mt-4 text-white" onClick={() => history.push(`doctor/${doctor.id}`)}>Get appointment</button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Doctors
