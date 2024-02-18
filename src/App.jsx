import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import DropdownContainer from './components/Dropdown/DropdownContainer'
function App() {
  return (
    <>
    <DropdownContainer/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App