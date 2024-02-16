import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import cse from '../Json/cse.json'


function Accordin() {
  return (
 <div  className="w-full px-4 pt-16">
   {
    cse.map((index)=>{
   return   <div key={index.id} className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
           <Disclosure>
          {({ open }) => (
          <>
           <Disclosure.Button key={index.id}  className="flex w-full justify-center rounded-lg bg-[#f1deb6] px-4 py-2 text-left text-sm font-semibold text-[black] hover:bg-[#f0d7aa] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
         <span>{index.Subject}</span>
         <ChevronUpIcon
           className={`${
             open ? 'rotate-180 transform' : ''
           } h-5 w-5 text-[#242424]`}
         />
          </Disclosure.Button>
          
          <Disclosure.Panel  className="px-4  pb-2  pt-4 cursor-pointer text-md text-black">
           
         {index.Sub.map((i)=>{
          return <div key={i.id}>
            {i.Module}
            </div>
         })}
            </Disclosure.Panel>
             </>
          )}
           </Disclosure>
        </div>
    })
   }
  </div>
  )
}

export default Accordin