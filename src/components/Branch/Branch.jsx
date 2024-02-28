import Card from "../Card/Card"
import data from "../Json/data.json"
const Branch = () => {
  return (
    <>
      <div className='relative  rounded-[26px] w-full h-[200vh] '>
        <div className="w-full flex justify-center pb-[13vh]  text-zinc-600  font-semibold text-4xl"><span className="font-[Nanuto sans]">Choose your Branch</span></div>
        <div className=" flex flex-wrap gap-8 justify-between">
          {data.map((e) => {
            return <Card key={e.BranchId} btnTxt={e.Branch} branch={e.BranchLinkName} img={e.BranchImage} />
          })}
        </div>
      </div>
    </>
  )
}

export default Branch