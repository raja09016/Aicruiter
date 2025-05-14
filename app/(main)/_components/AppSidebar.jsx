// "use client"

// import { Button } from "@/components/ui/button"
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
//   } from "@/components/ui/sidebar"
// import { SideBarOptions } from "@/services/Constants"
// import { Plus } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

  
//   export function AppSidebar() {
//     const path = usePathname ();
//     console.log(path)
//     return (
//       <Sidebar>
//         <SidebarHeader className="flex items-center mt-5">
//             <Image src={'/logo.png'} alt='logo'
//               width={200}
//               height={100}
//             className="width=[150px]"  />
//             <Link  href={'/dashboard/create-interview'} >
//             <Button className=" cursor-pointer w-full mt-5"> <Plus/>Create New Interview </Button>
//             </Link>
           
//         </SidebarHeader>

//         <SidebarContent>
//           <SidebarGroup >
//             <SidebarContent>
//                 <SidebarMenu >
//                     {SideBarOptions.map( ( option,index )=>(
//                         <SidebarMenuItem className="p-1"key={index}>
//                                 <SidebarMenuButton  asChild className={`p-5 ${path==option.path && 'bg-blue-50'}`}>
//                                    <Link href={option.path}>
//                                         <option.icon className={` ${path==option.path && 'text-primary'}`}/>
//                                         <span className={`text-[16px] ${path==option.path && 'text-primary'}`}>{option.name}</span>
//                                    </Link>

//                                 </SidebarMenuButton>
//                         </SidebarMenuItem>
//                     )

//                     )}
//                 </SidebarMenu>
//             </SidebarContent>
//           </SidebarGroup>
          
//         </SidebarContent>

//         <SidebarFooter />
//       </Sidebar>
//     )
//   }
  







'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx'

// const sideBarOptions = [
//   { name: "Dashboard", path: "/dashboard", icon: Plus },
//   { name: "Scheduled Interview", path: "/scheduled", icon: Plus },
//   { name: "All Interview", path: "/interviews", icon: Plus },
//   { name: "Billing", path: "/billing", icon: Plus },
//   { name: "Settings", path: "/settings", icon: Plus },
// ]
import { sideBarOptions } from "@/services/Constants"

export function AppSidebar(){
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Topbar (mobile only) */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow fixed w-full z-30">
        <Image src="/logo.png" alt="logo" width={100} height={40} />
        <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
      </div>

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-64 h-screen bg-white shadow transition-transform duration-300 ease-in-out z-50",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        <div className="p-4 flex flex-col h-full overflow-y-auto">
          <Image src="/logo.png" alt="logo" width={150} height={60} className="mx-auto mb-4" />
          <Link href="/dashboard/create-interview">
            <Button className="w-full mb-6">
              <Plus className="mr-2" /> Create New Interview
            </Button>
          </Link>

          <div className="space-y-2">
            {sideBarOptions.map((option, i) => (
              <Link key={i} href={option.path} className={clsx(
                "flex items-center px-4 py-2 rounded-md hover:bg-blue-100",
                pathname === option.path ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700"
              )}>
                <option.icon className="mr-3 h-5 w-5" />
                {option.name}
              </Link>
            ))}
          </div>

          {/* Optional Close Button for mobile */}
          <button
            className="mt-auto text-red-600 underline lg:hidden"
            onClick={() => setOpen(false)}
          >
            Close Menu
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}


