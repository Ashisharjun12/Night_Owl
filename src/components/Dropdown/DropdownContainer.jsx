import Cont from '../Dropdown/Cont'
import data from '../Json/data.json'
import PropTypes from 'prop-types';

const DropdownContainer = ({ semesterNumber, branch }) => {
    console.log(semesterNumber);
    let branchId;
    if (branch == "Computer_Science_Engineering")
        branchId = 0;
    else if (branch == "Internet_Of_Things") branchId = 1;
    else if (branch == "Electrical_and_Electronics_Engineering") branchId = 2;
    else if (branch == "Electrical_Engineering") branchId = 3;
    else if (branch == "Mechanical_Engennering") branchId = 4;
    else if (branch == "Civil_Engennering") branchId = 5;
    else if (branch == "Leather_Technology") branchId = 6;
    else if (branch == "Fire_Technology") branchId = 7;
    else if (branch == "Information_Technology") branchId = 8;
    else if (branch == "Instrumental_Engennering") branchId = 9;
    else if (branch == "Electrical_and_Communication_Engineering") branchId = 10;
    return (
        <>
            {data[branchId].Semester[`${semesterNumber}` - 1].Subjects.map((e) => {
                return <Cont key={e.SubjectId} data={e} />
            })}
        </>
    )
}

export default DropdownContainer

DropdownContainer.propTypes = {
    semesterNumber: PropTypes.number,
    branch: PropTypes.string
};