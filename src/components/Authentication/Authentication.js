import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import useAuth from '../../hooks/useAuth'

const Authentication = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [state, setState] = useState(false)
    const { signinUsingGoogle, user, error, signupUsingEmailPassword, handleLogin } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signinUsingGoogle()
            .then((result) => {
                history.push(redirect_url)
            })
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        await signupUsingEmailPassword(form)
    }

    const Login = (e) => {
        e.preventDefault()
        handleLogin(form.email, form.password)
    }

    if (user.uid) {
        history.replace(redirect_url)
    }
    return (
        <div>
            <section className="bg-blue-100 p-12 md:px-24 xl:px-40 text-4xl text-center">Signup</section>
            <form className="mx-auto my-8 md:w-1/3 flex flex-col justify-center" onSubmit={state ? handleSignup : Login}>
                {error.message&&(
                    <p className="text-red-500">{error.message}</p>
                )}
                {
                    state && (
                        <>
                            <input onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} className="p-2 border border-blue-400 my-2" type="text" placeholder="Your Full Name" />
                        </>
                    )
                }
                <input onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} className="p-2 border border-blue-400 my-2" type="email" placeholder="Your Email" />
                <input onChange={(e) => setForm({ ...form, password: e.target.value })} value={form.password} className="p-2 border border-blue-400 my-2" type="password" placeholder="Password" />
                <div className="my-2">
                    <input type="checkbox" id="state" onChange={() => setState(!state)} />
                    <label htmlFor="state"> New to HFCR?</label>
                </div>
                <button className="bg-blue-400 py-2 my-1" type='submit'>{state?'Signup':'Signin'}</button>
                <p className="text-center">Or</p>
                <button type='reset' className="bg-blue-400 py-2 my-1" onClick={handleGoogleLogin}>Signup With Google</button>
            </form>
        </div>
    )
}

export default Authentication
