import { Button } from '@/components/ui/button'
import moment from 'moment'
import React from 'react'
import CandidateFeedbackDialog from './CandidateFeedbackDialog'

function CandidatesList({CandidatesList}) {
    // console.log(CandidatesList)
  return (
    <div className=''>
        <h2 className='font-bold my-5'>Candidates {CandidatesList?.length}</h2>
         {  CandidatesList?.map((candidate,index)=>(
            <div key={index} className='p-5 flex items-center bg-white justify-between rounded-lg gap-3'>
                <div className='flex items-center gap-5'>
                    <h2 className="bg-primary p-3 px-4.5 rounded-full">{candidate.userName[0]}</h2>
                    <div>
                        <h2 className='font-bold'>{candidate.userName}</h2>
                        <h2 className='text-sm text-gray-500'>Completed On: {moment(candidate?.created_at).format("MMM DD,yyy")}</h2>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <h2 className='text-green-600'>6/10</h2>
                    <CandidateFeedbackDialog candidate={candidate}/>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default CandidatesList