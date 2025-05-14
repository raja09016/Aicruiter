'use client'
import React from 'react'
import DashboardProvider from './provider'
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/provider';
function DashboardLayout({children}) {

  const {user} = useUser();
  // console.log("aayyaaa",user);
  const router =useRouter()
  if(!user){
    router.push("/auth")
  }
  return (

   
    <div className='bg-secondary'>
        
         <DashboardProvider>
           <div className='mt-5'>
           {children}
           </div>
         </DashboardProvider>
    </div>
  )
}

export default DashboardLayout