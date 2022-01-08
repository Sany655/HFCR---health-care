import React, { useEffect } from 'react'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const Contact = () => {
    const { user } = useAuth()
    const [form, setForm] = useState({
        name: '', email: '', phone: '', message: ''
    })
    useEffect(()=>{
        setForm({name:user.displayName?user.displayName:'',email:user.email?user.email:'',phone:user.phone?user.phone:''})
    },[user])
    const [reply, setReply] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name && form.email && form.phone && form.message) {
            setForm({ name: '', email: '', phone: '', message: '' })
            setReply("Thank for contact us...")
            setInterval(() => { setReply('') }, 3000)
        }
    }
    return (
        <div>
            <section className="bg-blue-100 p-12 md:px-24 xl:px-40 text-4xl text-center">Contact Us</section>
            <form onSubmit={handleSubmit} className="mx-auto my-8 md:w-1/3 flex flex-col justify-center px-4">
                {reply && <p className="text-blue-500 text-2xl text-center">{reply}</p>}
                <input disabled={ user.displayName?true:false } required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="p-2 border border-blue-400 my-2" type="text" placeholder="Your Full Name" />
                <input disabled={ user.email?true:false } required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="p-2 border border-blue-400 my-2" type="email" placeholder="Your Email" />
                <input disabled={ user.phone?true:false } required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="p-2 border border-blue-400 my-2" type="phone" placeholder="Your Phone" />
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="p-2 border border-blue-400 my-2" rows="5" placeholder="Write your message"></textarea>
                <button className="bg-blue-400 py-2">Send</button>
            </form>
        </div>
    )
}

export default Contact
