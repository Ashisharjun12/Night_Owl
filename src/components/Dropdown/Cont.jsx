import { useState } from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";



function Cont({data}) {
    const [isopen, Setisopen] = useState(false)
    
    return (
        
        
            <div  className='w-full justify-center text-center'>
               
            <button onClick={() => Setisopen(!isopen)} className='bg-[#f5d79f] w-[400px] flex gap-5 p-4  mb-2 justify-between items-center font-bold text-lg rounded-lg hover:bg-[#f4cd86]'>
              {data.Subject}
               <span>
                   {
                        isopen ? <IoIosArrowDropdownCircle className='h-8' /> : <IoIosArrowDropupCircle className='h-8' />
                   }
               </span>
           </button>
      



       {
           isopen && (
               <div>
                   <div className='w-full top-20 flex flex-col items-start rounded-lg p-2'>
                       <h1 className='cursor-pointer bg-[#fde0ac]  w-full p-1 rounded-lg'>
                        {data.Modules.map((e)=>{return <div className='border-red-500 border-2 p-2 border-solid'>Module {e.ModuleId}</div>})}
                       </h1>
                   </div>

               </div>
           )
       }


   </div>

         
          
    )
}

export default Cont