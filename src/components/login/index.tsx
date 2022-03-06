import React, { useState } from 'react';

type Props = {
    loginUser: () => void
}

const LoginPage = ({ loginUser }:Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
        <div className='m-8'>
            <div className='p-5 rounded-lg bg-lightGrey text-center lg:w-1/4 lg:mx-auto'>
                <input value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none mb-3 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none mb-3 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email"/>
                <input value={password} onChange = {(e) => setPassword(e.target.value)} className="shadow appearance-none mb-8 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password"/>

                <button onClick={loginUser} className='rounded-full bg-blueberry text-white px-8 py-2'>Submit</button>
            </div>
        </div>
        </>
    )
}

export default LoginPage;