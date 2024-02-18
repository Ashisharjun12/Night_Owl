
import Cont from '../Dropdown/Cont'
import next from '../Json/next.json'

const DropdownContainer = () => {

    return (
        <>
            {next[0].Semester[0].Subjects.map((e) => {
                return  <Cont key={e.SubjectId} data={e}/>
                
                
            })}
        </>
    )
}

export default DropdownContainer
