import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import Subject_Name from '../Branch_sem/Branch_Name';
import DropdownContainer from '../Dropdown/DropdownContainer';
import Sem_No from '../Branch_sem/Sem_No';


function Subject() {
  const { branch, value } = useParams();
  const semesterNumber = parseInt(value.replace('Semester-', ''));
  const data = (branch == "Computer_Science_Engineering" || branch == "Internet_Of_Things" || branch == "Mechanical_Engennering" || branch == "Instrumental_Engennering" || branch == "Leather_Technology" || branch == "Fire_Technology" || branch == "Civil_Engennering" || branch == "Electrical_Engineering" || branch == "Electrical_and_Electronics_Engineering" || branch == "Information_Technology" || branch == "Instrumental_Engennering" || branch == "Electrical_and_Communication_Engineering") && 'Semester-' + (semesterNumber >= 1 && semesterNumber <= 8)
  console.log(semesterNumber);
  return (
    <>
      {data ?

        <div className='mt-4 mb-0 mx-4'>
          <div className='w-full grid  justify-center text-white gap-3 lg:grid-cols-3  '>
            <div className='bg-green-500 h-[20vh] font-semibold col-span-3 text-center '>
              <h1><Subject_Name Branch_Name={branch} /></h1>
              <h1><Sem_No sem_no={value} /></h1>
            </div>
            <div className=" font-semibold text-black h-[80vh] col-span-1/2 text-center ">
              Subject

              <DropdownContainer branch={branch} semesterNumber={semesterNumber} />


              <div>

              </div>
            </div>
            <div className="font-semibold bg-blue-600 col-span-2 text-center">
              <h1>Subject Topics</h1>
              topics

            </div>
          </div>
        </div>

        : <Error />}
    </>
  )
}

export default Subject