import { styles } from "../../../styles";
import { documentList, notificationList } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faEye} from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';


function StudentInfo() {
    const { studentID } = useParams();
    const studentData = notificationList;
    const student = studentData.find(student => student.studentID === studentID);
    const studentName = student.name;

  return (
    <>
      <h1 className={`${styles.dashHeadText} mb-4`}>{studentName}'s Documents</h1>
      <div className="h-[70vh] w-full md:w-1/2 lg:w-full overflow-y-auto rounded-md shadow-md p-4 bg-gray-50 mt-5">
                <div className="flex flex-col gap-4">
                {student.submission.map((requirement, index) => (
                    <div key={index} className="bg-white p-4 mb-4 rounded-md shadow-sm border border-gray-300 flex flex-row items-center justify-between">
                    <div className="flex items-center">
                        <button className="btn bg-white text-accent text-[18px] hover:bg-white border border-white hover:border-white hover:text-secondary w-[60px] tooltip tooltip-bottom mr-3" data-tip="View">
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                        <div>
                        <h3 className="mb-2 text-gray-700 text-xl">
                            <strong>Document:</strong> {requirement}
                        </h3>
                        <h3 className="mb-2 text-gray-700 text-xl">
                            <strong>Deadline:</strong> {student.date}
                        </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <button className="btn bg-secondary text-white text-[20px] hover:bg-secondary border border-secondary hover:border-secondary mx-2 w-[60px] tooltip tooltip-bottom" data-tip="Approve">
                        <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button className="btn bg-base-200 text-white text-[20px] hover:bg-base-200 border border-base-200 hover:border-base-200 w-[60px] tooltip tooltip-bottom" data-tip="Reject">
                        <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
    </>
  );
}

export default StudentInfo;