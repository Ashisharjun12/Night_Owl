


function Button({style,btn }) {
  return (
    <>
     <a href='#' className={`${style} flex my-0 mx-auto  mb-[10px] items-center justify-center text-base font-bold leading-6 text-white bg-orange-600   rounded-lg hover:bg-orange-500 `}>
         {btn}
    </a>
    </>
  )
}

export default Button