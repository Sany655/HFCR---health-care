import { useEffect } from "react"
import { useState } from "react"

const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./data.json')
        .then(response=>response.json())
        .then(data=>{
            setDoctors(data)
        })
    }, [])
    return doctors;
}

export default useDoctors;