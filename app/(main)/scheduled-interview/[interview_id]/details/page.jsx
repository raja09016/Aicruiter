'use client'
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import InterviewDetailContainer from './InterviewDetailContainer';
import CandidatesList from './_components/CandidatesList';

function InterviewDetail() {
    const {user} = useUser();
    const {interview_id} = useParams() ;
    const [interviewDetail , setInterviewDetail ] = useState();
    // console.log("id",interview_id)
    // console.log("user",user)
  
    useEffect( ()=>{
        user && getIntervieDetail();
    },[user])
    const getIntervieDetail = async ()=>{
        const result = await supabase.from('Interviews')
            .select(`jobPosition,jobDescription,type,questionList,duration,interview_id,created_at,
                interview-feedback(userEmail,userName,feedback,created_at)`)
            .eq('userEmail',user?.email)
            .eq('interview_id',interview_id)
            setInterviewDetail(result?.data[0]);
            
            console.log(result);

    }
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-2xl'>Interview Detail</h2>
        <InterviewDetailContainer interviewDetail={interviewDetail}   />
        <CandidatesList CandidatesList={interviewDetail?.['interview-feedback']}/>
    </div>
  )
}

export default InterviewDetail