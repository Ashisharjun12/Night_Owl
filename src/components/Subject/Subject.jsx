import React from 'react'
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
function Subject() {
    const {branch,value} = useParams();
  return (
   <>
  {(branch=="CSE" || branch=="IOT"|| branch =="Mechanical" || branch =="Instrumentaion" || branch =="Leather" || branch == "Fire" || branch == "Civil" || branch =="ECE" || branch =="EEE")&& (value>=1&&value<=8) ?
  
   <div className='mt-4 mb-0 mx-4'>
    <div className='w-full grid  justify-center text-white gap-3 lg:grid-cols-3  '>
    <div className='bg-green-500 h-[20vh] font-semibold col-span-3 text-center '>
      <h1>COMPUTER SCIENCE AND ENGENNERING</h1>
      <h1>SEMESTER - 1</h1>
    </div> 
    <div className=" font-semibold bg-red-600 h-[80vh] col-span-1/2 text-center ">
      Subjects
    </div>
    <div className="font-semibold bg-blue-600 col-span-2 text-center">Module</div>
   </div>
   </div> : <Error/>}
   </>
  )
}

export default Subject