import Bcard from "../Bcard/Bcard"

function Branch() {
  return (
    <>
   <div className='relative  rounded-[26px] w-full h-[200vh] '>
     <div className="w-full flex justify-center pb-[13vh]  text-zinc-600  font-semibold text-4xl"><span className="font-[Nanuto sans]">Choose your Branch</span></div> 

      <Bcard/>
     

   </div>
   
   
    </>
  )
}

export default Branch