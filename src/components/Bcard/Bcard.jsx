import { useNavigate } from "react-router-dom"

import Card from "../Card/Card"
import iot from '../Gifs/ii.gif'
import cse from '../Gifs/cse.gif'
import ece from '../Gifs/ece.gif'
import mech from '../Gifs/mech.gif'
import electrical from '../Gifs/electrical.gif'
import vivi from '../Gifs/vivi.gif'
import fire from '../Gifs/fire.gif'
import leather from '../Gifs/leather.gif'
import instrument from '../Gifs/instrument.gif'

function Bcard() {
  const NaviGator = useNavigate()

  return (
    <div className=" flex flex-wrap gap-8 justify-between">
      <Card onClick={()=>NaviGator('Subject')} img={cse} btnTxt='Computer Science'  />
      <Card img={iot} color={'green'} btnTxt='Internet Of Things'  />
      <Card img={ece}  btnTxt='Electrical and Electronics ' />
      <Card img={mech}  btnTxt='Mechnical Engennering' />
      <Card img={electrical}  btnTxt='Elecectrical Engennering ' />
      <Card img={fire}  btnTxt='Fire Technology ' />
      <Card img={leather}  btnTxt='Leather Technology ' />
      <Card img={instrument}  btnTxt='Instrumental Engennering ' />
      <Card img={vivi}  btnTxt='Civil Engennering ' />
     
    </div>
  )
}

export default Bcard