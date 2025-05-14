'use client'
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient'
import React, { useEffect, useState } from 'react'
import InterviewCard from '../dashboard/_components/InterviewCard';
import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ScheduledInterview() {
    const {user} = useUser();
    const [interviewList , setInterviewLst] = useState()
    useEffect( ()=>{
      user && GetInterviewList();
    },[user])
    const GetInterviewList = async ()=>{
        const result = await supabase.from('Interviews')
        .select('created_at,jobPosition,duration,interview_id,interview-feedback(userEmail)')
        .eq('userEmail',user?.email)
        .order('id',{ascending:false});
        setInterviewLst(result.data)
        // console.log("result " ,result)
    }
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-2xl'>InterviewList with Candidate Feedback</h2>
        {interviewList?.length==0 && 
         
         <div className='p-5 mt-5 flex flex-col gap-3 items-center  '>
             <Video className='h-10 w-10 text-primary'  />
             <h2> You don't have any interview created </h2>
             <Button>+ Crate New Interview</Button>
         </div>      
       }
 
       {
         interviewList && 
         <div className='grid grid-cols-2 mt-5  xl:grid-cols-3 gap-5'>
           {interviewList.map( (interview,index)=>(
             <InterviewCard interview={interview} key={index}
             viewDetail={true} />
           ) )}
         </div>
       }
    </div>
  )
}

export default ScheduledInterview