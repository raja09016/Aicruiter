import React from 'react'
import moment from 'moment'
// import { Button } from '@/components/ui/button'
import { ArrowRight, Copy, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import Link from 'next/link'
function InterviewCard({interview,viewDetail=false}) {
    const url = process.env.NEXT_PUBLIC_HOST_URL+'/interview/'+interview?.interview_id;

    const copyLink = ()=>{
        navigator.clipboard.writeText(url);
        toast("Copied")
    }
    const onSend = () => {
        const subject = encodeURIComponent("AiCruiter Interview Link");
        const body = encodeURIComponent("Interview Link: " + url);
        const mailtoLink = `mailto:rajarajak09016@gmail.com?subject=${subject}&body=${body}`;
        // console.log("Opening mailto:", mailtoLink);
        window.location.href = mailtoLink;
      };
      
      
  return (
    <div className='p-5 bg-white rounded-lg border'>
        <div className='flex items-center justify-between'>
            <div className='h-[40px] w-[40px] bg-primary rounded-full '> </div>
            <h2 className='text-sm'>{moment(interview?.created_at).format('DD MMM yyy')}</h2>
            
        </div>
        <h2 className='mt-3 font-bold text-lg'>{interview?.jobPosition}</h2>
        <h2 className='mt-2 flex justify-between text-gray-500'>{interview?.duration}
            <span className='text-green-700'>{interview['interview-feedback']?.length} Candidate</span>
        </h2>
        {
            !viewDetail? <div className='flex gap-3 w-full mt-5'>
            <Button  onClick={copyLink} variant='outline' className='w-1/2 cursor-pointer' > <Copy />Copy Link</Button>
            <Button onClick={onSend} className='w-1/2 cursor-pointer' > <Send/> Send</Button>
        </div>
        :
         <Link href={'/scheduled-interview/'+interview?.interview_id + '/details'}>
            <Button variant="outline" className=" cursor-pointer w-full mt-5">View Detail <ArrowRight/></Button>
         </Link>
        }
    </div>
  )
}

export default InterviewCard