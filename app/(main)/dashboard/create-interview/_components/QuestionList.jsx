// "use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2, Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import QuestionListContainer from './QuestionListContainer';
import { useUser } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/services/supabaseClient';

function QuestionList({formData,onCreateLink}) {

  const [loading , setLoading] = useState(false)
  const[questionList ,setQuestionList ] = useState();
  const {user}= useUser();
  const[saveLoading , setSaveLoading ] = useState(false);
    useEffect( ()=>{
      // console.log("use state")
        if(formData){
            GenerateQuestionList();
        }

    } ,[formData])

    const GenerateQuestionList = async ()=>{
      setLoading(true);
      // console.log("rajaaa",formData);
       try{
        const result = await axios.post("/api/ai-model",{
          ...formData
        })
        // console.log("yaha tak aa gye") ;
       
        const Content = result.data.content;
        // console.log("content",Content)
        const FINAL_CONTENT = Content.replace('```json','').replace ('```','');
        // console.log("finalconytemt",FINAL_CONTENT);

        setQuestionList(JSON.parse(FINAL_CONTENT)?.interviewQuestions);
        // console.log("result from open router",FINAL_CONTENT);        setLoading(false)
       }
       catch(e){
        toast("Server Error, Try Again! ");
        // console.log(e);
          setLoading(false);
       }
    }
    const onFinish= async()=>{
      setSaveLoading(true);
      const interview_id = uuidv4();
        const { data, error } = await supabase
        .from('Interviews')
        .insert([
          { 
            ...formData,
            questionList:questionList,
            userEmail:user?.email,
            interview_id:interview_id

           },
        ])
        .select()
        // console.log(data);
        setSaveLoading(false)

        onCreateLink(interview_id)


    }
   
  return (
    <div>
      {loading && 

       

          <div className='p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center' > 
              <Loader2Icon className='animate-spin'/>
              <div>
                <h2 className='font-medium'>Generating Interview Questions</h2>
                <p className='text-primary '>Our Ai is crafting personalized questions based on job position </p>
              </div>

          </div>

         
                   
        }

        {questionList?.length>0 &&
              
              <div>

                <QuestionListContainer questionList={questionList}/>

              </div>
            
        }
        <div className='flex justify-end mt-10'>

          <Button className="cursor-pointer" onClick={()=> onFinish()} disabled={saveLoading} >
            {saveLoading && <Loader2 className='animate-spin' />}
            Create Interview Link & Finish</Button>

        </div>
    </div>
  )
}

export default QuestionList