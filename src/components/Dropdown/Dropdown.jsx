import React, { useState } from 'react'
import { IoIosArrowDropdownCircle , IoIosArrowDropupCircle } from "react-icons/io";

import next from '../Json/next.json'


function Dropdown() {
    const [isopen ,Setisopen] = useState(false)
    console.log(Setisopen)
  return (
    next.map((index,i)=>{

       return <div key={Date.now} className='  w-full justify-center text-center'>

            {index.CSE.Sem.Sub.map((a)=>{
                return  <button  key={a.id} onClick={()=>Setisopen(prev => !prev)} className='bg-[#f5d79f] flex gap-5 p-4  mb-2 justify-between items-center font-bold text-lg rounded-lg hover:bg-[#f4cd86]'>
                {a.Sname}
            <span>
            {
            isopen ? <IoIosArrowDropdownCircle  className='h-8' /> : <IoIosArrowDropupCircle className='h-8' />
            }
            </span>
            </button>
            })}
       
       ///problem

            { 
                isopen && (
                    <div className='absolute'>
                         <div  className='w-full top-20 flex flex-col items-start rounded-lg p-2'>
                                <h1 className='cursor-pointer bg-[#fde0ac] w-full p-4 rounded-lg'>sub
                                </h1>
                            </div>
                        
                    </div>
                )
            }
        
       
        </div>
    })
  )
}

export default Dropdown