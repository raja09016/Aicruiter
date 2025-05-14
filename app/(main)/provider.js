'use client'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'
import WelcomeContainer from './dashboard/_components/WelcomeContainer'
import { UserDetailContext } from '@/context/UserDetailsContext';
import { useUser } from '@/app/provider';
import { useRouter } from 'next/navigation'

function DashboardProvider({children}) {
  
  return (
   <SidebarProvider >  
       <AppSidebar/>
        <div className=' lg:ml-64 w-full p-10'>
        {/* <SidebarTrigger /> */}
        <WelcomeContainer/>
       
             {children}
         </div>
   </SidebarProvider>
  )
}

export default DashboardProvider