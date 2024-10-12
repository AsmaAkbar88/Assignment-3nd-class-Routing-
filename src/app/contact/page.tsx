'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    return (
        <div>
            <nav className='bg-black text-white p-3 flex justify-around text-lg'>This is a Contact page</nav>
            <center><button onClick={() => router.push('/')} className='py-3 px-3 text-white rounded-full bg-blue-400 hover:text-yellow-500'>Home</button></center>
        </div>
    )
}

export default page
