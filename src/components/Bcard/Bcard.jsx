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
      <Card onClick={()=>NaviGator('Subject')} img={cse} btnTxt='Computer Science' branch="CSE"/>
      <Card img={iot} color={'green'} btnTxt='Internet Of Things' branch = "IOT"/>
      <Card img={ece}  btnTxt='Electrical and Communication Engineering' branch="ECE"/>
      <Card img={mech}  btnTxt='Mechnical Engineering' branch="Mechanical"/>
      <Card img={electrical}  btnTxt='Electrical and Electronics Engineering' branch="EEE"/>
      <Card img={fire}  btnTxt='Fire Technology' branch="Fire"/>
      <Card img={leather}  btnTxt='Leather Technology' branch="Leather" />
      <Card img={instrument}  btnTxt='Instrumental Engineering' branch="Instrumental" />
      <Card img={vivi}  btnTxt='Civil Engineering' branch ="Civil" />
     
    </div>
  )
}

export default Bcard