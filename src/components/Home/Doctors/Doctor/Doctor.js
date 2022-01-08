import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Doctor = () => {
    const [doctor, setDoctor] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch('../../../data.json')
            .then(response => response.json())
            .then(data => {
                const gotDoctor = data.find(doc => doc.id == id)
                setDoctor(gotDoctor);
            })
    }, [])

    return (
            <div className="text-center">
                <section className="bg-blue-100 p-12 md:px-24 xl:px-40 text-4xl">Appointment</section>
                <h3 className="text-4xl text-blue-500 my-12">Your Appointment details will be sent to your email</h3>
                <hr />
            <div className="md:px-12 my-8">
                <img src={'../../' + doctor.img} alt="Not Found" className="m-auto" />
                <h3 className="text-4xl">{doctor.name}</h3>
                <p className="text-xl my-2">{doctor.edu}</p>
                <p>{doctor.about}</p>
            </div>
            </div>
    )
}

export default Doctor
