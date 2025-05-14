import { Calendar, Clock } from 'lucide-react'
import moment from 'moment'
import React from 'react'

function InterviewDetailContainer({interviewDetail}) {
    // console.log("type",interviewDetail?.type)
    let types = []

    try {
      types = JSON.parse(interviewDetail?.type || '[]')
    } catch (error) {
      console.error('Invalid JSON in type field:', error)
    }

    // console.log("question",interviewDetail?.questionList[0])

  
  return (
    <div className='p-5 bg-white rounded-lg mt-5'>
        <h2 >{interviewDetail?.jobPosition}</h2>

        <div className='mt-4 flex items-center justify-between lg:pr-52'>
            <div>
                <h2 className='text-sm text-gray-500'>Duration</h2>
                <h2 className='flex text-md items-center gap-2'><Clock className='h-4 w-4' />{interviewDetail?.duration}</h2>
            </div>
            <div>
                <h2 className='text-sm text-gray-500'>Created On</h2>
                <h2 className='flex text-md items-center gap-2'><Calendar className='h-4 w-4' />{ moment(interviewDetail?.created_at).format('MMM DD yyy')}</h2>
            </div>
            <div>
                <h2 className='text-sm text-gray-500'>Type</h2>
                <h2 className='flex text-md overflow-auto items-center gap-2'><Clock className='h-4 w-4' />{types[0]}</h2>
            </div>
        </div>
        <div className='mt-5'>
            <h2 className='font-bold'>Job Description</h2>
            <p className='text-em leading-6'>{interviewDetail?.jobDescription}</p>
        </div>

        <div className='mt-5'>
         <h2 className='font-bold'>Interview Questions</h2>
         <div className='grid grid-cols-2 gap-3 mt-3'>
            {
                
                interviewDetail?.questionList.map( (item,index)=> (
                    <h2 key={index}className='text-xs'> {index+1}.{item?.question} </h2>
                ))
            }
         </div>

        </div>
    </div>
  )
}

export default InterviewDetailContainer