import {Link ,NavLink} from  'react-router-dom'
import Button from '../Button/Button'
import owl2 from '../Images/owl2.png'


function Navbar() {
 
  return (
    <>
      <nav className='flex  px-12 justify-between items-center font-[Nunito sans]  font-medium text-xl'> 
    
    <div className="logo">
       <Link to="/"> 
        <img src={owl2} className='w-[145px] h-[145px] bg-transparent' alt="logo" />
         </Link> 
    </div>
    
    <div className='nav'>
       <ul className='flex flex-wrap gap-20 cursor-pointer'>
        <li><NavLink to="/" className={({isActive})=> `${isActive ? "text-red-500" : "text-black"}`}> Home </NavLink> </li>
        <li> <NavLink to="/Categories" className={({isActive})=> `${isActive ? "text-red-500" : "text-black"}`}>Categories</NavLink></li>
        <li> <NavLink to="/About" className={({isActive})=>`${isActive ? "text-red-500" : "text-black"}`}>About </NavLink> </li>
       </ul>
      
    </div>
    <Link to='Account'> <Button style='py-[15px] px-[30px] text-[20px] ' btn='Login'/></Link>
   


  </nav>
 
    
    </>
  )
}

export default Navbar