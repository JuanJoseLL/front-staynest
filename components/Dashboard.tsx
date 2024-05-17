'use client'

import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = ()=>{

    const {data: session} = useSession();
    return (
       <>
        {session ?(
            <>  
                <img src={session.user?.image as string} className='rounded-full h-20 w-20'></img>
                <h1 className='text-3xl font-bold'>
                    Welcome back, {session.user?.name}
                </h1>
                <p className='text-2xl font-bold'>
                    {session.user?.email}
                </p>
            </>
        ):(
            <>
                <h1 className='text-3xl text-red-500 font-bold'>You're not log in </h1>
                <div className='flex space-x-5'>
                <button onClick={()=>signIn('github')}
                 className='border border-black rounded-lg px-10 py-1'>
                    Sign in with github</button>

                <button onClick={()=>signIn('google')} 
                className='border border-black rounded-lg px-10 py-1'>
                    Sign in with google</button>
                </div>

            </>
        )
            
        }
       </>
    )
}

export default Dashboard
