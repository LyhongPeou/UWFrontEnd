import { styles } from "../../../styles"
import { notificationList } from "../../constants"



const StudentManagement = () => {

    return <>
        <h1 className={`${styles.dashHeadText} mb-5 `}> Student Management </h1>
        <div className="flex flex-col">
            <div className="h-[70vh] md:h-[60vh] w-full md:w-1/2 lg:w-1/3 overflow-y-auto border border-gray-300 rounded-md shadow-md p-4 bg-gray-50">
            </div>
        </div>
    </>
}

export default StudentManagement