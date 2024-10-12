'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    return (
        <div>
            <nav className='bg-black text-white p-3 text-lg flex justify-around'>This is a Navbar page</nav>
            <center><button onClick={() => router.push('/')} className='py-3 px-3 bg-blue-400 text-white rounded-full hover:bg-yellow-500'>Home</button></center>
        </div>
    )
}

export default page
