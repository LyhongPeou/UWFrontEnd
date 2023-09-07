import { styles } from "../../../styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons"
import { notificationList } from "../../constants";

const StudentManagement = () => {

    return <>
    
        <h1 className={`${styles.dashHeadText} mb-5 `}> Student Management </h1>
        <div className="flex flex-row justify-between">
        <div className="indicator">
                <button className="btn border border-white join-item bg-white text-white hover:underline hover:bg-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <FontAwesomeIcon icon={faPlus} className="text-accent"/>
                    <FontAwesomeIcon icon={faUser} className="text-accent"/>
                </button>
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-accent">Hello!</h3>
                    <p className="py-4 text-accent">FORM INPROGRESS</p>
                </div>
                </dialog>
                </div>
            <div className="join">
                <div>
                    <div>
                    <input className="input input-bordered join-item bg-white text-accent" placeholder="Search"/>
                    </div>
                </div>
                <div className="indicator">
                    <button className="btn border border-secondary join-item bg-secondary text-white hover:underline hover:bg-secondary">Search</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="h-[70vh] md:h-[60vh] w-full md:w-1/2 lg:w-full overflow-y-auto border border-gray-300 rounded-md shadow-md p-4 bg-gray-50 mt-5">
                {notificationList.map((notification, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-4 mb-4 rounded-md shadow-sm flex flex-col border border-gray-200"
                        >
                            <p className="mb-2 text-gray-800 font-semibold">
                                <strong>Student ID:</strong> {notification.studentID}
                            </p>
                            <p className="mb-2 text-gray-700">
                                <strong>Submission:</strong> {notification.submission.join(', ')}
                            </p>
                            <p className="text-gray-600">
                                <strong>Date:</strong> {notification.date}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    </>
}

export default StudentManagement