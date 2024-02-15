

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
 

  return (
    <div className=" flex flex-wrap gap-8 justify-between">
      <Card img={cse} btnTxt='Computer Science' branch="Computer_Science_Engennering"/>
      <Card img={iot} color={'green'} btnTxt='Internet Of Things' branch = "Internet_Of_Things"/>
      <Card img={ece}  btnTxt='Electrical and Communication Engineering' branch="Electrical_and_Communication_Engineering"/>
      <Card img={mech}  btnTxt='Mechnical Engineering' branch="Mechanical_Engennering"/>
      <Card img={electrical}  btnTxt='Electrical and Electronics Engineering' branch="Electrical_and_Electronics_Engineering"/>
      <Card img={fire}  btnTxt='Fire Technology' branch="Fire_Technology"/>
      <Card img={leather}  btnTxt='Leather Technology' branch="Leather_Technology" />
      <Card img={instrument}  btnTxt='Instrumental Engineering' branch="Instrumental_Engennering" />
      <Card img={vivi}  btnTxt='Civil Engineering' branch ="Civil_Engennering" />
     
    </div>
  )
}

export default Bcard