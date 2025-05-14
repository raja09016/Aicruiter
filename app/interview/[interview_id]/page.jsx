'use client'
import React, { useContext, useEffect, useState } from 'react'
import InterviewHeader from '../_components/InterviewHeader'
import Image from 'next/image'
import { Clock, Info, Loader2Icon, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import { supabase } from '@/services/supabaseClient'
import { toast } from 'sonner'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useRouter } from 'next/navigation'
import QuestionList from '@/app/(main)/dashboard/create-interview/_components/QuestionList'

function Interview() {
    const {interview_id} = useParams();
    const[interviewData,setInterviewdata] = useState();
    const [userEmail,setUserEmail] = useState();
    // console.log("jbcs",interview_id);
    const[userName,setUserName] = useState();
    const[loading,setLoading] = useState(false);
    const { interviewInfo , setInterviewInfo} = useContext(InterviewDataContext);
    useEffect( ()=>{
        interview_id && GetInterviewDetails();
    } ,[interview_id])

    const router= useRouter();
    const GetInterviewDetails= async()=>{
        setLoading(true);
        try{
            let { data: Interviews, error } = await supabase
              .from('Interviews')
              .select("jobPosition, jobDescription ,duration,type")
              .eq('interview_id',interview_id)
              setInterviewdata(Interviews[0]);
              if(Interviews?.length==0){
             
                toast('Incorrect Interview Link');
               
                return;
              }
            //   console.log(interviewData)
            setLoading(false)

        }
        catch(e){
            setLoading(false);
            toast('Incorrrect interview Link')

        }
            
    }

  const  onJoinInterview = async()=>{
    setLoading(true);
    let { data: Interviews, error } = await supabase
              .from('Interviews')
              .select("*")
              .eq('interview_id',interview_id)
              // console.log(Interviews[0])
              setInterviewInfo(
                {
                    userName:userName,
                    userEmail:userEmail,
                    interviewData:Interviews[0],
                }
              );
              router.push('/interview/'+interview_id+'/start');
              setLoading(false);


  }
  return (
    <div className='px-10 md:px-28 lg:px-48 xl:px-80 mt-7 pb-10 '>
       <div className='flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-32 xl:px-52 mb-20 '>
        <Image src={'/logo.png'}  alt='logo' width={200} height={100} 
             className='w-[140px]' />
         <h2 className='mt-3' >AI-Powered Interview Platform</h2>     
         <Image src={'/interview.png'} alt='interview'
        width={500}
        height={500}
        className='w-[280px] my-6'
        />
        <h2 className='font-bold text-lg '>{interviewData?.jobPosition}</h2>
        <h2 className='flex gap-2 items-center text-gray-500 mt-3'><Clock  className='h-4 w-4' /> {interviewData?.duration} </h2>
        
        <div className='w-full'>
            <h2>Enter your Full Name</h2>
            <Input placeholder='e.g. Jhon Smith' onChange={ (event)=>setUserName(event.target.value) } />
        </div>
        <div className='w-full mt-5'>
            <h2>Enter your Email</h2>
            <Input placeholder='e.g. jhon123@gmail.com' onChange={ (event)=>setUserEmail(event.target.value) } />
        </div>

        <div className='p-m bg-blue-100 flex gap-4 rounded-lg mt-5 p-3'>

            <Info className='text-primary' />
            
           <div>
           <h2 className='font-bold'>Before you begin</h2>
           <ul>
                <li>- Test your camera and microphone</li>
                <li>- Ensure you have a stable internet connection</li>
                <li>- find a Quiet place for interview</li>
            </ul>
           </div>
        </div>
        <Button className={'mt-5 e-full font-bold'} 
        disabled ={loading || !userName } 
        onClick = { ()=> onJoinInterview()}
        > <Video/>{loading&& <Loader2Icon/>}  Join Interview</Button>
      
       </div>

      
    </div>
  )
}


export default Interview