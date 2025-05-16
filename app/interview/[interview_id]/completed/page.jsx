'use client'

import { CheckCircle, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function InterviewCompletePage() {
  // useEffect(() => {
  //   // Check if the page has already been reloaded
  //   if (!sessionStorage.getItem('reloaded')) {
  //     // Mark that the page has been reloaded
  //     sessionStorage.setItem('reloaded', 'true');
  //     // Reload the page
  //     window.location.reload();
  //   }
  // }, []); // empty dependency array ensures it runs once

  const timer = setTimeout(() => {
    window.location.reload();
  }, 5000); // 5000 ms = 5 seconds

  // Optional: Cleanup the timer on unmount
//   return () => clearTimeout(timer);
// }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      {/* Logo and Status */}
      {/* <div className="absolute top-6 left-6 flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className="font-bold text-xl">
          <span className="text-blue-500">AI</span>cruiter
        </span>
      </div> */}

      <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold mb-2 text-center">Interview Complete!</h1>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Thank you for participating in the AI-driven interview with AIcruiter
      </p>

      <div className="rounded-xl overflow-hidden shadow-xl">
        <Image
          src="/completed.png"
          alt="Interview Illustration"
          width={800}
          height={400}
          className=" h-auto object-cover w-[800px]"
        />
      </div>

      <div className="mt-10  bg-white shadow-md p-3 rounded-xl flex flex-col justify-center items-center text-center w-full max-w-lg">
        <div className=" mt-3 w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center"> <Send className="  text-white"/></div>
        <h2 className=" mt-3 font-bold text-3xl">What's Next ?</h2>
        <p className="mt-3 text-lg">The recruiter will review your interview responses and will contact you soon regarding the next steps.</p>
        <p  className="mt-3 text-lg">Response within 2-3 business days</p>
      </div>

      <p className="mt-5">© 2025 Alcruiter. All rights reserved.</p>
     
       
      
    </div>
  );
}
