'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
const Login = () => {

    const signInWithGoogle = async ()=>{

        // method used to sign with google
        const {error} = await supabase.auth.signInWithOAuth({
                provider:'google'
        })
        if(error){
            console.log("error",error.message)
        }
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col items-center border rounded-2xl p-8'>
            <Image src={"/logo.png"} alt='logo'
            width={100}
            height={100}
            className='w-[180px]'
            />
            <div className='flex flex-col items-center'>
                <Image src={'/login.png'}
                alt='login'
                width={600}
                height={400}
                className='w-[400px] h-[250px] rounded-2xl'
                />

                <h2 className='text-center text-2xl font-bold mt-5'>Welcome to AiCruiter</h2>
                <p className='text-gray-500 text-center'>Sign In with Google Authentication</p>
                <Button className='mt-7 w-full cursor-pointer ' 
                onClick={signInWithGoogle}
                >Login with Google</Button>
               
            </div>
        </div>
    </div>
  )
}

export default Login