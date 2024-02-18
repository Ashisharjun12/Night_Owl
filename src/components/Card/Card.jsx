
import Button from '../Button/Button'
import Semester from '../Semester/Semester'

function Card({ img, btnTxt, branch }) {
  return (
    <>
      <div className="relative w-[30%]  bg-[#fff6ee] rounded-[15px]">
        <img className="rounded-t-lg ml-[8%] justify-center w-[20vw] h-[14vw]  bg-transparent" src={img} alt="img" />
        <Semester branch={branch} />
        <Button btn={btnTxt} style='w-[90%] ' />
      </div>

    </>
  )
}

export default Card