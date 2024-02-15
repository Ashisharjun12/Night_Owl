
import { useNavigate } from "react-router-dom"

function Semester({branch}) {

  const navigate = useNavigate()
  
  function option (value){
    navigate(`${branch}/${value}`)
  }
    
  return (
    <>
        
           <select  onChange={(e)=>option(e.target.value)}  className='flex bg-transparent cursor-pointer font-[Nunito sans]  font-semibold text-zinc-800 my-2 mx-auto' name="semester" id="sem">
            <option className='text-center cursor-pointer' value="0">SELECT SEMESTER</option>
            <option className='text-center cursor-pointer' value="Semester-1">SEMESTER - I</option>
            <option className='text-center cursor-pointer ' value="Semester-2">SEMESTER - II</option>
            <option className='text-center cursor-pointer ' value="Semester-3">SEMESTER - III</option>
            <option className='text-center cursor-pointer ' value="Semester-4">SEMESTER - IV</option>
            <option className='text-center cursor-pointer ' value="Semester-5">SEMESTER - V</option>
            <option className='text-center cursor-pointer ' value="Semester-6">SEMESTER - VI</option>
            <option className='text-center cursor-pointer ' value="Semester-7">SEMESTER - VII</option>
            <option className='text-center cursor-pointer ' value="Semester-8">SEMESTER - VIII</option>
           </select>
    </>
  )
}

export default Semester


